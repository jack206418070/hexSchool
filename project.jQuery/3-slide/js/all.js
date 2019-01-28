$(document).ready(function () {
    $(".btn").click(function (e) { 
        e.preventDefault();
        $(".textbox").slideToggle("slow");
    });
});