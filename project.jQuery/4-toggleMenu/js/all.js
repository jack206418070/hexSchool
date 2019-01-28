$(document).ready(function() {

  $(".dropdown").click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $(this).toggleClass('active').parent().siblings().find("a").removeClass("active");
    $(this).parent().find(".dropdown-open").slideToggle().parent().siblings().find(".dropdown-open").slideUp();
  });
});