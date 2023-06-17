// function changeBackgroundColor(x) {
//     console.log(x.asd);
//     console.log("asasd");
//     // let colors = ["red", "yellow", "green"]
//     // let newColor = colors[Math.floor(Math.random() * 3)];
//     // if (document.body.style.backgroundColor != newColor) {
//     //     document.body.style.backgroundColor = newColor;
//     // } else {
//     //     changeBackgroundColor()
//     // }
// }
// var x = document.getElementById(button);
// x.asd = "red";
// x.addEventListener("click", changeBackgroundColor, false)

for(let i = 0; i < 50;i++){
    setTimeout(function() {
        myFunction();
    },60000*i);
}