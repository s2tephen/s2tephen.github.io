desc 'build the site'
task :default do
  pid = spawn 'guard'

  Signal.trap(:INT) do
    Process.wait pid
    exit
  end

  Process.wait pid
end

desc 'prettify html'
task :pp do
  require 'nokogiri'

  xsl = Nokogiri::XSLT(File.open('pretty_print.xsl'))
  header = "<!DOCTYPE html>\n<html lang=\"en-us\" class=\"u-fullWidth u-fullHeight\">\n  <head>"
  meta = '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'

  files = Dir[File.join('_site', '**/*.{html}')]
  files.each do |f|
    html = Nokogiri(File.open(f))
    pretty = xsl.apply_to(html).to_s
    pretty = header + pretty[(pretty.index(meta) + meta.size), pretty.size].gsub!(/\n    /, "\n")
    File.open(f, 'w') { |file| file.write(pretty) }
  end
end
