//= require ./all_nosearch
//= require ./app/_search

$('.mobileMenu').on('click', function(e) {
    $(this).toggleClass("collapsed pressed");
    e.preventDefault();
  });
