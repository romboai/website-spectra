# frozen_string_literal: true

module Spectra
  module Gating
    module_function

    def blank_fact?(value)
      value.nil? || value == "" || value == false
    end

    def drop?(doc, flags)
      url = doc.url.to_s
      (url == "/benchmark/" && !flags[:benchmark]) ||
        (url == "/customers/" && !flags[:cases]) ||
        (url == "/docs/api/" && !flags[:api])
    end
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  facts = site.data["facts"] || {}
  product = facts["product"] || {}
  proof = facts["proof"] || {}

  flags = {
    benchmark: site.data.dig("benchmark", "published") == true,
    cases: begin
      node = proof["case_studies"] || {}
      node["verified"] && !Spectra::Gating.blank_fact?(node["value"])
    end,
    api: begin
      node = product["api_available"] || {}
      node["verified"] && !Spectra::Gating.blank_fact?(node["value"]) && node["value"] != false
    end
  }

  site.pages.reject! { |page| Spectra::Gating.drop?(page, flags) }
  site.collections.each_value do |collection|
    collection.docs.reject! { |doc| Spectra::Gating.drop?(doc, flags) }
  end
end
