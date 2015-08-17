desc "build the site"
task :default do
  pids = [
    spawn("jekyll serve --watch --baseurl ''")
    # spawn("scss --watch assets")
  ]
 
  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end
 
  loop do
    sleep 1
  end
end

desc "prettify html"
task :pp do
  require 'nokogiri'
  xsl = Nokogiri::XSLT(File.open("pretty_print.xsl"))
  files = Dir[File.join("_site", "**/*.{html}")]
  files.each do |f|
    html = Nokogiri(File.open(f))
    text = xsl.apply_to(html).to_s
    text = "<!DOCTYPE html>" + text[text.index("\n") + 1, text.size]
    # text.gsub!(/(?<=.js")\/>/, "></script>") # rewrite script tags
    File.open(f, "w"){|file| file.write(text)}
  end
end