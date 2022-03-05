let categoriesList = [
    "Аналитика",
    "Дизайн",
    "Иностранные языки",
    "Маркетинг",
    "Программирование",
    "Управление"];
let cities = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Нижний Новгород",
    "Ижевск"
]

let expand = document.getElementById('expand-name');
let cardsContent = document.getElementById('cards-content');
let cardsList = document.querySelectorAll('.card');
window.addEventListener('load', function(event) {
    limitingHeightContainer()
});

/*------------------Раскрытие списка карточек по курсам ---------------------*/

expand.addEventListener("click", function (e) {
    cardsContent.classList.toggle('open-cards');
    if (expand.textContent === 'Развернуть все курсы') {
        expand.textContent = 'Свернуть все курсы';
        document.querySelector('.cards-limiter').style.maxHeight = '';
    }
    else {
        limitingHeightContainer()
        expand.textContent = 'Развернуть все курсы';
    }
});

function limitingHeightContainer() {
    let gap = 20;
    let limit = cardsList[0].clientHeight + cardsList[1].clientHeight + gap;
    document.querySelector('.cards-limiter').style.maxHeight = limit + 'px';
}

/*------------------Заполнение карточек навигатора по курсам ---------------------*/

$.each(categoriesList, function (index, value) {
    if (categoriesList.length > 0)
        $('#categories-list').append("<li class='category-item'><a href='#'>" + value + "</a></li>");
    else console.log("Array is empty")
})

$.each(design, function (index, value) {
    if (design.length > 0)
        $('#subcategory-list').append("<li class='category-item'><a href='#'>" + value + "</a></li>");
    else console.log("Array is empty")
})

$.each(platforms, function (index, value) {
    if (platforms.length > 0)
        $('#schools-list').append("<li class='category-item'><a href='#'>" + value + "</a></li>");
    else console.log("Array is empty")
})

$.each(cities, function (index, value) {
    if (cities.length > 0)
        $('#cities-list').append("<li class='category-item'><a href='#'>" + value + "</a></li>");
    else console.log("Array is empty")
})

/*---------------Раскрытие карточек в навигационном меню ----------------*/

$.each($('.expand-nav'), function (index, value) {
    value.addEventListener("click", function (e) {
        let myCard = $(this).closest('.card');
        myCard.toggleClass('open-cards');
        if (myCard.hasClass('open-cards')) {
            $(this).text('Свернуть все');
        } else {
            $(this).text('Развернуть все');
        }
    });
});

/*----------------Раскрытие popup РКЦ--------------------*/

$('.rkc').hover(function (e) {
    $(this).toggleClass('open-popup');
});

/*----------------Раскрытие popup карточки--------------------*/

$('.card__rating').hover(function (e) {
    $(this).toggleClass('open-popup');
})




