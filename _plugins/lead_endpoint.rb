# frozen_string_literal: true

Jekyll::Hooks.register :site, :after_init do |site|
  from_env = ENV["LEAD_FORM_ENDPOINT"].to_s.strip
  site.config["lead_form_endpoint"] = from_env unless from_env.empty?

end
