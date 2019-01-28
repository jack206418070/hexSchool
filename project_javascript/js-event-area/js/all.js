

// var list = document.querySelectorAll('.list li');
var list = document.querySelector('.list');
// var len = list.length;
// for(var i = 0;len>i;i++){
//     list[i].addEventListener('click',checkName,false)
// }

list.addEventListener('click',checkName,false)
function checkName(e){
    if(e.target.nodeName!=='LI'){return};
    console.log(e.target.textContent);
}