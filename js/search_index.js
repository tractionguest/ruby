var search_data = {"index":{"searchIndex":["addressparameter","addresssimilarityparameters","badrequesterror","badrequestformaterror","documentparameters","namededuplicationparameters","nameparameter","namesimilarityparameters","nametranslationparameters","requestbuilder","rosetteapi","rosetteapierror","get_address_similarity()","get_categories()","get_compound_components()","get_entities()","get_han_readings()","get_language()","get_lemmas()","get_morphology_complete()","get_name_deduplication()","get_name_similarity()","get_name_translation()","get_parts_of_speech()","get_relationships()","get_response()","get_semantic_vectors()","get_sentences()","get_sentiment()","get_similar_terms()","get_syntax_dependencies()","get_text_embedding()","get_tokens()","get_topics()","get_transliteration()","info()","initialize()","initialize()","initialize()","initialize()","initialize()","initialize()","initialize()","initialize()","initialize()","initialize()","load_param()","load_param()","load_params()","load_params()","load_params()","load_params()","load_params()","new()","new()","ping()","prepare_multipart_request()","prepare_plain_request()","send_get_request()","send_post_request()","to_hash()","to_hash()","to_hash()","to_hash()","to_hash()","to_hash()","to_hash()","user_agent()","validate_params()","validate_params()","validate_params()","validate_params()","validate_params()"],"longSearchIndex":["addressparameter","addresssimilarityparameters","badrequesterror","badrequestformaterror","documentparameters","namededuplicationparameters","nameparameter","namesimilarityparameters","nametranslationparameters","requestbuilder","rosetteapi","rosetteapierror","rosetteapi#get_address_similarity()","rosetteapi#get_categories()","rosetteapi#get_compound_components()","rosetteapi#get_entities()","rosetteapi#get_han_readings()","rosetteapi#get_language()","rosetteapi#get_lemmas()","rosetteapi#get_morphology_complete()","rosetteapi#get_name_deduplication()","rosetteapi#get_name_similarity()","rosetteapi#get_name_translation()","rosetteapi#get_parts_of_speech()","rosetteapi#get_relationships()","requestbuilder#get_response()","rosetteapi#get_semantic_vectors()","rosetteapi#get_sentences()","rosetteapi#get_sentiment()","rosetteapi#get_similar_terms()","rosetteapi#get_syntax_dependencies()","rosetteapi#get_text_embedding()","rosetteapi#get_tokens()","rosetteapi#get_topics()","rosetteapi#get_transliteration()","rosetteapi#info()","addressparameter#initialize()","addresssimilarityparameters#initialize()","badrequesterror#initialize()","badrequestformaterror#initialize()","documentparameters#initialize()","namededuplicationparameters#initialize()","nameparameter#initialize()","namesimilarityparameters#initialize()","nametranslationparameters#initialize()","rosetteapierror#initialize()","addressparameter#load_param()","nameparameter#load_param()","addresssimilarityparameters#load_params()","documentparameters#load_params()","namededuplicationparameters#load_params()","namesimilarityparameters#load_params()","nametranslationparameters#load_params()","requestbuilder::new()","rosetteapi::new()","rosetteapi#ping()","requestbuilder#prepare_multipart_request()","requestbuilder#prepare_plain_request()","requestbuilder#send_get_request()","requestbuilder#send_post_request()","addressparameter#to_hash()","addresssimilarityparameters#to_hash()","documentparameters#to_hash()","namededuplicationparameters#to_hash()","nameparameter#to_hash()","namesimilarityparameters#to_hash()","nametranslationparameters#to_hash()","rosetteapi#user_agent()","addresssimilarityparameters#validate_params()","documentparameters#validate_params()","namededuplicationparameters#validate_params()","namesimilarityparameters#validate_params()","nametranslationparameters#validate_params()"],"info":[["AddressParameter","","AddressParameter.html","","<p>This class represents an address in Rosette API.\n"],["AddressSimilarityParameters","","AddressSimilarityParameters.html","","<p>This class encapsulates parameters that are needed for address-similarity in Rosette API.\n"],["BadRequestError","","BadRequestError.html","","<p>This class represents Rosette API errors with badRequest status_code.\n"],["BadRequestFormatError","","BadRequestFormatError.html","","<p>This class represents Rosette API errors with badRequestFormat status_code.\n"],["DocumentParameters","","DocumentParameters.html","","<p>This class encapsulates parameters that will be used by most of the endpoints with exclusion of name-similarity …\n"],["NameDeduplicationParameters","","NameDeduplicationParameters.html","","<p>This class encapsulates parameters that are needed for name-deduplication in Rosette API.\n"],["NameParameter","","NameParameter.html","","<p>This class represents an entity name in Rosette API.\n"],["NameSimilarityParameters","","NameSimilarityParameters.html","","<p>This class encapsulates parameters that are needed for name-similarity in Rosette API.\n"],["NameTranslationParameters","","NameTranslationParameters.html","","<p>This class encapsulates parameters that are needed for name-translation in Rosette API.\n"],["RequestBuilder","","RequestBuilder.html","","<p>This class handles all Rosette API requests.\n"],["RosetteAPI","","RosetteAPI.html","","<p>This class allows you to access all Rosette API endpoints.\n"],["RosetteAPIError","","RosetteAPIError.html","","<p>This class encapsulates all Rosette API server errors encountered during requests.\n"],["get_address_similarity","RosetteAPI","RosetteAPI.html#method-i-get_address_similarity","(params)","<p>Compares two addresses and returns a match score from 0 to 1.\n<p>Attributes\n<p><code>params</code> - AddressSimilarityParameters …\n"],["get_categories","RosetteAPI","RosetteAPI.html#method-i-get_categories","(params)","<p>Extracts Tier 1 contextual categories from the input.\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build …\n"],["get_compound_components","RosetteAPI","RosetteAPI.html#method-i-get_compound_components","(params)","<p>Extracts compound-components from the input.\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the …\n"],["get_entities","RosetteAPI","RosetteAPI.html#method-i-get_entities","(params)","<p>Extracts entities from the input.\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the request body …\n"],["get_han_readings","RosetteAPI","RosetteAPI.html#method-i-get_han_readings","(params)","<p>Extracts Han-readings from the input.\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the request …\n"],["get_language","RosetteAPI","RosetteAPI.html#method-i-get_language","(params)","<p>Identifies in which language(s) the input is written.\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build …\n"],["get_lemmas","RosetteAPI","RosetteAPI.html#method-i-get_lemmas","(params)","<p>Extracts lemmas from the input.\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the request body …\n"],["get_morphology_complete","RosetteAPI","RosetteAPI.html#method-i-get_morphology_complete","(params)","<p>Extracts parts-of-speech, lemmas (dictionary form), compound components, and Han-readings for each token …\n"],["get_name_deduplication","RosetteAPI","RosetteAPI.html#method-i-get_name_deduplication","(params)","<p>De-duplicates a list of names.\n<p>Attributes\n<p><code>params</code> - NameDeduplicationParameters helps to build the request …\n"],["get_name_similarity","RosetteAPI","RosetteAPI.html#method-i-get_name_similarity","(params)","<p>Compares two entity names (person, location, or organization) and returns a match score from 0 to 1. …\n"],["get_name_translation","RosetteAPI","RosetteAPI.html#method-i-get_name_translation","(params)","<p>Translates a given name to a supported specified language.\n<p>Attributes\n<p><code>params</code> - NameTranslationParameters …\n"],["get_parts_of_speech","RosetteAPI","RosetteAPI.html#method-i-get_parts_of_speech","(params)","<p>Extracts parts-of-speech from the input.\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the request …\n"],["get_relationships","RosetteAPI","RosetteAPI.html#method-i-get_relationships","(params)","<p>Extracts relationships from the input.\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the request …\n"],["get_response","RequestBuilder","RequestBuilder.html#method-i-get_response","(http, request)","<p>Gets response from HTTP connection.\n<p>Attributes\n<p><code>http</code> - HTTP connection.\n"],["get_semantic_vectors","RosetteAPI","RosetteAPI.html#method-i-get_semantic_vectors","(params)","<p>Returns the vectors associated with the text\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the …\n"],["get_sentences","RosetteAPI","RosetteAPI.html#method-i-get_sentences","(params)","<p>Divides the input into sentences.\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the request body …\n"],["get_sentiment","RosetteAPI","RosetteAPI.html#method-i-get_sentiment","(params)","<p>Analyzes the positive and negative sentiment expressed by the input.\n<p>Attributes\n<p><code>params</code> - DocumentParameters …\n"],["get_similar_terms","RosetteAPI","RosetteAPI.html#method-i-get_similar_terms","(params)","<p>Returns the terms similar to the input\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the request …\n"],["get_syntax_dependencies","RosetteAPI","RosetteAPI.html#method-i-get_syntax_dependencies","(params)","<p>Returns the syntactic structure of the text\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the request …\n"],["get_text_embedding","RosetteAPI","RosetteAPI.html#method-i-get_text_embedding","(params)","<p>Returns the vectors associated with the text\n<p>Deprecated.  Please use `get_semantic_vectors` instead\n<p>Attributes …\n"],["get_tokens","RosetteAPI","RosetteAPI.html#method-i-get_tokens","(params)","<p>Divides the input into tokens.\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the request body in …\n"],["get_topics","RosetteAPI","RosetteAPI.html#method-i-get_topics","(params)","<p>Divides the input into topics (key phrases and concepts).\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps …\n"],["get_transliteration","RosetteAPI","RosetteAPI.html#method-i-get_transliteration","(params)","<p>Returns the transliteration of the content\n<p>Attributes\n<p><code>params</code> - DocumentParameters helps to build the request …\n"],["info","RosetteAPI","RosetteAPI.html#method-i-info","()","<p>Gets information about the Rosette API, returns name, build number and build time.\n"],["initialize","AddressParameter","AddressParameter.html#method-i-initialize","(options = {})",""],["initialize","AddressSimilarityParameters","AddressSimilarityParameters.html#method-i-initialize","(address1, address2)",""],["initialize","BadRequestError","BadRequestError.html#method-i-initialize","(message)",""],["initialize","BadRequestFormatError","BadRequestFormatError.html#method-i-initialize","(message)",""],["initialize","DocumentParameters","DocumentParameters.html#method-i-initialize","(options = {})",""],["initialize","NameDeduplicationParameters","NameDeduplicationParameters.html#method-i-initialize","(names, threshold, options = {})",""],["initialize","NameParameter","NameParameter.html#method-i-initialize","(text, options = {})",""],["initialize","NameSimilarityParameters","NameSimilarityParameters.html#method-i-initialize","(name1, name2, options = {})",""],["initialize","NameTranslationParameters","NameTranslationParameters.html#method-i-initialize","(name, target_language, options = {})",""],["initialize","RosetteAPIError","RosetteAPIError.html#method-i-initialize","(status_code, message)",""],["load_param","AddressParameter","AddressParameter.html#method-i-load_param","()","<p>Converts this class to Hash with its keys in lower CamelCase.\n<p>Returns the new Hash.\n"],["load_param","NameParameter","NameParameter.html#method-i-load_param","()","<p>Converts this class to Hash with its keys in lower CamelCase.\n<p>Returns the new Hash.\n"],["load_params","AddressSimilarityParameters","AddressSimilarityParameters.html#method-i-load_params","()","<p>Converts this class to Hash with its keys in lower CamelCase.\n<p>Returns the new Hash.\n"],["load_params","DocumentParameters","DocumentParameters.html#method-i-load_params","()","<p>Converts this class to Hash with its keys in lower CamelCase.\n<p>Returns the new Hash.\n"],["load_params","NameDeduplicationParameters","NameDeduplicationParameters.html#method-i-load_params","()","<p>Converts this class to Hash with its keys in lower CamelCase.\n<p>Returns the new Hash.\n"],["load_params","NameSimilarityParameters","NameSimilarityParameters.html#method-i-load_params","()","<p>Converts this class to Hash with its keys in lower CamelCase.\n<p>Returns the new Hash.\n"],["load_params","NameTranslationParameters","NameTranslationParameters.html#method-i-load_params","()","<p>Converts this class to Hash with its keys in lower CamelCase.\n<p>Returns the new Hash.\n"],["new","RequestBuilder","RequestBuilder.html#method-c-new","(user_key, alternate_url, http_client, binding_version, params = {}, url_parameters = nil)",""],["new","RosetteAPI","RosetteAPI.html#method-c-new","(user_key, alternate_url = 'https://api.rosette.com/rest/v1')",""],["ping","RosetteAPI","RosetteAPI.html#method-i-ping","()","<p>Pings the Rosette API for a response indicting that the service is available.\n"],["prepare_multipart_request","RequestBuilder","RequestBuilder.html#method-i-prepare_multipart_request","(params)","<p>Prepares a multipart/form-data POST request for Rosette API.\n<p>Attributes\n<p><code>params</code> - Parameters to build the …\n"],["prepare_plain_request","RequestBuilder","RequestBuilder.html#method-i-prepare_plain_request","(params)","<p>Prepares a plain POST request for Rosette API.\n<p>Attributes\n<p><code>params</code> - Parameters to build the body of the …\n"],["send_get_request","RequestBuilder","RequestBuilder.html#method-i-send_get_request","()","<p>Sends a GET request to Rosette API.\n<p>Returns JSON response or raises RosetteAPIError if encountered.\n"],["send_post_request","RequestBuilder","RequestBuilder.html#method-i-send_post_request","()","<p>Sends a POST request to Rosette API.\n<p>Returns JSON response or raises RosetteAPIError if encountered.\n"],["to_hash","AddressParameter","AddressParameter.html#method-i-to_hash","()","<p>Converts this class to Hash.\n<p>Returns the new Hash.\n"],["to_hash","AddressSimilarityParameters","AddressSimilarityParameters.html#method-i-to_hash","()","<p>Converts this class to Hash.\n<p>Returns the new Hash.\n"],["to_hash","DocumentParameters","DocumentParameters.html#method-i-to_hash","()","<p>Converts this class to Hash.\n<p>Returns the new Hash.\n"],["to_hash","NameDeduplicationParameters","NameDeduplicationParameters.html#method-i-to_hash","()","<p>Converts this class to Hash.\n<p>Returns the new Hash.\n"],["to_hash","NameParameter","NameParameter.html#method-i-to_hash","()","<p>Converts this class to Hash.\n<p>Returns the new Hash.\n"],["to_hash","NameSimilarityParameters","NameSimilarityParameters.html#method-i-to_hash","()","<p>Converts this class to Hash.\n<p>Returns the new Hash.\n"],["to_hash","NameTranslationParameters","NameTranslationParameters.html#method-i-to_hash","()","<p>Converts this class to Hash.\n<p>Returns the new Hash.\n"],["user_agent","RosetteAPI","RosetteAPI.html#method-i-user_agent","()","<p>Gets the User-Agent string\n"],["validate_params","AddressSimilarityParameters","AddressSimilarityParameters.html#method-i-validate_params","()","<p>Validates the parameters by checking if address1 and address2 are instances of AddressParameter.\n"],["validate_params","DocumentParameters","DocumentParameters.html#method-i-validate_params","()","<p>Validates the parameters by checking if there are multiple content sources set or no content provided …\n"],["validate_params","NameDeduplicationParameters","NameDeduplicationParameters.html#method-i-validate_params","()","<p>Validates the parameters by checking if name1 and name2 are instances of a String or NameParameter.\n"],["validate_params","NameSimilarityParameters","NameSimilarityParameters.html#method-i-validate_params","()","<p>Validates the parameters by checking if name1 and name2 are instances of a String or NameParameter.\n"],["validate_params","NameTranslationParameters","NameTranslationParameters.html#method-i-validate_params","()","<p>Validates the parameters by checking if rosette_options is an instance of a Hash.\n"]]}}