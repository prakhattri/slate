//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};

//trigger dropdown display for slate top menu 
//$('li[value="dropdown"]').mouseenter( function() {
//	$('.dropdown').attr('style','display: block!important');
//	$('.toc-wrapper').css('top', '133px');
//});


//$('li[value="dropdown"]').mouseleave( function() {
//    $('.dropdown').attr('style','display: none!important');
//	  $('.toc-wrapper').css('top','78px');
//});


/*$('.dropdown').mouseenter( function() {
	$(this).attr('style', 'display: block!important');
  $('.toc-wrapper').css('top', '133px')
  var entered = 
});

$('.dropdown').mouseleave( function() {
	$(this).attr('style', 'display: none!important');
	$('.toc-wrapper').css('top', '78px')
}); */
