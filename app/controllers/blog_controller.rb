require 'open-uri'
class BlogController < ApplicationController
  def proxy
    result = Nokogiri.parse(open("http://original-fuzz.myshopify.com/#{request.fullpath}")).css('#content').first.to_s
    render text: result, layout: 'application'
  end
end
