var bar1Elements = ["Home","About","Services","Contact"];
var bar2Elements = ["sa","qw","zx"];
var arBars = [bar1Elements,bar2Elements];
function openBar(e){    
        var id = parseInt(e.target.id.slice(-1));
        console.log(id);
        var barElements = arBars[id - 1];
        console.log(barElements);
        var ddbID = "dropDownBar" + id;
        console.log(ddbID);
        var dropDownBar = document.getElementById(ddbID);
        if(dropDownBar.classList.contains("active")){//already open
            dropDownBar.classList.remove("active");
            dropDownBar.innerHTML = "";
            console.log(dropDownBar);
            dropDownBar.style.animation = "";
        }  
        else{//not open
            var strAdd = "";
            barElements.forEach(function(e, i){
                    strAdd += '                <a class="dropDownBarBtn dropdown-item"  href="#" id="dropDownBar' + ddbID + 'Btn' + parseInt(i+1) + '">' + e + '</a>\n';
            });
            dropDownBar.innerHTML = strAdd;
            dropDownBar.className += ' active';
            dropDownBar.style.animation = "rotateMenu 600ms ease-in-out forwards";
            console.log(dropDownBar);
        }
}
var navBarButton1 = document.getElementById("navBarBtn1"); 
navBarButton1.addEventListener("click",openBar);
var navBarButton2 = document.getElementById("navBarBtn2"); 
navBarButton2.addEventListener("click",openBar);
