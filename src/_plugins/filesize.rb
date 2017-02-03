module Jekyll

  module FilesizeFilter
    def filesize(value)
      filesize_tb = 1099511627776.0
      filesize_gb = 1073741824.0
      filesize_mb = 1048576.0
      filesize_kb = 1024.0

      begin
        value = value.to_f
      rescue => e
        puts "#{e.class} #{e}"
        return value
      end

      if value >= filesize_tb
        return "%s TB" % (value / filesize_tb).to_f.round(2)
      elsif value >= filesize_gb
        return "%s GB" % (value / filesize_gb).to_f.round(2)
      elsif value >= filesize_mb
        return "%s MB" % (value / filesize_mb).to_f.round(2)
      elsif value >= filesize_kb
        return "%s KB" % (value / filesize_kb).to_f.round(0)
      elsif value == 1
        return "1 byte"
      else
        return "%s bytes" % value.to_f.round(0)
      end
    end
  end

end

Liquid::Template.register_filter(Jekyll::FilesizeFilter)