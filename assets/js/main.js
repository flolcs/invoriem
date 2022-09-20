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
