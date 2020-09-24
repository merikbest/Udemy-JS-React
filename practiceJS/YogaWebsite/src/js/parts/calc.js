function calc() {
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
}

module.exports = calc;