$(document).ready(function () {
  $(".button").click(function (e) {
    e.preventDefault();
    $("#box,.p1").toggle();
  });
  $(".button2").click(function (e) {
    e.preventDefault();
    $("#box2,.p2").toggle();
  });
});