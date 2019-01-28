var farms = [
    {
        farmer: '卡斯伯',
        dogs: ['張姆士', '龐的'],
    },
    {
        farmer: '查理',
        dogs: ['皮皮'],
    }
];


var el = document.querySelector(".list");
var str = "";
var farmLen = farms.length;

for(var i=0; i<farmLen; i++){
    var content = "<li>"+farms[i].farmer+"</li>";
    str+=content;
}

el.innerHTML = str;









// var el = document.querySelector('.list');
// var farmLen = farms.length;
// var str = '';
// for(var i = 0;i<farmLen;i++){
//     var content = '<li>'+ farms[i].farmer +'</li>';
//     str+=content;
    
// }
// el.innerHTML = str;


