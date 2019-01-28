var shop = [
  {
    shopName:"五十嵐",
    drink:["珍珠奶茶","多多綠茶"]
  },
  {
    shopName:"清心",
    drink:["烏龍綠茶","菁茶"]
  }
];

var list = document.querySelector(".list");
var shop_name =  document.querySelector(".shopName");
var addbtn = document.querySelector(".btnClass");


function updateList(){
  var shopLen = shop.length;
  var str = "";
  for(var i = 0; i < shopLen; i++ ){
    str+="<li data-num ='"+i+"'>"+shop[i].shopName+"</li>";
  }
  list.innerHTML = str;
}

updateList();


function checkList(e){
  var shopNum = e.target.dataset.num;

  if(e.target.nodeName !== "LI"){return};
  shop.splice(shopNum,1);
  updateList();
}

function addShopName(){
  var shopValue = shop_name.value;
  var getName ={
    shopName: shopValue
  };
  shop.push(getName);
  updateList();
}



addbtn.addEventListener("click",addShopName,false);
list.addEventListener("click",checkList,false);









// var country = [
//   {
//     farmer:'卡斯伯'
//   }
//   ,{
//     farmer:'查理'
//   },{
//     farmer:'約翰'
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
//   list.innerHTML = str;
// }
// updateList();

// //確認點擊的農夫是誰
// function checkList(e){
//   var num = e.target.dataset.num;
//   // console.log(e.target.nodeName);
//   if(e.target.nodeName !== 'LI'){return};
//   country.splice(num,1);
//   updateList();
// }
// list.addEventListener('click',checkList,false);