
//取得BOM的資訊
let high = document.querySelector("#high");
let weight = document.querySelector("#weight");
let btn = document.querySelector(".btnClass");
let addList = document.querySelector(".dataList");
let data = JSON.parse(localStorage.getItem("listdata")) || [];
updateList(data);
changeColor(data);



//監聽事件
btn.addEventListener("click", getData, false);
addList.addEventListener("click",delData,false);




//渲染初始網頁

function updateList(items) {
    let str = "";
    let Len = items.length;
    let i = 0
    for (; i < Len; i++) {
        str += "<li id='dataSet" + i + "num'><table><tr><td><span class='one'>" + items[i].Result + "</span></td> <td>BMI <span class='one'>" + items[i].BMI + "</span></td> <td>weight <span class='one'>" + items[i].Weight + "</span></td> <td>height <span class='one'>" + items[i].Height + "</span></td> <td><a href= '#' data-num = '"+i+"'>刪除</a></td> </tr></table></li>";
    }
    addList.innerHTML = str;
}

//刪除資料

function delData(e){
    let nodeNum = e.target.dataset.num;
    if(e.target.nodeName !== "A"){return};
    data.splice(nodeNum,1);
    localStorage.setItem("listData",JSON.stringify(data));
    updateList(data);
    changeColor(data);
}


//取得身高體重
function getData() {
    if (high.value == "" || weight.value == "") {
        alert("請填寫數量進入上方表格");
        return;
    }
    let getHigh = parseInt(high.value);
    let HighM = getHigh / 100;
    let getWeight = parseInt(weight.value);
    let bmi = getWeight / (HighM * HighM);
    let result;
    bmi = bmi.toFixed(2);
    if (bmi >= 16 && bmi < 18.5) {
        result = "過輕";
        controlRight(bmi, result);
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "理想";
        controlRight(bmi, result);
    } else if (bmi >= 25 && bmi < 30) {
        result = "過重";
        controlRight(bmi, result);
    } else if (bmi >= 30 && bmi < 35) {
        result = "輕度肥胖";
        controlRight(bmi, result);
    } else if (bmi >= 35 && bmi < 40) {
        result = "中度肥胖";
        controlRight(bmi, result);
    } else if (bmi >= 40) {
        result = "重度肥胖";
        controlRight(bmi, result);
    } else {
        result = "嚴重過輕";
        controlRight(bmi, result);
    }
    let bodyInfo = {
        Result: result,
        BMI: bmi,
        Weight: getWeight,
        Height: getHigh
    };
    data.push(bodyInfo);
    updateList(data);
    changeColor(data);
    localStorage.setItem("llistdata", JSON.stringify(data));
}

function changeColor(items) {
    let Len = items.length;
    let i = 0
    for (; i < Len; i++) {
        switch (items[i].Result) {
            case "過輕":
                document.getElementById("dataSet" + i + "num").style.borderLeftColor = "#31BAF9";
                break;
            case "理想":
                document.getElementById("dataSet" + i + "num").style.borderLeftColor = "#86D73F";
                break;
            case "過重":
                document.getElementById("dataSet" + i + "num").style.borderLeftColor = "#FF982D";
                break;
            case "嚴重過輕":
                document.getElementById("dataSet" + i + "num").style.borderLeftColor = "#31BAF9";
                break;
            case "輕度肥胖":
                document.getElementById("dataSet" + i + "num").style.borderLeftColor = "#FF6C02";
                break;
            case "中度肥胖":
                document.getElementById("dataSet" + i + "num").style.borderLeftColor = "#FF6C02";
                break;
            case "重度肥胖":
                document.getElementById("dataSet" + i + "num").style.borderLeftColor = "#FF1200";
                break;
        }
    }
}



function controlRight(bmi, result) {
    switch (result) {
        case "理想":
            btn.textContent = bmi;
            btn.style.color = " #86D73F";
            document.querySelector(".right").style.border = "10px solid #86D73F";
            document.querySelector(".right").style.background = "#424242";
            document.querySelector("#downText").style.display = "block";
            document.querySelector("#downText").style.color = "#86D73F";
            document.querySelector(".mostRight").style.color = "#86D73F";
            document.querySelector(".mostRight").textContent = result;
            break;
        case "過輕":
            btn.textContent = bmi;
            btn.style.color = " #31BAF9";
            document.querySelector(".right").style.border = "10px solid #31BAF9";
            document.querySelector(".right").style.background = "#424242";
            document.querySelector("#downText").style.display = "block";
            document.querySelector("#downText").style.color = "#31BAF9";
            document.querySelector(".mostRight").style.color = "#31BAF9";
            document.querySelector(".mostRight").textContent = result;
            break;
        case "過重":
            btn.textContent = bmi;
            btn.style.color = " #FF982D";
            document.querySelector(".right").style.border = "10px solid #FF982D";
            document.querySelector(".right").style.background = "#424242";
            document.querySelector("#downText").style.display = "block";
            document.querySelector("#downText").style.color = "#FF982D";
            document.querySelector(".mostRight").style.color = "#FF982D";
            document.querySelector(".mostRight").textContent = result;
            break;
        case "輕度肥胖":
            btn.textContent = bmi;
            btn.style.color = " #FF6C02";
            document.querySelector(".right").style.border = "10px solid #FF6C02";
            document.querySelector(".right").style.background = "#424242";
            document.querySelector("#downText").style.display = "block";
            document.querySelector("#downText").style.color = "#FF6C02";
            document.querySelector(".mostRight").style.color = "#FF6C02";
            document.querySelector(".mostRight").textContent = result;
            break;
        case "中度肥胖":
            btn.textContent = bmi;
            btn.style.color = "#FF6C02";
            document.querySelector(".right").style.border = "10px solid#FF6C02";
            document.querySelector(".right").style.background = "#424242";
            document.querySelector("#downText").style.display = "block";
            document.querySelector("#downText").style.color = "#FF6C02";
            document.querySelector(".mostRight").style.color = "#FF6C02";
            document.querySelector(".mostRight").textContent = result;
            break;
        case "重度肥胖":
            btn.textContent = bmi;
            btn.style.color = " #FF1200";
            document.querySelector(".right").style.border = "10px solid #FF1200";
            document.querySelector(".right").style.background = "#424242";
            document.querySelector("#downText").style.display = "block";
            document.querySelector("#downText").style.color = "#FF1200";
            document.querySelector(".mostRight").style.color = "#FF1200";
            document.querySelector(".mostRight").textContent = result;
            break;
        case "嚴重過輕":
            btn.textContent = bmi;
            btn.style.color = " #31BAF9";
            document.querySelector(".right").style.border = "10px solid #31BAF9";
            document.querySelector(".right").style.background = "#424242";
            document.querySelector("#downText").style.display = "block";
            document.querySelector("#downText").style.color = "#31BAF9";
            document.querySelector(".mostRight").style.color = "#31BAF9";
            document.querySelector(".mostRight").textContent = result;
            break;

    }
}




