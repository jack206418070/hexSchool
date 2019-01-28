

// var el = document.querySelector('.btn');

// el.onclick = function(event){
//   console.log(event);
//   alert("你在座標x:"+event.x+" y: "+event.y);
// }


var btn = document.querySelector(".btn");


btn.onclick = function(event){
  alert("hello!你在座標 x : "+event.x+" y: "+event.y+"點擊了按鈕");
}


//利用監聽的方法實現event  addEventListener(1,2,3) 1 事件 2 匿名function 3 false true
var btn2 = document.querySelector(".btn2");

btn2.addEventListener("click",function(event){
  alert("hello!你在座標 x : "+event.x+" y: "+event.y+"點擊了按鈕");
},false);