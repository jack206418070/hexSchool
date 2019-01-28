$(document).ready(function () {
    $(".start").click(function (e) {
        e.preventDefault();
        $(".box").slideUp(1000).show(1000).fadeIn(1000).hide(1000).show(1000).slideUp(1000).slideDown(3000, function () {
            $(this).css({
                "width": "500px",
                "height": "500px",
                "background": "yellow",
            })
        });
    });
});