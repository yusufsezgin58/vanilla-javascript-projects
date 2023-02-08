let link = document.querySelector("a");
let modal = document.querySelector(".hidden");
let closeButton = document.querySelector('#close');

const onClick = () => {
    modal.classList.remove('hidden');
    modal.classList.add('block');
}

let event = link.addEventListener('click', onClick)

const closeFunc = () => {
    modal.classList.remove('block');
    modal.classList.add("hidden")
}

let closeEvent = closeButton.addEventListener('click', closeFunc)