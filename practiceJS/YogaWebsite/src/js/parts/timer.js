//РЕАЛИЗАЦИЯ ТАЙМЕРА
function timer() {
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
}

module.exports = timer;