const buttonBurger = document.getElementById("menuBurger");
const buttonCloseBurger = document.getElementById("menuClose");
const nav = document.querySelector("nav");

document.addEventListener("DOMContentLoaded", function () {
    buttonBurger.addEventListener("click", function () {
        nav.classList.add("display");
        buttonBurger.classList.remove("show");
        buttonCloseBurger.classList.add("show");
    });
    buttonCloseBurger.addEventListener("click", function () {
        nav.classList.remove("display");
        buttonBurger.classList.add("show");
        buttonCloseBurger.classList.remove("show");
    });
});