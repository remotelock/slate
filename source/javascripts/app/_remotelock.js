//= require ../lib/_findandreplacedomtext

(function () {
  'use strict';

  window.loadRemoteLockConfig = function() {
    const content = document.getElementsByClassName('content')[0];
    setBaseURLLabels(content);
    setOAuthURLLabels(content);

    setSupportLink();
    loadHelpWidget();
  };

  function setBaseURLLabels(target) {
    findAndReplaceDOMText(target, { find: 'api.remotelock.com', replace: config.apiBaseURL })
  }

  function setOAuthURLLabels(target) {
    findAndReplaceDOMText(target, { find: 'connect.remotelock.com', replace: config.oAuthBaseURL })
  }

  function setSupportLink() {
    document.getElementById('support-link').setAttribute('href', config.helpLinkURL);
  }

  function loadHelpWidget() {
    if (config.zendeskWidgetKey) {
      window.zE||(function(e,t,s){var n=window.zE=window.zEmbed=function(){n._.push(arguments)}, a=n.s=e.createElement(t),r=e.getElementsByTagName(t)[0];n.set=function(e){ n.set._.push(e)},n._=[],n.set._=[],a.async=true,a.setAttribute("charset","utf-8"), a.src="https://static.zdassets.com/ekr/asset_composer.js?key="+s, n.t=+new Date,a.type="text/javascript",r.parentNode.insertBefore(a,r)})(document,"script",config.zendeskWidgetKey);
    }
  }
})();
