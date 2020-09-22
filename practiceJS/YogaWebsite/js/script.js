//Строка загрузки страницы. Пока не загрузится весь контент на странице скрипт не отработает. ('DOMContentLoaded')
window.addEventListener('DOMContentLoaded', function () {

    //РЕАЛИЗАЦИЯ ТАБОВ
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');

    //Скрыть табы с страницы. Параметр а - какой таб остается
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            //Скрыть элементы со страницы
            tabContent[i].classList.remove('show'); //'show' - в файле CSS
            tabContent[i].classList.add('hide'); //'hide' - в файле CSS
        }
    }

    //Передаем 1 (Скрыть все Табы кроме первого (1)). Т.Е. значение по умолчанию.
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    //При нажатии на кнопку с классом "info-header-tab", через цикл for сравниваем значения с тем,
    // которое содержится в массиве элементов tab. Если совпадение нашлось, вызываем метод "showTabContent();"
    info.addEventListener('click', function (event) {
        let target = event.target; //target - то куда мы нажали.

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                //Если target(то куда мы нажали) совпадает с определенным Табом тогда ...
                if (target == tab[i]) {
                    hideTabContent(0); //... скрываем все Табы ...
                    showTabContent(i); //... и показываем текущий Таб
                    break;
                }
            }
        }
    });

    //РЕАЛИЗАЦИЯ ТАЙМЕРА
    let deadLine = '2020-09-22';

    function getTimeRemaining(endTime) {
        let time = Date.parse(endTime) - Date.parse(new Date());
        let seconds = Math.floor((time / 1000) % 60);
        let minutes = Math.floor((time / 1000 / 60) % 60);
        // let hours = Math.floor((time / (1000 * 60 * 60)));

        // Если нам понадобятся дни, тогда можно записать так:
        let hours = Math.floor((time / 1000 / 60 / 60) % 24);
        let days = Math.floor((time / (1000 * 60 * 60 * 24)));

        //Экспорт объекта из функции, так как мы не можем экспортировать несколько переменных
        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    //Статическую верстку в динамическую
    //id - id в верстке в данном случае 'timer'
    function setCloak(id, endTime) {
        let timer = document.getElementById(id);
        //Ищем подклассы 'timer', а именно hours, minutes, seconds
        let days = timer.querySelector('.days');
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        //Обновляем переменные в статической верстке
        function updateClock() {
            // getTimeRemaining() - вызывается каждую секунду и будем получать обновленные данные по времени
            // let t - объект который возвращается из метода getTimeRemaining()
            let t = getTimeRemaining(endTime);

            //Записываем данные прямо в верстку
            t.days < 10 ? days.textContent = '0' + t.days : days.textContent = t.days;
            t.hours < 10 ? hours.textContent = '0' + t.hours : hours.textContent = t.hours;
            t.minutes < 10 ? minutes.textContent = '0' + t.minutes : minutes.textContent = t.minutes;
            t.seconds < 10 ? seconds.textContent = '0' + t.seconds : seconds.textContent = t.seconds;

            //ИЛИ
            /*            function addZero(num) {
                            if (num <= 9) {
                                return '0' + num;
                            } else return num;
                        };

                        days.textContent = addZero(t.days);
                        hours.textContent = addZero(t.hours);
                        minutes.textContent = addZero(t.minutes);
                        seconds.textContent = addZero(t.seconds); */

            //Как только значение total будет 0 таймер остановится "clearInterval()"
            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setCloak('timer', deadLine);

    // МОДАЛЬНОЕ ОКНО
    let description = document.getElementsByClassName('description-btn');
    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');

    //ДЗ - Привязать модальное окно к кнопкам “Узнать подробнее” в табах. Код не должен дублироваться.
    for (let i = 0; i < description.length; i++) {
        description[i].addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }

    //Показать модальное окно
    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');

        //Запретить прокрутку когда открыто модальное окно
        document.body.style.overflow = 'hidden';
    });

    //При клике на крестик модальное окно закрывается
    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let main = document.getElementsByClassName('main');

    //ДЗ
    //   Создать класс options
    // · Он должен содержать свойства: height, width, bg, fontSize, textAlign
    // · Он должен содержать метод, создающий новый div на странице,
    //   записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров
    // · Создать новый объект через класс
    // · Вызвать его метод и получить элемент на странице
    class Options {

        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }

        createDiv(text) {
            let div = document.createElement('div');
            div.textContent = `${text}`;
            div.style.height = this.height;
            div.style.width = this.width;
            div.style.cssText = `background-colour: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
            document.body.insertBefore(div, main[0]);
        }
    }

    let obj = new Options(100 + 'px', 100 + 'px', 'red', 20, 'center');
    // obj.createDiv("Hello World!");


    //ФОРМЫ ОТПРАВКИ НА СЕРВЕР

    //Объект состояния запроса
    /*    let message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся!',
            failure: 'Что-то пошло не так...'
        };

        let form = document.querySelector('#form, .main-form'); // Переменная получения формы с страницы
        let input = form.getElementsByTagName('input');// Получаем все "input" с формы "form"
        let statusMessage = document.createElement('div'); // Создаем "div" с сообшениями о ошибке
        statusMessage.classList.add('status'); // Класс "status" прописан в CSS

        // Навешивать  "submit" ТОЛЬКО НА ФОРМУ ОТПРАВКИ, А НЕ НА КНОПКУ
        form.addEventListener('submit', function (event) {
            // Отменить стандартное поведение браузера (тк как при отправке формы страницы перезагрузится)
            event.preventDefault();
            form.appendChild(statusMessage); // Добавляем в форму "div" с сообщениями  о ошибке

            // Запрос отправки данных
            let request = new XMLHttpRequest();

            request.open("POST", 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            let formData = new FormData(form); // Получить данные всех "input" что ввел пользователь в форме

            let obj = {} // Пустой объект для отправки JSON

            // Заполнения объекта "ключ : значение"
            formData.forEach(function (value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj); // Превращаем объекты в JSON формат

            request.send(json); // Передаем данные которые ввел пользователь в виде JSON

            // Изменения состояния запроса и вывод этого состояния на экран
            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            // Цикл для отчистки "input" после выполнения запроса
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });*/

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.getElementsByClassName('main-form')[0];
    let formBottom = document.getElementById('form');
    let input = document.getElementsByTagName('input');
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    function sendForm(element) {

        element.addEventListener('submit', function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form);

            function postData(data) {

                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open("POST", 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    let obj = {}

                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });

                    data = JSON.stringify(obj);

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    }

                    request.send(data);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }

    sendForm(form);
    sendForm(formBottom);


    // СЛАЙДЕР
    let slideIndex = 1; // Переменная которая показывается в текущий момент
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');

    function showSlides(n) { // n - индекс слайда

        // Проверки слайдов (последний и первый)
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none'); // Скрываем каждый слайд
        dots.forEach((item) => item.classList.remove('dot-active')); // Скрыть точку

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Стрелка назад
    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    // Стрелка вперед
    next.addEventListener('click', function () {
        plusSlides(1)
    });

    // Привязка точки к слайду
    dotsWrap.addEventListener('click', function (event) {
        // event - делегирование событий, мы проверяем элемент на определенные параметры и в соответствии что то делаем
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    showSlides(slideIndex);


    // КАЛЬКУЛЯТОР
    let persons = document.querySelectorAll('.counter-block-input')[0];
    let restDays = document.querySelectorAll('.counter-block-input')[1];
    let place = document.getElementById('select');
    let totalValue = document.getElementById('total');
    let personsSum = 0;
    let daysSum = 0;
    let total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('input', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
            personsSum = 0;
        } else {
            totalValue.innerHTML = total;
        }


        /*        let request = new XMLHttpRequest();

                request.open('GET', 'current.json');
                request.setRequestHeader('Content-type', 'application-json; charset=utf-8');
                request.send();

                personsSum = +this.value;

                request.addEventListener('readystatechange', function () {
                    if (request.readyState === 4 && request.status == 200) {
                        // this.value - получаем значение у которого происзодит ето событие
                        total = (daysSum + personsSum) * 4000;
                    }
                    // если 2 инпут не заполнен оставляем 0, если да выводим сумму
                    if (restDays.value == '') {
                        totalValue.innerHTML = 0;
                    } else {
                        totalValue.innerHTML = total;
                    }
                })*/
    });

    restDays.addEventListener('input', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
            daysSum = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total; // техническая переменная
            totalValue.innerHTML = a * this.options[this.selectedIndex].value; // Получаем у "options" его "value"(коэффициент) которое указано на странице
        }
    });


});















