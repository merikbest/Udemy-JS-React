function modal() {
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
}

module.exports = modal;