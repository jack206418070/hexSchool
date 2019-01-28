$(document).ready(function () {
  $(".open").click(function (e) { 
    e.preventDefault();
    $(".box1").delay(0).fadeIn(function(){
      $(this).addClass("changecolor");
    });
    $(".box2").delay(1000).fadeIn(function(){
      $(this).addClass("changecolor");
    });
    $(".box3").delay(2000).fadeIn(function(){
      $(this).addClass("changecolor");
      $(".box1,.box2,.box3").removeClass("changecolor");
      $(".box1,.box2,.box3").css("display","none");
    });
  });

});












