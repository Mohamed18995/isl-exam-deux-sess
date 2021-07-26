const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".nav-menu");
 
menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu");
});