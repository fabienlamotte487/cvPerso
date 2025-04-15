const buttonBurger = document.getElementById("menuBurger");
const nav = document.querySelector("nav");

document.addEventListener("DOMContentLoaded", function () {
    buttonBurger.addEventListener("click", function () {
        nav.classList.toggle("display");
    });
});