$(document).ready(function() {
  var pagetop = $('.pagetop');
    $(window).scroll(function () {
  5
         if ($(this).scrollTop() > 100) {
  6
              pagetop.fadeIn();
  7
         } else {
  8
              pagetop.fadeOut();
  9
              }
  10
         });
  11
         pagetop.click(function () {
  12
             $('body, html').animate({ scrollTop: 0 }, 500);
  13
                return false;
  14
     });
  15
  });
  