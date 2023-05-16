function changeBackgroundColor() {
    let colors = ["red","yellow","green"]
    let newColor = colors[Math.floor(Math.random()*3)];
    if(document.body.style.backgroundColor != newColor){
        document.body.style.backgroundColor = newColor;
    }else{
        changeBackgroundColor()
    }
}