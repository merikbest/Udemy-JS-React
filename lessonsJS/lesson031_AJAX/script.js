let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    // Запрос. XMLHttpRequest главный объект для работы с реакт запросами
    let request = new XMLHttpRequest();

    request.open('GET', 'current.json'); // .open - задаём метод отправки и url
    request.setRequestHeader('Content-type', 'application-json; charset=utf-8');
    request.send(); // тут должно быть "body"

    // readystatechange - обработчик событий на запросе
    request.addEventListener('readystatechange', function () {
        // readyState - 4 состояние когда запрос полностью ушел
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response); // превратить JSON в JS объект

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });
});

/*
let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd')

inputRub.addEventListener('input', () => {

    function convertCurrency() {

        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', 'current.json');
            request.setRequestHeader('Content-type', 'application-json; charset=utf-8');
            request.send();

            request.onload = function () {
                if (request.readyState === 4 && request.status == 200) {
                    resolve(this.response);
                } else {
                    reject();
                }
            }
        });
    }

    convertCurrency()
        .then(response => {
            let data = JSON.parse(response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => inputUsd.value = "Что-то пошло не так!");
});*/
