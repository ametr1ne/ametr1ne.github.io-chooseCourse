/*-------------- Обработка формы отзыва -------------*/

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

$('.school-form').submit(function (e) {
    e.preventDefault();
    let form = $(this).closest('.school-form');
    form.addClass('clear-form');
    form.append("<h3>Спасибо, мы приняли информацию.<br> Наш менеджер свяжется с вами в<br> ближайшее время.</h3>");
})