function changeBackgroundColor() {
    let colors = ["red","yellow","green"]
    document.body.style.backgroundColor = colors[Math.floor(Math.random()*3)];
}