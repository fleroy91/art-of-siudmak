# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :fonts_dir,  'fonts'

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  activate :minify_javascript
end

# activate :i18n, :mount_at_root => false

activate :google_analytics do |ga|
  ga.tracking_id = 'UA-125043242-1' # 'Adikteev Website' in Google Analytics
end

# activate :directory_indexes

activate :livereload

activate :deploy do |deploy|
  deploy.deploy_method   = :ftp
  deploy.host            = 'ftp.online.net'
  deploy.path            = '/www'
  deploy.user            = 'webmaster@art-of-siudmak.com'
  deploy.password        = 'z3ae2v[sTQhi'
  deploy.build_before = true
end