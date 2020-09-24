function forms() {
    //ФОРМЫ ОТПРАВКИ НА СЕРВЕР
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
}

module.exports = forms;

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