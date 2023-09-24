// Menu Block Open/Close
$('.menu-btn').click(function () {
    $('body').toggleClass('lock');
    $('.menu-window, .overlay').toggleClass('active');
});
$('.close-btn, .overlay').click(function () {
    $('body').toggleClass('lock');
    $('.menu-window, .overlay').removeClass('active');
});

$('.menu-link, .menu-sublink').click(function () {
    $('.menu-window, .overlay').removeClass('active');
    $('body').removeClass('lock');
});


// Swipers
let $lgSwiper = document.getElementById('lg-swipper')
var swiper4 = new Swiper(".gallery-swiper", {
    navigation: {
      nextEl: ".swiper-button-next-4",
      prevEl: ".swiper-button-prev-4",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination-4",
        type: "fraction",
    },
    on: {
        init: function () {
            const lg = lightGallery($lgSwiper, {
                plugins: [lgZoom, lgThumbnail],
                closable: true,
                speed: 500,
                controls: true,
                download: false,
                zoom: true,
                actualSize: true,
                thumbnail: false,
            });
            $lgSwiper.addEventListener('lgBeforeClose', () => {
                swiper4.slideTo(lg.index, 0)
            });
        },
    }
});


//show gallery contents
function showBlock(elem_id) {
    $(".card-btn.show").css('display', 'none');
    $(".card-btn.hide").css('display', 'block');
    $(elem_id).css('display', 'block');
}

//hide gallery contents
function hideBlock(elem_id) {
    $(".card-btn.hide").css('display', 'none');
    $(".card-btn.show").css('display', 'block');
    $(elem_id).css('display', 'none');
}
