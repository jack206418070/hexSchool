

function count() {
    var hamPrice = 50;
    var cokePrice = 30;
    var hamCheck = document.getElementById("hamNumId").value;
    var cokeCheck = document.getElementById("cokeNumId").value;
    var hamCount = parseInt(document.getElementById("hamNumId").value) * hamPrice;
    var cokeCount = parseInt(document.getElementById("cokeNumId").value) * cokePrice;
    if (hamCheck == "" || cokeCheck == "") {
        alert("請填寫數量進入上方表格");
        return;
    }
    var total = hamCount + cokeCount;
    document.getElementById("totalId").textContent = total;
}


function checkContent(event) {
    var str = event.target.value;
    if (str >= 0) {
        var strNum = parseInt(str);
    }

    if (str == "") {
        alert("此攔位不可為空");
    } else if (typeof (strNum) !== "number") {
        console.log(typeof (strNum));
        alert("請輸入數字");
    }
    console.log(str);
}




var el = document.querySelector("#countId");
el.addEventListener("click", count, false);


var ham = document.querySelector("#hamNumId");
ham.addEventListener("blur", checkContent, false);

var coke = document.querySelector("#cokeNumId");
coke.addEventListener("blur", checkContent, false);














// function count(){
//     var hamPrice = 50;
//     var cokePrice = 20;
//     var hamNum = parseInt(document.getElementById('hamNumId').value)*hamPrice;
//     var cokeNum = parseInt(document.getElementById('cokeNumId').value)*cokePrice;
//     document.getElementById('totalId').textContent = hamNum + cokeNum
// }
// function checkContent(e){
//     var str =  e.target.value;
//     if(str==''){
//         alert('此欄位不可為空')
//     }
// }
// var el = document.getElementById('countId');
// el.addEventListener('click',count,false);

// var ham = document.getElementById('hamNumId');
// ham.addEventListener('blur',checkContent,false);
// var coke = document.getElementById('cokeNumId');
// coke.addEventListener('blur',checkContent,false);
