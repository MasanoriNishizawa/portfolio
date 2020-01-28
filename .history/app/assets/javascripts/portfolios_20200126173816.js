$(document).ready(function() {
  var pagetop = $('.pagetop');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});

$(function() {
 
  //ページ内スクロール
  $(".btn_sample").click(function () {
      var i = $(".btn_sample").index(this)
      var p = $(".content").eq(i).offset().top;
      $('html,body').animate({ scrollTop: p }, 'fast');
      return false;
  });

  //ページ上部へ戻る
  $(".btn_top").click(function () {
      $('html,body').animate({ scrollTop: 0 }, 'fast');
      return false;
  });

});