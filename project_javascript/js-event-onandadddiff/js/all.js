
var elOn = document.querySelector('.btnOn');
elOn.onclick = function (){
  alert('on-1');
}
elOn.onclick = function (){
  alert('on-2');
}
// 事件監聽
var elAd = document.querySelector('.btnAdd');
elAd.addEventListener('click',function(){
  alert('add-1')
},false)
elAd.addEventListener('click',function(){
  alert('add-2')
},false)



//false (事件氣泡)- 從指定元素往外找
//true (事件捕捉)- 從最外層找到指定元素
var el = document.querySelector(".box");
el.addEventListener("click",function(event){
  event.stopPropagation();
  alert("box");
  console.log("box");
},false);

var elBody = document.querySelector(".body");
elBody.addEventListener("click",function(){
  alert("你沒有點到box");
  console.log("你沒有點到box");
},false)


//取消預設行為
var element = document.querySelector(".link");

element.addEventListener("click",function(event){
  
  //如果事件重疊,只執行目前有監聽到的事件
  event.stopPropagation();


  //取消元素的默認行為

  //原本點連結會跳轉到指定網頁

  //也可以使用在 submit 先透過JS去檢查表單是否有錯誤,POST去傳送資料
  event.preventDefault();
  console.log("test");
},false);