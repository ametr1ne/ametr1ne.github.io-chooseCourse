// import autosize from "autosize/dist/autosize";

/*------------- Реализация "липкой" карточки ------------------*/

if (window.matchMedia('(min-width: 1024px)').matches) {
    $(document).ready(function () {
        let stickyCard = $('.right-side');
        let breakPoint = $('.feedbacks-box__feeds').outerHeight(true) + $('.feedbacks-box__title').outerHeight(true) + $('.school-card').height();
        let gapTop = $('.cards-box__pages').outerHeight(true) + $('.feedback-form').outerHeight(true);

        $(window).scroll(function () {
            let windowTop = $(window).scrollTop();
            if (breakPoint > windowTop) {
                stickyCard.addClass('scrollingCard');
                stickyCard.removeClass('stickyEnd');
                $('.school-card').css('top', 'unset');
            } else {
                stickyCard.removeClass('scrollingCard');
                stickyCard.addClass('stickyEnd');
                $('.school-card').css('top', breakPoint + 'px');
            }
        });
    });
}

/*----------------Раскрытие popup РКЦ--------------------*/

$('.rkc').hover(function (e) {
    $(this).toggleClass('open-popup');
})

/*-------------- Обработка формы отзыва -------------*/

// autosize($('.feedback-input'));

let input = $('.input');

input.on('focus', function () {
    $(this).closest('.input-box').addClass('moving-lables');
});

$('.textarea').on('input', function(e){
    if (this.scrollHeight > this.clientHeight) {
        this.style.height = this.scrollHeight + 'px';
        this.style.paddingBottom = '14px';
    }
});

input.on('blur', function () {
    if ($(this).val() <= 1) {
        $(this).closest('.input-box').removeClass('moving-lables');
    }
});


$('.feedback-form').submit(function (e) {
    e.preventDefault();
    let form = $(this).closest('.feedback-form');
    form.addClass('clear-form');
    form.append("<h3>Спасибо! Ваш отзыв отправлен<br> на проверку и будет опубликован<br> в ближайшее время.</h3>");
})

