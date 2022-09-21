// Locomotive JS
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    425: {
      slidesPerView: 1.8,
    },
    600: {
      slidesPerView: 2.3,
    },
    768: {
      slidesPerView: 2.8,
    },
    1024: {
      slidesPerView: 3.2,
    },
  },
});

// Menu JS
const btnMenu = document.querySelector(".ri-menu-line");
const ul = document.querySelector("ul");

btnMenu.addEventListener("click", () => {
  if (btnMenu.className === "ri-menu-line menu-active") {
    btnMenu.classList.remove("menu-active");
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
    btnMenu.classList.add("menu-active");
  }
});
