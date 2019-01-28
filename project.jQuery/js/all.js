$(document).ready(function () {
    var i = false;
    $(".button").click(function (e) {
        e.preventDefault();
        i = !i;
        if(i == true){
            $("h1").hide();
        }else{
            $("h1").show();
        }
    });
});
