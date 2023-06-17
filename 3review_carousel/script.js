function nextReview(){
    if(reviewCount >= reviews.length - 1){
        reviewCount = -1;
    }
    reviewCount++;
    currentReview = reviews[reviewCount];
    printReview(currentReview);
}
function previousReview(){
    if(reviewCount <= 0){
        reviewCount = reviews.length;
    }
    reviewCount--;
    currentReview = reviews[reviewCount];
    printReview(currentReview);
}
function printReview(currentReview){
    document.getElementById("photo").style = "background-image: url(" + currentReview.img + ")";
    document.getElementById("user-info").innerHTML = currentReview.name + "  <br>" +  currentReview.age + " yaşında";
    document.getElementById("review").innerHTML = currentReview.text;
}
const reviews = [
    {
      name: "Melis Bildircin",
      age: "21",
      img: "./images/melfi.jpeg",
      text: "<3"
    },
    {
      name: "asd",
      age: "31",
      img: "./images/vesikalık.jpeg",
      text: "harıy"
    },
    {
        name: "wrwqerqwesd",
        age: "32",
        img: "./images/vesikalık.jpeg",
        text: "evedd"
    },
    {
        name: "RWEQRQWRfasdf",
        age: "31",
        img: "./images/vesikalık.jpeg",
        text: "hm"
    }
]
var reviewCount = 0;
var currentReview = reviews[0];
printReview(currentReview);
var rightArrow = document.getElementById("rightArrow")
rightArrow.addEventListener("click",nextReview)
var leftArrow = document.getElementById("leftArrow")
leftArrow.addEventListener("click",previousReview)
move()

function move(){
    var styles = window.getComputedStyle(document.getElementById("carousell"));
    var marginLeft = styles.marginLeft;
    var marginLeftInt = parseInt(marginLeft.replace(marginLeft.slice(-2),""));
    var id = setInterval(frame, 10);
    function frame(){
        if(marginLeft == 300){
            clearInterval(id);
        }else{
            marginLeftInt++;
            // console.log(marginLeftInt)
            marginLeft = marginLeftInt.toString + "px";
            styles.marginLeft = marginLeftInt + "px";
        }
    }
}


