document.addEventListener('DOMContentLoaded', function () {
  // Init AOS
  if (typeof AOS !== 'undefined') AOS.init();

  // Hamburger toggle (pastikan jQuery tersedia)
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

  // Init Swiper (pakai selector yang sama seperti HTML)
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper(".mySwiper", {
    //   spaceBetween: 30,
            slidesPerView: 3,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    })
  } else {
    console.error('Swiper belum ter-load — cek urutan script.');
  }

  console.log('script.js loaded');
});
