module Jekyll

  class DownloadPage < Page
    def initialize(site, base, dir, filename, url)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      Jekyll.logger.debug "    Creating download page: #{filename}..."

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'download.html')
      self.data['title'] = "Downloading #{filename}..."
      self.data['download_filename'] = filename
      self.data['download_url'] = url
      self.data['download_time'] = 5
    end
  end

  class DownloadPageGenerator < Generator
    safe true

    def generate(site)
      beginning_time = Time.now
      Jekyll.logger.info "Starting plugin download_pages.rb..."
      checksums = ['md5', 'sha1', 'sha256', 'sha512']

      if site.layouts.key? 'download'
        data_dir = File.join(site.source, (site.config['data_dir'] || '_data'))
        download_dir = site.config['download_dir'] || 'download'
        download_obj = Hash.new

        files = Dir[File.join(data_dir, 'neard.json')].reject { |p| File.directory? p }
        files.each do |file|
          data = JSON.parse(File.read(file))
          next if !data.kind_of?(Hash)

          if File.basename(file) == 'neard.json'
            Jekyll.logger.debug "  Processing: #{data['name']}"
            data['releases'].each do |release|
              release['assets'].each do |asset|
                release_filename = data['filename'] + '-' + release['version'] + asset;
                release_url = site.config['github']['baseurl'] + '/' + data['repo'] + '/releases/download/v' + release['version'] + '/' + release_filename;
                if !download_obj[release_filename]
                  site.pages << DownloadPage.new(site, site.source, File.join(download_dir, release_filename), release_filename, release_url)
                  for checksum in checksums
                    site.pages << DownloadPage.new(site, site.source, File.join(download_dir, release_filename + '.' + checksum), release_filename + '.' + checksum, release_url + '.' + checksum)
                  end
                  download_obj[release_filename] = release_url
                end
              end
            end
          end
        end

        files = Dir[File.join(data_dir, 'module', '**', '*.json')].reject { |p| File.directory? p }
        files.each do |file|
          data = JSON.parse(File.read(file))
          next if !data.kind_of?(Hash) or !data['type']

          Jekyll.logger.debug "  Processing: #{data['name']}"
          data['releases'].each do |release|
            release['versions'].each do |version|
              module_filename = data['filename'] + '-' + version['name'] + '-' + release['name'] + '.' + version['ext'];
              module_url = site.config['github']['baseurl'] + '/' + data['repo'] + '/releases/download/' + release['name'] + '/' + module_filename;
              if !download_obj[module_filename]
                site.pages << DownloadPage.new(site, site.source, File.join(download_dir, module_filename), module_filename, module_url)
                for checksum in checksums
                  site.pages << DownloadPage.new(site, site.source, File.join(download_dir, module_filename + '.' + checksum), module_filename + '.' + checksum, module_url + '.' + checksum)
                end
                download_obj[module_filename] = module_url
              end
            end
          end
        end
      end

      end_time = Time.now
      Jekyll.logger.info "  done in #{(end_time - beginning_time)} seconds"
    end
  end

end