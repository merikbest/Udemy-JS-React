let box = document.querySelector('.box');
let btn = document.querySelector('button');

//Параметры для получения более точного результата в пикселях 'px'
let width = box.clientWidth;
let height = box.clientHeight;

//Параметр получения результата в пикселях 'px'
let width = box.offsetWidth;
let height = box.offsetHeight;

//Метод получения всех расстояний до элемента
box.getBoundingClientRect();

//Получить ширину всего документа
document.documentElement.clientWidth;
document.documentElement.clientHeight;
document.documentElement.clientLeft;
document.documentElement.clientTop;

//Переход в начало документа (или Расстояние от текущего положения скролла до верхней границы документа)
document.documentElement.scrollTop;

//При клике на кнопку скролл полностью раскрывается
btn.addEventListener('click', function () {
    box.style.height = box.scrollHeight + 'px';
})

//При клике на кнопку переходим в начало документа
btn.addEventListener('click', function () {
    box.scrollHeight = 0;
})