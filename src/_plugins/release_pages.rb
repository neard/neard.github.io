require 'json'
require 'open-uri'

module Jekyll

  class ReleasePage < Page
    def initialize(site, base, dir, release, changelog_md, upgrade_md)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      Jekyll.logger.debug "  Creating release page: #{release['version']}..."

      github_url = 'https://api.github.com/repos/crazy-max/neard/releases/tags/v' + release['version']
      if ENV['GH_TOKEN']
        github_url = github_url + '?access_token=' + ENV['GH_TOKEN']
      end

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'release.html')
      self.data['title'] = "Release #{release['version']}"
      self.data['release'] = release
      self.data['changelog'] = changelog_md
      self.data['upgrade'] = upgrade_md
      self.data['github_api'] = JSON.load(ReleasePageUtils.get_content_from_url(site, github_url, release['version'] + '.json'))
      if File.basename(dir) == 'latest'
        self.data['sitemap'] = { "priority" => "0.8", "changefreq" => "daily" }
      else
        self.data['sitemap'] = {}
      end
    end
  end

  class ReleasesPage < Page
    def initialize(site, base, dir, changelog_md, upgrade_md)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      Jekyll.logger.debug "  Creating releases page..."

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'releases.html')
      self.data['changelog'] = changelog_md
      self.data['upgrade'] = upgrade_md
      self.data['sitemap'] = { "priority" => "0.8", "changefreq" => "daily" }
    end
  end

  class ReleasePageGenerator < Generator
    safe true

    def generate(site)
      beginning_time = Time.now
      Jekyll.logger.info "Starting plugin release_pages.rb..."

      if site.layouts.key? 'release'
        ## Download CHANGELOG.md
        changelog_md = ReleasePageUtils.get_content_from_url(site,
          'https://raw.githubusercontent.com/crazy-max/neard/master/CHANGELOG.md',
          'changelog.md'
        )

        ## Download UPGRADE.md
        upgrade_md = ReleasePageUtils.get_content_from_url(site,
          'https://raw.githubusercontent.com/crazy-max/neard/master/UPGRADE.md',
          'upgrade.md'
        )

        site.pages << ReleasesPage.new(site, site.source, 'releases', changelog_md, upgrade_md)

        release_dir = site.config['release_dir'] || 'release'
        data_dir = File.join(site.source, (site.config['data_dir'] || '_data'))
        data = JSON.load(File.read("#{data_dir}/neard.json"))
        data['releases'].each do |release|
          site.pages << ReleasePage.new(site, site.source, File.join(release_dir, release['version']), release, changelog_md, upgrade_md)
        end
        site.pages << ReleasePage.new(site, site.source, File.join(release_dir, 'latest'), data['releases'][0], changelog_md, upgrade_md)
      end

      end_time = Time.now
      Jekyll.logger.info "  done in #{(end_time - beginning_time)} seconds"
    end
  end

  class ReleasePageUtils
    def self.get_content_from_url(site, url, filename)
      result = ''

      tmp_dir = File.join('tmp', 'neard')
      FileUtils.mkdir_p tmp_dir
      file = File.join(tmp_dir, filename)

      file_renew = true
      if File.exist?(file)
        file_renew = (Time.now - File.mtime(file)) > 3600
      end
      if site.config['env'] == 'production' or file_renew
        result = open(url, {
          ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE
        }).read
        open(file, 'wb') do |the_file|
          the_file << result
        end
      else
        result = open(file, 'rb').read
      end

      return result
    end
  end

end