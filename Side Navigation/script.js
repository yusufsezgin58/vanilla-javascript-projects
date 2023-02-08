let paragraph = document.querySelector('p');
let event = paragraph.addEventListener('click', onClick)

let close = document.querySelector("#close");
let event2 = close.addEventListener('click', onClick2)

function onClick() {
    console.log("basarılı");
    document.querySelector(".side").style.width = "250px";
}

function onClick2() {
    document.querySelector(".side").style.width = "0";
}