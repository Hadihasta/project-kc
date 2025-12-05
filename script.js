 /*  INIT AOS  */
        AOS.init();

        /*  INIT SWIPER  */
        var swiper = new Swiper(".mySwiper", { loop: true });

        $("#menuBtn").on("click", function () {
            // hamburger class
            $(this).toggleClass("active");
            // sidebar class
            $("#sidebar").toggleClass("open");

        });

        $("#overlay").on("click", function () {
            $("#menuBtn").removeClass("active");
            $("#sidebar").removeClass("open");

        });