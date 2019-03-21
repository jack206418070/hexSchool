

//透過陣列存取不重複的行鎮區
const API = "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97"
let countryData = []
let countryName = []
let countryAllName = []


//獲取JSON資料

fetch(API)
    .then(res => {
        return res.json()
    })
    .then(post => {
        countryData = post.result.records
        selectCountry()
        addCountry()
        init()
        return console.log(countryData)
    })



//建立需要的DOM
const Countryselect = document.getElementById("country");
const optionList = document.querySelector(".choice");
const dataList = document.querySelector(".list");
const bgImg = document.querySelector(".photo");
const btnClass = document.querySelector(".btnList");

//監聽的事件
optionList.addEventListener("change", checkCountryData, false);
btnClass.addEventListener("click", checkNode, false);


//將得到資料做處理 得到不重複的地區
function selectCountry() {
    countryData.forEach((item) => {
        countryAllName = [...countryAllName, item.Zone]
    })

    countryName = countryAllName.filter((el, index, arr) => {
        return arr.indexOf(el) === index
    })
}



//初始化上方選擇的城鎮 select
function addCountry() {
    let str = `<option disabled>--請選擇行政區--</option>
             <option value="全部區域">全部區域</option> `
    let Len = countryName.length;
    let i = 0
    for (; i < Len; i++) {
        str += `<option class='opList'>${countryName[i]}</option>`;
    }
    Countryselect.innerHTML = str;
}

//初始化一開始介面

function init() {
    let str = "";
    let Len = countryData.length;
    let i = 0
    for (; i < Len; i++) {
        if (countryData[i].Zone) {
            str += `<li>
                    <div class='photo' style='background-image:url(${countryData[i].Picture1})'>
                        <h4>${countryData[i].Name}</h4>
                        <p>${countryData[i].Zone}</p>
                    </div>
                    <div class='section'>
                        <p><img src='./images/icons_clock.png'> ${countryData[i].Opentime}</p> 
                        <p><img src='./images/icons_pin.png'>${countryData[i].Add}</p> 
                        <p class='tag_left'><img src='./images/icons_phone.png'> ${countryData[i].Tel}</p> 
                        <p class='tag_right'><img src='./images/icons_tag.png'> ${countryData[i].Ticketinfo}</p>
                    </div>
                  </li>
                 `
        }
    }
    dataList.innerHTML = str;
    document.querySelector(".countryId").textContent = "全部區域";
}


//處理選擇到城鎮之後資料的塞選
// console.log(countryName);

function checkCountryData(e) {
    switch (e.target.value) {
        case e.target.value:
            let str = "";
            let Len = countryData.length;
            let i = 0
            for (; i < Len; i++) {
                if (e.target.value === countryData[i].Zone) {
                    str += `<li>
                   <div class='photo' style='background-image:url(${countryData[i].Picture1})'>
                       <h4>${countryData[i].Name}</h4>
                       <p>${countryData[i].Zone}</p>
                   </div>
                   <div class='section'>
                       <p><img src='./images/icons_clock.png'> ${countryData[i].Opentime}</p> 
                       <p><img src='./images/icons_pin.png'>${countryData[i].Add}</p> 
                       <p class='tag_left'><img src='./images/icons_phone.png'> ${countryData[i].Tel}</p> 
                       <p class='tag_right'><img src='./images/icons_tag.png'> ${countryData[i].Ticketinfo}</p>
                   </div>
                 </li>
                `
                }else if(e.target.value === '全部區域' ){
                    str += `<li>
                   <div class='photo' style='background-image:url(${countryData[i].Picture1})'>
                       <h4>${countryData[i].Name}</h4>
                       <p>${countryData[i].Zone}</p>
                   </div>
                   <div class='section'>
                       <p><img src='./images/icons_clock.png'> ${countryData[i].Opentime}</p> 
                       <p><img src='./images/icons_pin.png'>${countryData[i].Add}</p> 
                       <p class='tag_left'><img src='./images/icons_phone.png'> ${countryData[i].Tel}</p> 
                       <p class='tag_right'><img src='./images/icons_tag.png'> ${countryData[i].Ticketinfo}</p>
                   </div>
                 </li>
                `
                }
            }
            document.querySelector(".countryId").textContent = e.target.value;
            dataList.innerHTML = str;
            break;
    }
};


function checkNode(e) {
    e.preventDefault();
    if (e.target.nodeName !== "A") { return };
    let text = e.target.innerHTML;
    switch (text) {
        case text:
            let str = "";
            let Len = countryData.length;
            let i = 0
            for (; i < Len; i++) {
                if (text == countryData[i].Zone) {
                    str += `<li>
                        <div class='photo' style='background-image:url(${countryData[i].Picture1})'>
                            <h4>${countryData[i].Name}</h4>
                            <p>${countryData[i].Zone}</p>
                        </div>
                        <div class='section'>
                            <p><img src='./images/icons_clock.png'> ${countryData[i].Opentime}</p> 
                            <p><img src='./images/icons_pin.png'>${countryData[i].Add}</p> 
                            <p class='tag_left'><img src='./images/icons_phone.png'> ${countryData[i].Tel}</p> 
                            <p class='tag_right'><img src='./images/icons_tag.png'> ${countryData[i].Ticketinfo}</p>
                        </div>
                      </li>
                    `
                }
            }
            document.querySelector(".countryId").textContent = text;
            dataList.innerHTML = str;
            break;
    }
}