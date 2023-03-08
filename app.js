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

  $('#NEWS').on('click',function(){
    const newsTop = $('#news').offset().top;
    $("html").animate({scrollTop: newsTop});
  });

  $('#ABOUT').on('click',function(){
    const aboutTop = $('#about').offset().top;
    $("html").animate({scrollTop: aboutTop});
  });

  $('#BUSINESS').on('click',function(){
    const businessTop = $('#business').offset().top;
    $("html").animate({scrollTop: businessTop});
  });
  
  $('#COMPANY').on('click',function(){
    const companyTop = $('#company').offset().top;
    $("html").animate({scrollTop: companyTop});
  });


});