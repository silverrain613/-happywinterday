//이미지슬라이드
let slideNumElement = $('.slide_num');
let totalSlides;

$('.img_slide').bxSlider({
    auto: false,
    speed: 500,
    autoHover: true,
    controls: true,
    pager: false,
    onSliderLoad: function () {
        totalSlides = $('.img_slide').children('.slide_img').not('.bx-clone').length;
    },
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
        let currentIndex = newIndex + 1;
        slideNumElement.text(currentIndex + ' / ' + totalSlides);
    }
});

$('.bx-wrapper').hover(function () {
    $('.bx-prev, .bx-next').css('display', 'block');
}, function () {
    $('.bx-prev, .bx-next').css('display', 'none');
})
