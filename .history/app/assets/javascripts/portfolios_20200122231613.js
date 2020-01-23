$(function(){
  var fix    = $(".menubar__nav");             //メニューオブジェクトを格納
  var fixTop = fix.offset().top;             //メニューの縦座標を格納
  $(window).load(function () {             //スクロールが発生したら開始
    if($(window).scrollTop() >= fixTop) {    //スクロール時の縦座標がメニューの縦座標以上なら…
      fix.css("position","fixed");           //メニューに position:fixed 付与
      fix.css("top","0");                    //メニューに top:0 付与
    } 
  });
});