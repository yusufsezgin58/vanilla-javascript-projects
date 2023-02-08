let button = document.querySelector("#button");

const onClick = () => {
    console.log("giris");
    let color = document.querySelector("#numberInput").value
    console.log(color);
    document.body.style.backgroundColor = `${color}`
}

let event = button.addEventListener("click", onClick)