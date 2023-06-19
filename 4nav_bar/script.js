var bar1Elements = ["Home","About","Services","Contact"];
var bar2Elements = ["sa","qw","zx"];
var bar3Elements = ["swqrewer","qrqwerqwrqwrwqerw","rwqerqwrqwerzx"];
var arBars = [bar1Elements,bar2Elements,bar3Elements];
function closeDropDownBar(dropDownBar){
    dropDownBar.classList.remove("active");
    dropDownBar.innerHTML = "";
    console.log(dropDownBar);
    dropDownBar.style.animation = "";
}
function openBar(e){
        console.log(e);    
        var id = parseInt(e.id.slice(-1));
        console.log(id);
        var barElements = arBars[id - 1];
        console.log(barElements);
        var ddbID = "dropDownBar" + id;
        console.log(ddbID);
        var dropDownBar = document.getElementById(ddbID);
        if(dropDownBar.classList.contains("active")){//already open
            closeDropDownBar(dropDownBar);
        }  
        else{//not open
            var strAdd = "";
            barElements.forEach(function(e, i){
                    strAdd += '                <a class="dropDownBarBtn"  href="#" id="dropDownBar' + ddbID + 'Btn' + parseInt(i+1) + '">' + e + '</a><br>\n';
            });
            dropDownBar.innerHTML = strAdd;
            dropDownBar.className += ' active';
            dropDownBar.style.animation = "rotateMenu 600ms ease-in-out forwards";
            console.log(dropDownBar);
        }
}
document.addEventListener("click",function(e){
    if(!dropDownBar.contains(e.target)){
        closeDropDownBar(dropDownBar);
        }
    });
