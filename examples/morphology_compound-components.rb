# frozen_string_literal: true

require 'rosette_api'

api_key, url = ARGV

rosette_api = if url
                RosetteAPI.new(api_key, url)
              else
                RosetteAPI.new(api_key)
              end

morphology_compound_components_data = 'Rechtsschutzversicherungsgesellschaften'
begin
  params = DocumentParameters.new(
    content: morphology_compound_components_data
  )
  response = rosette_api.get_compound_components(params)
  puts JSON.pretty_generate(response)
rescue RosetteAPIError => rosette_api_error
  printf('Rosette API Error (%<status_code>s): %<message>s',
         status_code: rosette_api_error.status_code,
         message: rosette_api_error.message)
end
