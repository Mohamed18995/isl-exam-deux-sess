const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const icon = document.querySelector(".fa-bars");
const closeIcon =document.querySelector(".fa-times");
 
menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu");
    icon.classList.toggle("hide-menu");
    closeIcon.classList.toggle("show-close");
    body.classList.toggle("body-scroll");

});