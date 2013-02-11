require 'bundler/setup'
require 'coffee-script'
require 'rake/clean'

task :server do
  system %{bundle exec thin -R config.ru start}
end

rule '.js' => '.coffee' do |t|
  puts "Compiling #{t.source} => #{t.name}"
  File.write(t.name, CoffeeScript.compile(File.read(t.source)))
end

CLEAN.include "public/js/*.js"
FileList['public/js/*.coffee'].ext('js').each do |f|
  task :coffee => f
end

task :default => :coffee

