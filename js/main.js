const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.setAttribute("data-toggled", "true");
    body.style.overflowY = "hidden";
});

close.addEventListener("click", () => {
    nav.setAttribute("data-toggled", "false");
    body.style.overflowY = "scroll";
});
