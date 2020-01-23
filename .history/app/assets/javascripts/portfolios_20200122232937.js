$(function(){
  $(window).scroll(function() {
    if ($(window).scrollTop() >= offset.top) {
      $nav.addClass('fixed');
      $(".header").css("margin-top", navHeight);
    } else {
      $nav.removeClass('fixed');
      $(".header").css("margin-top", "0");
    }
  });
});

