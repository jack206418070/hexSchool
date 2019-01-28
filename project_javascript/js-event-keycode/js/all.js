var body = document.body;

function rocketShot(event){
    switch(event.keyCode){
        case 49:
            document.querySelector(".rocket-1").style.bottom = "1500px";
            break;
        
        case 50:
            document.querySelector(".rocket-2").style.bottom = "1500px";
            break;
        
        case 51:
            document.querySelector(".rocket-3").style.bottom = "1500px";
            break;
        
        default:
            // document.querySelectorAll(".rocket").style.bottom = "0px";
            var rocketAll =  document.querySelectorAll(".rocket");
            console.log(document.querySelectorAll(".rocket"));
            for(var i =0; i < rocketAll.length; i++){
                rocketAll[i].style.bottom = "0";
            }
            // for(var i = 1 ; i <= 3 ; i++){
            //     document.querySelector(".rocket-"+i).style.bottom = "0px";
            // }
            break;    
    }
}

body.addEventListener("keydown",rocketShot,false);









// var body = document.body;

// function goRocket(e){
//     switch(e.keyCode){
//         case 49:
//             document.querySelector('.rocket-1').style.bottom = '2000px'
//             break;
//         case 50:
//             document.querySelector('.rocket-2').style.bottom = '2000px'
//             break;
//         case 51: 
//             document.querySelector('.rocket-3').style.bottom = '2000px'
//             break;
//     }
// }


// body.addEventListener('keydown',goRocket,false)