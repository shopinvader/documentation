source 'https://rubygems.org'

# Use https for github source
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'locomotivecms_wagon', github: 'akretion/wagon', branch: 'wagon-doc'
gem 'locomotivecms_steam', github: 'akretion/steam', branch: 'wagon-doc'

group :misc do
  gem 'shop_invader', github: 'shopinvader/locomotive-shopinvader', branch: 'v4.0.x'
end
