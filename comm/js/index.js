//1st video

//console.log(window.innerHeight);
//window.open("https://www.youtube.com/");
//window.open("about:blank", "hello", "width=200, height=200");
//console.log(navigator.platform);
//console.log(location.href)
/*setTimeout(function () {
    location.reload();
}, 2000);*/
//location.href = "https://www.youtube.com/";
//___________________________________________________________________________//

//2nd video

//console.log(document.head);
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);
//console.log(document.body.childNodes);
/*for(let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}*/
//console.log(myContent);
/*
let myContent = document.getElementById("myContent")
console.log(myContent);
let  elements = myContent.getElementsByTagName("p");
for(let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}*/
//document.write("HTML")
/*let input;
input.style.backgroundColor = "red"*/
//______________________________________________________________________________//

//3rd video

/*function clickHref() {
    alert('Привет всем');
    document.querySelector("a.href").style.display = "none";
}

function clickText(selector) {
    document.querySelector(selector).style.backgroundColor = "#333";
    document.querySelector(selector).style.color = "#fff";
}

function focusInput() {
    document.querySelector("input").style.backgroundColor = "#333";
    document.querySelector("input").style.padding = "10px";
    document.querySelector("input").style.border = "1px solid silver";
}

function blurInput() {
    document.querySelector("input").style.backgroundColor = "#fff";
    document.querySelector("input").style.padding = "0";
    document.querySelector("input").style.border = "1px solid silver";
}*/
//_________________________________________________________________________________//

//4th video

// let tap = document.getElementById("tap");
//
// window.addEventListener('touchstart', function (e) {
//     tap.style.background = "#333";
// });
//
// window.addEventListener('touchmove', function (e) {
//     tap.style.left = e.targetTouches[0].pageX + "px";
//     tap.style.top = e.targetTouches[0].pageY + "px";
// });
//
// window.addEventListener('touchend', function (e) {
//     tap.style.background = "#eee";
// });
//_________________________________________________________________________________//

//5th video

// let load = function (url, callback) {
//     let ajax = new XMLHttpRequest();
//     ajax.open('GET', url);
//     ajax.onload = function () {
//       callback(this.responseText);
//     };
//     ajax.send();
// };
//
// load('text.txt', function (data) {
//     console.log(data);
// });
//________________________________________________________________________________//

//6th video

let btnForm = document.querySelector("#comments-form button");
let countComments = 0;
let idComment = 0;

btnForm.onclick = function () {
    idComment++;
  let form = document.querySelector("#comments-form");
  if(form.name.value.length < 4) {
      document.querySelector("#error").innerHTML = "Длинна имени не менее 4-ёх символов";
      return false;
  } else if(form.comment.value.length < 10) {
      document.querySelector("#error").innerHTML = "Длинна сообщения не менее 10-ти символов";
      return false;
  }

  document.querySelector("#error").innerHTML = "";

  //Установим новое значение для подсчёта комментариев
    if (countComments == 0)
        document.querySelector("#comments").innerHTML = "";

    countComments++;
    document.querySelector(".count-comm").innerHTML = countComments;

    let newComment = "<div class='comment' id='block-" + idComment + "'>" +
            "<span class='delete' onclick='delComm("+ idComment +")'>&times;</span>" +
            "<p class='name'>" + form.name.value + "</p>" +
            "<p class='mess'>" + form.comment.value + "</p>" +
        "</div>";

    document.querySelector("#comments").insertAdjacentHTML('afterbegin', newComment); //beforeend

    //Очистка формы
    form.comment.value = "";

};


function delComm(id) {
    document.querySelector("#block-" + id).remove();
    countComments--;
    document.querySelector(".count-comm").innerHTML = countComments;

    if (countComments == 0) {
        document.querySelector("#comments").innerHTML = "Пока комментариев нет";
    }
}






