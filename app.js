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

  
});