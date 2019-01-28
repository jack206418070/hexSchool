
var str = 'tom';

localStorage.setItem("myName", str);


console.log(localStorage.getItem('myName'));








var btn = document.querySelector(".btnClass");
var call = document.querySelector(".btnCall");

function saveName(){
    var str = document.querySelector(".textClass").value;
    localStorage.setItem("myName",str);
    console.log(str);
}

function callName(){
    var str = localStorage.getItem("myName");
    alert("你的名子是:  "+str);
}


btn.addEventListener("click",saveName,false);
call.addEventListener("click",callName,false);









