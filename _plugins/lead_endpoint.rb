# frozen_string_literal: true

Jekyll::Hooks.register :site, :after_init do |site|
  from_env = ENV["LEAD_FORM_ENDPOINT"].to_s.strip
  site.config["lead_form_endpoint"] = from_env unless from_env.empty?

  production_build = ENV["JEKYLL_ENV"] == "production"
  endpoint = site.config["lead_form_endpoint"].to_s.strip
  next unless production_build
  next unless endpoint.empty?

  raise Jekyll::Errors::FatalException,
        "lead_form_endpoint is required when JEKYLL_ENV=production. " \
        "Set LEAD_FORM_ENDPOINT or configure lead_form_endpoint in _config.yml."
end
