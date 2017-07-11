module Jekyll

  class ModulePage < Page
    def initialize(site, base, dir, the_module)
      @site = site
      @base = base
      @dir = dir
      @name = "#{the_module['name']}.md"

      Jekyll.logger.debug "  Creating module page: #{the_module['name']}..."

      # Latest releases
      latest = Array.new
      latest_h = Hash.new
      the_module['versions'].each do |version, version_data|
        the_module['releases'].each do |release|
          release['versions'].each do |release_version|
            is_new_version = version.eql? release_version['name']
            if (release_version.key? 'pack') && (version.eql? release_version['pack'].to_a[-1])
              is_new_version = true
            end
            if (!latest_h.key?(version)) && is_new_version
              release_version['release'] = release['name']
              release_version['release_date'] = release['date']
              latest_h[version] = release_version
              latest.push release_version
              break
            end
          end
        end
      end

      self.process(@name)
      self.read_yaml(File.join(base, "_layouts"), "module.html")
      self.data['title'] = the_module['label']
      self.data['subtitle'] = the_module['desc'].gsub(/\.$/, '').sub(/^(\w)/) {|s| s.capitalize}
      self.data['module'] = the_module
      self.data['latest'] = latest.reverse
      self.data['sitemap'] = { "priority" => "0.7", "changefreq" => "daily" }
    end
  end

  class ModulePageGenerator < Generator
    safe true

    def generate(site)
      beginning_time = Time.now
      Jekyll.logger.info "Starting plugin module_pages.rb..."

      if site.layouts.key? 'module'
        data_module_dir = File.join(site.source, (site.config['data_dir'] || '_data'), 'module')

        files = Dir[File.join(data_module_dir, '**', '*.json')].reject { |p| File.directory? p }
        files.each do |file|
          data = JSON.parse(File.read(file))
          next if !data.kind_of?(Hash) or !data['type']
          site.pages << ModulePage.new(site, site.source, File.join(data['type']), data)
        end
      end

      end_time = Time.now
      Jekyll.logger.info "  done in #{(end_time - beginning_time)} seconds"
    end
  end

end