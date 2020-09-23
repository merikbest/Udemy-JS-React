/*
localStorage.setItem("number", 1); // Записать новый ключ в хранилище данных
localStorage.getItem("number"); // Получить значение ключа "number" (будет 1)
localStorage.removeItem("number"); // Удалить ключ
localStorage.clear();  // Очистить хранилище*/


// При авторизации пользователя всегда будет активен чекбокс "remember me"
document.addEventListener('DOMContentLoaded', function () {

    let checkBox = document.getElementById('rememberMe');
    let change = document.getElementById('change');
    let form = document.getElementsByTagName('form')[0];

    // Записать новый ключ в хранилище данных .setItem('isChecked', true)
    checkBox.addEventListener('click', function () {
        localStorage.setItem('isChecked', true);
    });

    // Выставляем checkBox = true даже если пользователь обновил страницу (с проверкой в localStorage)
    if (localStorage.getItem('isChecked') === "true") {
        checkBox.checked = true;
    }

    // Записать новый ключ в хранилище данных .setItem('isChecked', true)
    change.addEventListener('click', function () {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = '#FF4766';
    });

    // Проверка если в localStorage 'bg' === "changed" тогда выставляем backgroundColor = '#FF4766'
    if (localStorage.getItem('bg') === "changed") {
        form.style.backgroundColor = '#FF4766';
    }

    // Объект для сохранения данных в localStorage
    let person = {
        name: "Ivan",
        lastName: "Ivanov",
        age: 25,
        devices: ["mobile", "laptop"]
    }

    // Сериализация
    let serializedPerson = JSON.stringify(person);
    localStorage.setItem('person', serializedPerson);

    console.log(JSON.parse(localStorage.getItem('person')));

});