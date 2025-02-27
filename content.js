const blackColor = "#474747"

changeColor();

setInterval(() => {
    changeColor();
}, 1000);

function changeColor() {
    const lobbyElement = document.querySelector(".Qmt7oc");
    lobbyElement.style.backgroundColor = blackColor;
}