function handleEnterKeyPress(e){
    console.log(e);
    if(e.charCode == 13){
        fnLoadBooks();
    }
}
function fnLoadBooks() {
    let szInput = $(".form-control").val();
    szInput.replace(" ","+");
    if(szInput == ""){//clean if search bar empty
        fnPrepareBooks([]);
        return
    }
    let arrBooks = [];
    $.ajax({//google api request
        type : "GET",
        url : "https://www.googleapis.com/books/v1/volumes?q=" + szInput + "&maxResults=40",
        dataType : "json",
        success: function(response){
            console.log(response);
            for(let i = 0; i < response.items.length;i++){
                try{
                    if(response.items[i].volumeInfo.imageLinks != null && response.items[i].volumeInfo.authors != null){//dont show books without cover or author
                        arrBooks.push(response.items[i]);
                        throw new Error('No image found');
                    }
                }catch{}
            }
            console.log(arrBooks);
            fnPrepareBooks(arrBooks);
        }
    });
}
function fnPrepareBooks(arrBooks){
    $("#book-container").empty();
    let table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-bordered");
    table.classList.add("table-hover");
    let thead = document.createElement("thead");
    let theadText ='<tr>'+
    '<th>Name</th>' +
    '<th>Photo</th>' + 
    '<th>Desc</th>' +
    '</tr>';
    thead.innerHTML = theadText;
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for(let i = 0; i<arrBooks.length;i++){
        let tr = document.createElement("tr");
        let trText = '<th scope="row">' +
            '<p class="bookName col">'+ arrBooks[i].volumeInfo.title +'</p>' + 
        '</th>';
        trText += '<th scope="row">' +
            '<a class="clickableImg" href="#"><img class="bookCover col" src="' + arrBooks[i].volumeInfo.imageLinks.thumbnail + '" alt="kitap" href="#"></a>' +
        '</th>';
        trText += '<td>' + 
            '<p class="bookDescription col">'+ '<br>' +
            'Yazar: ' + arrBooks[i].volumeInfo.authors[0] + '<br>' +
            'Sayfa sayısı: ' + arrBooks[i].volumeInfo.pageCount + '<br>' +
            'Fiyat: ' + 10 + '<br>' +
            'Eklenme tarihi: ' + new Date() + '<br>' +
            'Açıklama: ' + arrBooks[i].volumeInfo.description + '<br>' +
            '</p>' + 
        '</td>';
        tr.innerHTML = trText;
        tbody.appendChild(tr);
    }
    $("#book-container").append(table);

}
// function fnLoadNavbar() {
//     $.ajax({
//         type: 'GET',
//         url: 'book.json',
//         dataType: 'json',
//         success: function (r) {
//             if (r !== null) {
//                 var entries = Object.entries(r);
//                 fnPrepareNavbar(entries);
//             }
//             else {
//                 console.log("json file empty");
//             }
//         }
//     });
// }
// function fnPrepareNavbar(entries) {
//     let nav = document.createElement("nav");
//     nav.classList.add("navbar");
//     nav.classList.add("bg-info");
//     nav.classList.add("justify-content-around");
//     nav.classList.add("col-12");
//     entries.forEach((element, index) => {
//         let navLinkSchool = document.createElement("a");
//         navLinkSchool.classList.add("nav-link");
//         navLinkSchool.classList.add("text-warning");
//         navLinkSchool.classList.add("border");
//         navLinkSchool.href = "#";
//         navLinkSchool.setAttribute("onclick", "fnLoadBooks(" + index +")");
//         nav.appendChild(navLinkSchool);
//         navLinkSchool.innerText = element[0];
//     });
//     $("#navbar-container").append(nav);
// }
