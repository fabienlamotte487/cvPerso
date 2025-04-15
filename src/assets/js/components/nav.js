const buttonBurger = document.getElementById("menuBurger");
const buttonCloseBurger = document.getElementById("menuClose");
const nav = document.querySelector("nav");

document.addEventListener("DOMContentLoaded", function () {
    buttonBurger.addEventListener("click", function () {
        nav.classList.add("display");
        buttonBurger.style.display = "none";
        buttonCloseBurger.style.display = "block";
    });
    buttonCloseBurger.addEventListener("click", function () {
        nav.classList.remove("display");
        buttonBurger.style.display = "block";
        buttonCloseBurger.style.display = "none";
    });
});