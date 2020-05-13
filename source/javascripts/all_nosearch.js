//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang
//= require ./app/_config
//= require ./app/_zendesk

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });

  loadConfig(function(config) {
    setSupportLink(config.zendesk.url);
    loadHelpWidget(config.zendesk.key);
  });
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
