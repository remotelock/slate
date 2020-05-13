//= require ../lib/_jquery

(function () {
  "use strict";

  window.loadConfig = loadConfig;

  function loadConfig(configure) {
    $.getJSON("javascripts/config.json", function (json) {
      const hostConfig = json[document.location.hostname];

      configure(hostConfig);
    });
  }
})();
