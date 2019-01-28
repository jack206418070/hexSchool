var shop = [
  {
    shopName:"五十嵐",
    drink:["多多綠茶","珍珠奶茶"]
  },
  {
    shopName:"清心",
    drink:["清茶","烏龍綠茶"]
  }
];
var list = document.querySelector(".list");

function updateList(){
  var str = '';
  var shopLen = shop.length;
  for(var i = 0; i < shopLen; i++){
    str+= '<li data-num="'+i+'">'+shop[i].shopName+'</li>';
  }
  console.log(str);
  list.innerHTML = str;
}

updateList();


function checkList(e){
  if(e.target.nodeName == "LI"){
    var shopNum = e.target.dataset.num;
    alert("您現在選擇的店家是"+shop[shopNum].shopName);
  }else{
    return;
  }
}



list.addEventListener("click",checkList,false);









// var country = [
//   {
//     farmer:'卡斯伯'
//   }
//   ,{
//     farmer:'查理'
//   }
// ]
// var list = document.querySelector('.list');

// //更新農場資料
// function updateList(){
//   var str = '';
//   var len = country.length;
//   for(var i = 0;len>i;i++){
//     str+='<li data-num="'+i+'">'+country[i].farmer+'</li>'
//   }
//   console.log(str);
//   list.innerHTML = str;
// }
// updateList();

//確認點擊的農夫是誰
// function checkList(e){
//   var num = e.target.dataset.num;
//   console.log(e.target.nodeName);
//   if(e.target.nodeName !== 'LI'){return};
//   alert('你選擇的農夫是'+country[num].farmer)
// }
// list.addEventListener('click',checkList,false);