var navContent1 = ["1a","1b","1c"];
var navContent2 = ["2a","2b","2c"];
var navContent3 = ["3a","3b","3c"];
var navContents = [navContent1, navContent2, navContent3];
var openButton = document.querySelector("#openButton");

openButton.addEventListener("click",function(){
    var sidebar = document.querySelector(".sidebarList");
    if(sidebar.style.display == "none"){
        openButton.classList.toggle("open");
        sidebar.style.display = "flex";
        openButton.innerHTML = "<";
        document.querySelectorAll("body > :not(.sidebar)").forEach(function(e){
            console.log(e);
            e.style.marginLeft = "15vh";
        });
    }
    else{
        sidebar.style.display = "none";
        openButton.classList.toggle("open");
        openButton.style.left = 0;
        openButton.innerHTML = ">";
        document.querySelectorAll("body > :not(.sidebar)").forEach(function(e){
            console.log(e);
            e.style.marginLeft = "0vh";
        });
    }
});

function printNavContent(id){
    console.log($(".navContent"));
    if(!$(".navContent").length){
        navContentArr = navContents[parseInt(id) - 1];
        let navClickable = $("#navClickable" + id);
        let textToAdd = "";
        textToAdd+= '<ul class="navContent">\n';
        navContentArr.forEach((element,i) => {
            textToAdd += '  <li id="navContent"' + i+1 + '><a href="#">' + element + '</a></li>\n';
        });
        textToAdd += '</ul>';
        navClickable.after(textToAdd);
        console.log(document.getElementsByClassName("navContent")[0]);
    }else{
        $(".navContent").remove();
    }
}