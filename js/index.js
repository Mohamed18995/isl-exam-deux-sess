const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".nav-menu");
const icon = document.querySelector(".fa-bars");
const closeIcon =document.querySelector(".fa-times");
 
menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu");
    icon.classList.toggle("hide-menu");
    closeIcon.classList.toggle("show-close");

});