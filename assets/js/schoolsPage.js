$('.arrow-btn').click(function (e) {
    $(this).closest('.card').toggleClass('open-arrow');
});

$('.page').click(function(){
    if(!$(this).hasClass('selected-page')){
        $(this).siblings().removeClass('selected-page');
        $(this).addClass('selected-page');
    }
});