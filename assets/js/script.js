"use strict"

let platforms = [
    "HR – Центр Онлайн", "3DsMAX", "Unity3d.education", "Concept Аrt Еducation", "Games.Education",
    "ZBrush3D", "3DMAYA", "Академия селлеров", "PIXEL", "Laba", "MasterBrand Business School", "Enline",
    "Skypro", "Lingua Airlines", "TutorOnline", "ЕШКО", "SF EDUCATION", "Foxford", "Englex", "NovaKid", "Учи.Дома",
    "AllRight", "SkyEng", "Умназия", "Тетрика", "EnglishDom", "Yodiz School", "Университет Синергия", "Международная Школа Профессий",
    "Contented", "MAED", "Product LIVE", "IMBA", "Interra", "ProductStar", "TeachLine", "LoftSchool",
    "ConvertMonster", "OTUS", "HEDU", "WayUp", "SkillFactory", "Skillbox", "Нетология", "GeekBrains",
    "XYZ", "Udemy"
];

let analytics = [
    "Big Data",
    "Data Engineer",
    "Data Science",
    "Excel",
    "Power BI",
    "SQL",
    "Аналитика на Python",
    "Аналитика на R",
    "Аналитика на Tableau",
    "Бизнес-аналитика",
    "Веб-аналитика",
    "Визуализация данных",
    "Искусственный интеллект",
    "Маркетинговая аналитика",
    "Математика для Data Science",
    "Машинное обучение",
    "Нейронные сети",
    "Продуктовая аналитика",
    "Системная аналитика",
    "Сквозная аналитика",
    "Финансовая аналитика"
];
let design = [
    "Бренд-дизайн",
    "Веб-дизайн",
    "Геймдизайн",
    "Графический дизайн",
    "Дизайн интерьера",
    "Дизайн мобильных приложений",
    "Для начинающих",
    "Иллюстрации",
    "Дизайн интерактивных медиа",
    "Ландшафтный дизайн",
    "Motion-дизайн",
    "Figma",
    "Tilda",
    "3D-моделирование",
    "Photoshop",
    "UX/UI дизайн"
];
let programList = [
    "Веб-разработка",
    "Вёрстка на HTML/CSS",
    "Для новичков",
    "Игры на Unity",
    "Игры на Unreal Engine",
    "Информационная безопасность",
    "Машинное обучение",
    "Руководитель разработки",
    "Системное администрирование",
    "Создание сайтов",
    "Создание игр",
    "Data Science",
    "Python",
    "Java",
    "1C-программирование",
    "Мобильная разработка",
    "PHP",
    "Frontend",
    "iOS",
    "Java",
    "Javascript",
    "Kotlin",
    "Python",
    "QA-тестирование",
    "SQL",
    "Swift",
    "Маркетинг",
];
let foreignList = [
    "Английский язык",
    "Бизнес",
    "Грамматика",
    "Для детей",
    "Для начинающих",
    "Индивидуальные",
    "Интенсивные",
    "По скайпу",
    "Подготовка к ЕГЭ",
    "Подготовка к экзаменам",
    "Продвинутый",
    "Произношение",
    "Разговорный",
    "С носителем"
];
let marketingList = [
    "B2B",
    "CRM-маркетинг",
    "E-commerce",
    "Email-маркетинг",
    "Event",
    "Excel",
    "Facebook",
    "Instagram",
    "Landing page",
    "MyTarget",
    "Perfomance-маркетинг",
    "Power BI и Query",
    "PR",
    "SEO-продвижение",
    "SMM-продвижение",
    "TikTok",
    "Youtube",
    "Автоворонки продаж",
    "Арбитраж трафика",
    "Блоггинг",
    "Брендинг",
    "Видеомаркетинг",
    "Вконтакте",
    "Интернет-маркетинг",
    "Инфлюенс-маркетинг",
    "Инфомаркетинг",
    "Квиз-маркетинг",
    "Контекстная реклама",
    "Контент-маркетинг",
    "Копирайтинг",
    "Маркетплейсы",
    "Мессенджеры",
    "Подкастинг",
    "Продакт-маркетинг",
    "Сторителлинг",
    "Таргетинг",
    "Финансы",
    "Яндекс Дзен"
];
let manageList = [
    "Управление персоналом и HR"
];

/*------ Заполнение всплывающего меню в хедере --------*/

let analyticSub = document.getElementById("subMenuAnalyticList");
let designSub = document.getElementById("subMenuDesignList");
let foreignSub = document.getElementById("subMenuForeignList");
let marketingSub = document.getElementById("subMenuMarkList");
let programSub = document.getElementById("subMenuProgramList");
let manageSub = document.getElementById("subMenuManageList");

for (let i = 0; i < analytics.length; i++) {
    let listItem = analytics[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = listItem;
    analyticSub.appendChild(el);
}

for (let i = 0; i < design.length; i++) {
    let opt = design[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = opt;
    designSub.appendChild(el);
}

for (let i = 0; i < foreignList.length; i++) {
    let opt = foreignList[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = opt;
    foreignSub.appendChild(el);
}

for (let i = 0; i < marketingList.length; i++) {
    let opt = marketingList[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = opt;
    marketingSub.appendChild(el);
}

for (let i = 0; i < programList.length; i++) {
    let opt = programList[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = opt;
    programSub.appendChild(el);
}

for (let i = 0; i < manageList.length; i++) {
    let opt = manageList[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = opt;
    manageSub.appendChild(el);
}

/*------ Раскрытие всплывающего меню в хедере --------*/

let dropDownMenu = document.getElementById('menu');
let header = document.querySelector('.header');
let wrapper = document.getElementById('wrapper')
let dark = document.querySelector('.dark');
let subMenuLists = document.querySelectorAll('.subMenuList');
let titleMenu = document.querySelectorAll('.titleMenu');

document.getElementById('coursesBtn').addEventListener("click", function (e) {
    if (dropDownMenu.style.visibility !== 'hidden') {
        closeDropDown();
    } else {
        //header.classList.toggle('active');
        wrapper.classList.toggle('active');
        dark.classList.toggle('background');
        document.body.classList.toggle('stopScroll');
    }
});

function closeDropDown() {
    wrapper.classList.toggle('active');
    dark.classList.toggle('background');
    document.body.classList.toggle('stopScroll');
}

dark.addEventListener('click', function(e) {
    if(e.target.id === 'dark') {
        closeDropDown();
    }
});

for (let i = 0; i < titleMenu.length; i++) {
    titleMenu[i].addEventListener('mouseenter', function (e) {
        for (let j = 0; j < subMenuLists.length; j++) {
            let item = subMenuLists[j]
            if (j === i) {
                item.classList.add('subMenuList_active');
            } else {
                item.classList.remove('subMenuList_active');
            }
        }
    });

    const mQuery = window.matchMedia('(max-width: 1024px)');
    if (mQuery.matches) {
        titleMenu[i].addEventListener("click", function (e) {
            let item = document.querySelectorAll('.menuItem')[i];
            item.classList.toggle('openDropDown');
        })
    }
}

/*--------------------- Переключение страниц -------------------*/

$('.page').click(function(){
    if(!$(this).hasClass('selected-page')){
        $(this).siblings().removeClass('selected-page');
        $(this).addClass('selected-page');
    }
});



