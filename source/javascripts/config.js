(function () {
  "use strict";

  var CONFIG = {
    "_default": {
      apiBaseURL: "https://api.remotelock.com",
      oAuthBaseURL: "https://connect.remotelock.com",
      helpLinkURL: "https://support.remotelock.com",
      zendeskWidgetKey: ""
    },
    "remotelock.com": {
      apiBaseURL: "https://api.remotelock.com",
      oAuthBaseURL: "https://connect.remotelock.com",
      helpLinkURL: "https://support.remotelock.com",
      zendeskWidgetKey: ""
    }
  };

  function fetchDomainConfig() {
    for (var domain in CONFIG) {
      if (document.location.hostname.endsWith(domain)) {
        return CONFIG[domain];
      }
    }
    return CONFIG['_default'];
  };

  window.config = fetchDomainConfig();
})();
