//Строка загрузки страницы. Пока не загрузится весь контент на странице скрипт не отработает. ('DOMContentLoaded')
window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tabs = require('./js/parts/tabs.js');
    let slider = require('./js/parts/slider.js');
    let modal = require('./js/parts/modal.js');
    let forms = require('./js/parts/forms.js');
    let timer = require('./js/parts/timer.js');
    let calc = require('./js/parts/calc');

    tabs();
    slider();
    modal();
    forms();
    timer();
    calc();
});















