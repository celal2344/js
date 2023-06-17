function increase() {
    counter += 1;
    document.getElementById("value").innerHTML = counter;
}
function decrease() {
    counter += -1;
    document.getElementById("value").innerHTML = counter;
}
var counter = 0;
var increaseButton = document.getElementById("increaseButton");
increaseButton.addEventListener("click",increase);
var decreaseButton = document.getElementById("decreaseButton");
decreaseButton.addEventListener("click",decrease);