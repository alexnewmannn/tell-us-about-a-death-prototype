/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  const hospitalLocationEl = document.getElementById('hospital-location');
  if (hospitalLocationEl) {
    accessibleAutocomplete.enhanceSelectElement({
      selectElement: hospitalLocationEl,
      classes: "govuk-!-width-two-thirds",
      name: "hospital-location-autocomplete"
    });
  }
})
