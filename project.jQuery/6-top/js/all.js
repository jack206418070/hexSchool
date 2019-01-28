$(document).ready(function() {

 $('.top a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop:300 
  }, 5000);
 });

});