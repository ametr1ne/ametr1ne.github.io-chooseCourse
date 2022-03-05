/*------------ Раскрытие карточки школы -------------*/

$('.arrow-btn').click(function (e) {
    $(this).closest('.card').toggleClass('open-arrow');
});

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