function slider() {
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
}

module.exports = slider;