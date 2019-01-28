var el = document.querySelector(".box");
var trap = document.querySelector("#trap");
var body = document.body;

function colorChange(){
    trap.style.background = "red";
    alert("你觸碰到陷阱區域");
}




function initbox(e){
    console.log(e.keyCode);
    if(e.keyCode == 32){
    trap.style.background = "green";
    }
}


trap.addEventListener("mousemove",colorChange,false);
body.addEventListener("keydown",initbox,false);