$(function(){
  $(".contact").hover(
    //マウスオーバー時の処理
    function() {
      $(this).css("opacity", 0.5);
    },
    //マウスアウト時の処理
    function() {
      $(this).css("opacity", 1.0);
    }
  );
// マウスが乗ったら背景色変更
  $('#NEWS').hover(function() {
    $(this).css("background-color", "#f0f0f0");
    }, function() {
    $(this).css("background-color", "white");
  });

  $('#ABOUT').hover(function() {
    $(this).css("background-color", "#f0f0f0");
    }, function() {
    $(this).css("background-color", "white");
  });

  $('#BUSINESS').hover(function() {
    $(this).css("background-color", "#f0f0f0");
    }, function() {
    $(this).css("background-color", "white");
  });

  $('#COMPANY').hover(function() {
    $(this).css("background-color", "#f0f0f0");
    }, function() {
    $(this).css("background-color", "white");
  });

  // マウスをクリックしたら選択した要素にスクロール
  $('#NEWS').on('click',function(){
    const newsTop = $('#news').offset().top;
    $("html").animate({scrollTop: newsTop}, 1500);
  });

  $('#ABOUT').on('click',function(){
    const aboutTop = $('#about').offset().top;
    $("html").animate({scrollTop: aboutTop}, 2500);
  });

  $('#BUSINESS').on('click',function(){
    const businessTop = $('#business').offset().top;
    $("html").animate({scrollTop: businessTop}, 2500);
  });
  
  $('#COMPANY').on('click',function(){
    const companyTop = $('#company').offset().top;
    $("html").animate({scrollTop: companyTop}, 3000);
  });
  
  var btn = $('.button-top');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 200) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
  });

  });
});