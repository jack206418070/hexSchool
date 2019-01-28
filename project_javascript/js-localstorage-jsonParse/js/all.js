// 1.將 array 轉為 string 
//JSON.stringify()

// 2.將 sring 轉為 array
//學以上兩點是因為 localstorage 只會保存 string 資料
//JSON.parse( )



var shop = [
    {
        Name:"五十嵐",
        drink:["珍珠奶茶","多多綠茶"]
    }
];

var shopString = JSON.stringify(shop);

console.log(shopString);

localStorage.setItem("shop",shopString);

var shopAry = JSON.parse(shopString);

var getShopData = localStorage.getItem("shop");

var getDataAry = JSON.parse(getShopData);

console.log(getDataAry[0].drink);




//練習 利用標籤內ｄａｔａ綁定資料

var list = document.querySelector(".list li");

//確認點擊的農夫 以及相關資訊
function checkList(e){
    var num = e.target.dataset.num;
    var dog = e.target.dataset.dog;
    console.log("農夫編號是: "+num);
    console.log("狗狗有"+dog+"隻");
}

list.addEventListener("click",checkList,false)




// var country = [
//     {farmer:'卡斯伯'}
// ];
// var countryString= JSON.stringify(country);
// console.log(countryString);
// localStorage.setItem('countryItem',countryString);

// var getData = localStorage.getItem('countryItem');
// var getDataAry = JSON.parse(getData);

// console.log(getDataAry[0].farmer);