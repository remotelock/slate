//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang
//= require ./app/_config
//= require ./app/_remote-lock

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });

  loadConfig(function(config) {
    setBaseURLLabels(config.apiBaseURL);
    setOAuthURLLabels(config.oAuthBaseURL);
    setSupportLink(config.helpLinkURL);
    loadHelpWidget(config.zendeskWidgetKey);
  });
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
