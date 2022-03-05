/*------ Заполнение карточек --------*/

let analyticCard = document.getElementById("analyticList");
let designCard = document.getElementById("designList");
let foreignCard = document.getElementById("foreignList");
let marketingCard = document.getElementById("marketingList");
let programCard = document.getElementById("programList");
let manageCard = document.getElementById("manageList");

for (let i = 0; i < analytics.length; i++) {
    if (analytics.length < 7) {
        document.getElementById('analyticDropDownBlock').style.display = 'none';
    }
    let listItem = analytics[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = listItem;
    analyticCard.appendChild(el);
}

for (let i = 0; i < design.length; i++) {
    if (design.length < 7) {
        document.getElementById('designDropDownBlock').style.display = 'none';
    }
    let opt = design[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = opt;
    designCard.appendChild(el);
}

for (let i = 0; i < foreignList.length; i++) {
    if (foreignList.length < 7) {
        document.getElementById('foreignDropDownBlock').style.display = 'none';
    }
    let opt = foreignList[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = opt;
    foreignCard.appendChild(el);
}

for (let i = 0; i < marketingList.length; i++) {
    if (marketingList.length < 7) {
        document.getElementById('marketingDropDownBlock').style.display = 'none';
    }
    let opt = marketingList[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = opt;
    marketingCard.appendChild(el);
}

for (let i = 0; i < programList.length; i++) {
    if (programList.length < 7) {
        document.getElementById('programDropDownBlock').style.display = 'none';
    }
    let opt = programList[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = opt;
    programCard.appendChild(el);
}

for (let i = 0; i < manageList.length; i++) {
    let opt = manageList[i];
    if (manageList.length < 7) {
        document.getElementById('manageDropDownBlock').style.display = 'none';
    }
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = opt;
    manageCard.appendChild(el);
}

/*------ Раскрытие карточек --------*/

let expands = document.getElementsByClassName('expand');
let cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) {
    expands[i].addEventListener("click", function (e) {
        if (expands[i].textContent === 'Развернуть все') {
            this.textContent = 'Свернуть все';
            let card = cards[i];
            card.classList.toggle("add");
        } else {
            this.textContent = 'Развернуть все';
            let card = cards[i];
            card.classList.toggle("add");
        }
    })
}

/*---------- Бегущая строка -----------*/

if(window.matchMedia('(min-width: 1024px)').matches){
    $(window).on('resize', function(){
        marquee_loader();
    });

    function marquee_loader()
    {
        if(!$(".marquee").hasClass('cloned'))
        {
            $(".marquee").append("<div class='marqueeItems cloned'>"+$(".feedbackBlock .marqueeItems:nth-child(1)").html()+"</div>");
            $(".marquee").append("<div class='marqueeItems cloned'>"+$(".feedbackBlock .marqueeItems:nth-child(2)").html()+"</div>");
            $(".marquee").addClass('cloned');
        }

        if(window.matchMedia('(min-width: 1024px)').matches)
        {
            $(".feedbackBlock div.marqueeItems").css('width', ($(".feedbackBlock .feedbackCard").outerWidth() + 30) * 3 + 195);
            $(".marquee").css('width', $(".feedbackBlock .marqueeItems").outerWidth() * $(".feedbackBlock .marqueeItems").length);
            var translate_count = ($(".feedbackBlock .marqueeItems").outerWidth() - 195) * ($(".feedbackBlock .marqueeItems").length - 2);
            $(".marquee").css('--translate', '-'+translate_count+'px');
        }

    }

    $(document).ready(function(){
        marquee_loader();
    });
}

/*------ Заполнение списка образовательных платформ --------*/


let col1 = document.getElementById("platforms");

for (let i = 0; i < platforms.length; i++) {
    let opt = platforms[i];
    let el = document.createElement("li");
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = opt;
    col1.appendChild(el);
}

/*------- Раскрытие списка образовательных учреждений ------------*/

let expand = document.getElementById('expandEdu');
let eduList = document.getElementById('educLists');

expand.addEventListener("click", function (e) {
    if (expand.textContent === 'Развернуть все') {
        this.textContent = 'Свернуть все';
        eduList.classList.toggle("addListItemsEdu");
    } else {
        this.textContent = 'Развернуть все';
        eduList.classList.toggle("addListItemsEdu");
    }
})
