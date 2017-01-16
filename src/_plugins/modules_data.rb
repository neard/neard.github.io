module Jekyll

  class ModulesDataGenerator < Generator
    safe true
    priority :high

    def generate(site)
      beginning_time = Time.now
      Jekyll.logger.info "Starting plugin modules_data.rb..."

      modules_obj = Array.new
      data_module_dir = File.join(site.source, (site.config['data_dir'] || '_data'), 'module')
      files = Dir[File.join(data_module_dir, '**', '*.json')].reject { |p| File.directory? p }
      files.each do |file|
        data = JSON.parse(File.read(file))
        next if !data.kind_of?(Hash) or !data['module']
        modules_obj << data['module']
      end

      data_source = File.join(data_module_dir, 'all.json')
      open(data_source, 'wb') do |file|
        file << JSON.pretty_generate(modules_obj)
      end

      end_time = Time.now
      Jekyll.logger.info "  done in #{(end_time - beginning_time)} seconds"
    end
  end

end