// var str = document.createElement('em');
// str.textContent = '1234';
// str.setAttribute('class','blue');
// // 增加子節點
// document.querySelector('.title').appendChild(str);

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
var farmLen = farms.length;
for(var i = 0; i<farmLen; i++){
    var str = document.createElement("li");
    str.textContent = farms[i].farmer;
    str.setAttribute("class","blue");
    el.appendChild(str);
}


// str.setAttribute("class","blue");