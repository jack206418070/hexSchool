$(document).ready(function () {
  $(".button").click(function (e) { 
    e.preventDefault();
    //若選擇到的標籤上沒有active 就會加入 若有就會移除
    $(".text").toggleClass("active");
    //$(".text").addClass("active");
    //$(".text").removeClass("active");
  });
});













// $(document).ready(function() {
//   $('.button').click(function(event) {
//     $('.text').toggleClass('active');
//     // $('.text').addClass('active');
//     // $('.text').removeClass('active');
//   });
// });