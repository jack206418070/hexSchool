$(document).ready(function () {
    $(".shopmall a").click(function (e) { 
        e.preventDefault();
        $(this).parent().toggleClass("active");
    });
});