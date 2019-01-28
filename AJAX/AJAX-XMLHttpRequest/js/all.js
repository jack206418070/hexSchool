//http 狀態 200 資料有正確回傳 404 資料讀取錯誤 沒撈到資料


var xhr = new XMLHttpRequest();

// readState
// 0 -你已經產生一個XMLHttpRequset , 但是還沒有連接你要撈的資料
// 1 -用了open() 但還沒把資料傳送過去
// 2 -偵測到有用send
// 3 -loading-
// 4 -你撈到資料了 數據完全接收了

//格式(方法)  讀取的網址  同步與非同步
// get(讀取網址中的資料)  post(傳送資料到伺服器)
xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);
//true 非同步 不會等資料傳回來,就讓程式繼續往下跑 等到資料回傳才自動回傳
//false 同步 會等資料回傳 才讓程式碼繼續往下跑

xhr.send(null);

//若使用同步 可以使用 onload 等到資料完全傳完 readyState = 4 就執行此函式
xhr.onload = function () {
    if(xhr.status == 200){
        var str = JSON.parse(xhr.responseText);
    document.querySelector(".message").textContent = str[0].name;
    }else{
        console.log("資料錯誤");
    }
    
}


// 1.建立一個 XMLHttpRequest
// 2.傳送到對方的伺服器要資料
// 3.回傳資料到自己的瀏覽器
// 4.拿到資料看要怎麼處理

