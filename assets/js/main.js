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
      nextEl: ".next-btn-4",
      prevEl: ".prev-btn-4",
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
    $(elem_id).css('display', 'none');
    $(".card-btn.hide").css('display', 'none');
    $(".card-btn.show").css('display', 'block');
}


// $('#play-button').click(function() {
//     $('html,body').animate({
//         scrollTop: $('.gallery-description').offSet().top}, 
//         'slow');
// });


// $('.__select__content').on('change', function (e) {
//     $(this).closest(".__select").find('.__select__label').eq($(this).val()).tab('show'); 
// });
$(document).ready(function () {
    $('input[name="singleSelect"]').click(function () {
        $(this).tab('show');
        $(this).removeClass('active');
    });
})

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}
