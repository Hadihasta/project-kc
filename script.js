document.addEventListener('DOMContentLoaded', function () {
  // Init AOS
  if (typeof AOS !== 'undefined') AOS.init();

  // Hamburger (opsional jQuery)
  if (typeof $ !== 'undefined') {
    $('#menuBtn').on('click', function () {
      $(this).toggleClass('active');
      $('#sidebar').toggleClass('open');
    });

    $('#overlay').on('click', function () {
      $('#menuBtn').removeClass('active');
      $('#sidebar').removeClass('open');
    });
  }
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    autoplay: { delay: 2500 },
    speed: 600,
  });

  // FULLSCREEN SWIPER
  const swiperFull = new Swiper(".mySwiperFull", {
    loop: true,
    speed: 600,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

  const lightbox = document.getElementById('lightboxSwiper');

  //  BUKA LIGHTBOX 
  document.querySelectorAll('.mySwiper .swiper-slide img')
    .forEach((img, index) => {
      img.addEventListener('click', () => {

        lightbox.classList.add('show');

        // langsung ke slide yang diklik (tanpa loncat)
        swiperFull.slideToLoop(index, 0);
      });
    });

  // === TUTUP LIGHTBOX ===
  function closeLightbox() {
    lightbox.classList.remove('show');
    document.exitFullscreen?.();
  }

  document.querySelector('.closeLightbox')
    .addEventListener('click', closeLightbox);

  // klik area gelap
  lightbox.addEventListener('click', function (e) {
    if (!e.target.closest('.mySwiperFull')) closeLightbox();
  });

  // === FULLSCREEN ===
  document.querySelector('.fullscreenBtn')
    .addEventListener('click', function () {
      if (!document.fullscreenElement) {
        lightbox.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });

  // === SCROLL NEXT/PREV ===
  let scrollLock = false;

  lightbox.addEventListener('wheel', function (e) {
    if (!lightbox.classList.contains('show')) return;
    e.preventDefault();

    if (scrollLock) return;
    scrollLock = true;

    e.deltaY > 0 ? swiperFull.slideNext() : swiperFull.slidePrev();

    setTimeout(() => scrollLock = false, 300);
  }, { passive: false });

  console.log('script.js loaded');
});
