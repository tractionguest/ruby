# frozen_string_literal: true

require 'rosette_api'

api_key, url = ARGV

rosette_api = if url
                RosetteAPI.new(api_key, url)
              else
                RosetteAPI.new(api_key)
              end

similar_terms_data = 'spy'
begin
  params = DocumentParameters.new(content: similar_terms_data)
  params.rosette_options = { 'resultLanguages' => %w[spa deu jpn] }
  response = rosette_api.get_similar_terms(params)
  puts JSON.pretty_generate(response)
rescue RosetteAPIError => e
  printf('Rosette API Error (%<status_code>s): %<message>s',
         status_code: e.status_code,
         message: e.message)
end
