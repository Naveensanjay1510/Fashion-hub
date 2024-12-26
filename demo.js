const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnicon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains("open");
    menuBtnicon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navlinks.addEventListener("click", (e) => {
    navlinks.classList.remove("open");
    menuBtnicon.setAttribute("class", "ri-menu-line");
});

const ScrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
}

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__btn", {
    ...scrollRevealOption,
    delay: 1500,
});

const banner = document.querySelector("banner-container");

const bannercontent = Array.from(banner.children);

bannercontent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true)
    banner.appendChild(duplicateNode);
})

ScrollReveal().reveal(".arrival__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".sale__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".sale__content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".sale__content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".sale__content h4", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".sale__btn", {
    ...scrollRevealOption,
    delay: 1500,
});