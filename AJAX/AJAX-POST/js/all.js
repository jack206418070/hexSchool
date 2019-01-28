//處理DOM 和 監聽事件
//註冊
var signupBtn = document.querySelector(".signupBtn");
signupBtn.addEventListener("click", sendData, false);
//判定帳號是否重複
var inputCheck = document.querySelector(".emailSign");
inputCheck.addEventListener("blur", sendData, false);

//登入點擊函式,以及判斷是否有相同的帳號
function sendData(e) {
    var emailData = document.querySelector(".emailSign").value;
    var passwordData = document.querySelector(".passwordSign").value;
    // var dataUser = "email="+email+"&password="+password;
    var checkAccount = document.querySelector(".Ajax-check");
    var data = {};
    data.email = emailData;
    data.password = passwordData;
    var xhr = new XMLHttpRequest();
    xhr.open("post", "https://hexschool-tutorial.herokuapp.com/api/signup", true);
    // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.setRequestHeader("Content-type", "application/json");
    var dataStr = JSON.stringify(data);
    xhr.send(dataStr);
    xhr.onload = function () {
        console.log(e);
        console.log(e.target.className);
        var str = JSON.parse(xhr.responseText);
        //將帳號重複判斷和送出使用 className 做條件分開
        if (e.target.className == "emailSign") {
            if (str.message == "此帳號已被使用") {
                checkAccount.style.display = "block";
                checkAccount.textContent = str.message;
            } else if (str.message == "帳號註冊成功" || str.message == "密碼不得為空") {
                checkAccount.style.display = "none";
            } else {
                checkAccount.style.display = "block";
                checkAccount.textContent = "輸入格式錯誤";
            }
        } else {
            if (str.message == "帳號註冊成功") {
                alert("帳號註冊成功");
                document.querySelector(".emailSign").value = "";
                document.querySelector(".passwordSign").value = "";
            } else if (str.message == "此帳號已被使用") {
                alert("此帳號已被使用");
            } else {
                alert("email格式錯誤");
            }
        }
    }
}

//綁定登入事件
var loginBtn = document.querySelector(".loginBtn");
loginBtn.addEventListener("click", sendAccount, false);

//登入函式
function sendAccount() {
    var emailData = document.querySelector(".emailLogin").value;
    var passwordData = document.querySelector(".passwordLogin").value;
    var data = {};
    data.email = emailData;
    data.password = passwordData;
    var xhr = new XMLHttpRequest();
    xhr.open("post", "https://hexschool-tutorial.herokuapp.com/api/signin", true);
    xhr.setRequestHeader("Content-type", "application/json");
    var dataStr = JSON.stringify(data);
    xhr.send(dataStr);

    xhr.onload = function () {
        var str = JSON.parse(xhr.responseText);
        if (str.message == "登入成功") {
            alert("登入成功");
        } else {
            alert("此帳號不存在或帳號密碼錯誤");
        }
        document.querySelector(".emailLogin").value = "";
        document.querySelector(".passwordLogin").value = "";
    }
}
