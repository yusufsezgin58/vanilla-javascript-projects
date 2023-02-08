let number = document.querySelector("#number");
let input = document.querySelector("#input");
let button = document.querySelector("#button");
let topDiv = document.querySelector("#topDiv");
let head = document.querySelector("#head")
let button1 = document.querySelector("#button1")

const onClickFunc = () => {
    number.innerHTML = Math.floor(Math.random() * 100);
}

const onClick = () => {
    let inputValue = input.value;
    if (number.innerHTML == inputValue) {
        topDiv.className = "alert alert-primary"
        head.innerHTML = "Well done ! True answer"
    }
    else {
        topDiv.className = "alert alert-danger"
        head.innerHTML = "Try again"
    }
}

let event = button.addEventListener('click', onClick)
let event1 = button1.addEventListener('click', onClickFunc)