
const burgerbutton = document.getElementsByClassName("burger")[0];
const burgerItems = document.getElementsByClassName("menu-items")[0];
const main = document.getElementsByClassName("main-context")[0];
const cartlogo = document.getElementsByClassName("cart-logo")[0];
const cartmodal = document.getElementsByClassName("modal-cart")[0];

// const hero = document.getElementsByClassName("hero-container")[0];

function togglemenu() {
    burgerbutton.addEventListener("click", () => {
        burgerItems.classList.toggle("show-menu-items");
        main.classList.toggle("blur-backround");
        // hero.classList.toggle("hero-container");
    })
}
function togglecart() {
    cartlogo.addEventListener("click", () => {

        if (cartmodal) {
            cartmodal.classList.toggle('hidden');
        }

    })
}



togglecart();
togglemenu();


