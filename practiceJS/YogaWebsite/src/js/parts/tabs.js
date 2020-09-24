//РЕАЛИЗАЦИЯ ТАБОВ
function tabs() {
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
}

module.exports = tabs;