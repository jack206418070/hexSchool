
// var el = document.getElementById('titleId');
// 選取單個id or 標籤


// var el = document.querySelector('h1 em');
// el.textContent ='1239999';




//選取多個標籤 querySelectorAll

// var els = document.querySelectorAll(".titleClass em");

// console.log(els);

// var elsLen = els.length;

// for(var i = 0; i < elsLen; i++){
//     els[i].textContent = i + "1234";
// } 


//改變標籤內屬性的語法練習

// var el = document.querySelector(".titleClass a");

// console.log(el);
// el.setAttribute("href","http://www.yahoo.com.tw");

// var el2 = document.querySelector(".titleClass").innerHTML;

// console.log(el2);

// var el3 = document.querySelector(".str");

// el3.setAttribute("id","strId");


//innerHTML 練習

// var el = document.querySelector(".str");

// str = "<h1 class='yellow'>Hello</h1>";


// el.innerHTML = str;



var el= document.querySelector(".list");


var webAddress = 'http://www.google.com.tw';
var webName = "谷歌";

el.innerHTML = "<li class='none'><a href='"+webAddress+"'>"+webName+"</a></li>";



