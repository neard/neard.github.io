require 'open-uri'

module Jekyll

  class GithubContentTag < Liquid::Tag
    GITHUB_RAW_URI = 'https://raw.githubusercontent.com/'
    WEB_URI_PART = 'blob'

    def initialize(tag_name, params, tokens)
      @user, @repo, @commitish_or_branch, @filename, @line_start, @line_end = params.split
      @line_start, @line_end = resolve_line_numbers(@line_start, @line_end)
      super
    end

    def render(context)
      env = context.registers[:site].config['env']
      if context[@user.strip]
        @user = context[@user.strip]
      end
      if context[@repo.strip]
        @repo = context[@repo.strip]
      end
      if context[@commitish_or_branch.strip]
        @commitish_or_branch = context[@commitish_or_branch.strip]
      end
      if context[@filename.strip]
        @filename = context[@filename.strip]
      end

      Jekyll.logger.debug "user: #{@user}"
      Jekyll.logger.debug "repo: #{@repo}"
      Jekyll.logger.debug "commitish_or_branch: #{@commitish_or_branch}"
      Jekyll.logger.debug "filename: #{@filename}"
      Jekyll.logger.debug "lines: #{@line_start},#{@line_end}"

      url = File.join(GITHUB_RAW_URI, @user, @repo, WEB_URI_PART, @commitish_or_branch, @filename)

      tmp_dir = File.join('tmp', 'neard')
      FileUtils.mkdir_p tmp_dir
      file = File.join(tmp_dir, File.basename(@filename))

      file_renew = true
      if File.exist?(file)
        file_renew = (Time.now - File.mtime(file)) > 3600
      end
      if env == 'production' or file_renew
        content = open(url, {
          ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE
        }).read
        open(file, 'wb') do |the_file|
          the_file << content
        end
      end

      all_lines = open(file, 'rb').readlines
      lines = all_lines[@line_start..@line_end]
      lines.join
    end

    def resolve_line_numbers(first, last)
      if first.nil? && last.nil?
        first = 0
        last  = -1
      elsif last.nil?
        last = first
      end

      [first.to_i, last.to_i]
    end
  end

end

Liquid::Template.register_tag('github_content', Jekyll::GithubContentTag)