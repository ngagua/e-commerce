
const burgerbutton = document.getElementsByClassName("burger")[0];
const burgerItems = document.getElementsByClassName("menu-items")[0];

function togglemenu() {
    burgerbutton.addEventListener("click", () => {
        burgerItems.classList.toggle("show-menu-items");

    })
}
togglemenu();