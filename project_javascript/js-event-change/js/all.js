var shop = document.getElementById('shopId');
var list = document.querySelector('.list');

var drink_shop = [
    {
        shop:"五十嵐",
        drink:"珍珠奶茶"
    },
    {
        shop:"清心",
        drink:"鐵觀音"
    },
    {
        shop:"五十嵐",
        drink:"波霸奶綠"
    },
];

var DrinkShopLen = drink_shop.length;
console.log(DrinkShopLen);
function UpdateData(event){
    var str = "";
    var select = event.target.value;
    for(var i = 0; i < DrinkShopLen; i++){
        if(select == drink_shop[i].shop){
            str += "<li>"+drink_shop[i].drink+"</li>";
        }
    }
    list.innerHTML = str;
}

shop.addEventListener("change",UpdateData,false);

















// var country = [
//     {
//         farmer: '查理',
//         place: '前鎮區'
//     },
//     {
//         farmer: '卡斯伯',
//         place: '苓雅區'
//     }
//     ,{
//         farmer: '小花',
//         place: '苓雅區'
//     }
// ]
// var len = country.length;

// function updateList(e){
//     var select = e.target.value;
//     var str='';
//     for(var i=0;len>i;i++){
//         if(select== country[i].place){
//             str += '<li>'+country[i].farmer+'</li>'
//         }
//     }
//     list.innerHTML = str;
// }


// area.addEventListener('change',updateList,false)