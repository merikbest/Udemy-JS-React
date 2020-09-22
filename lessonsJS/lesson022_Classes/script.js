/*
//Функция конструктор
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log("Hello" + this.name);
    };
}

//Добавление нового метода "exit" в конструктор User
User.prototype.exit = function(name) {
    console.log("Пользователь " + this.name + " ушел");
}

//ivan и vasya объекты класса User
let ivan = new User('Ivan', 1);
let vasya = new User('Vasya', 2);
*/

function showThis(a, b) {
    // Ссылается на класс Window
    console.log(this);

    function sum() {
        // Ссылается на класс Window, т.е. функция внутри функции считает своим контекстом Window
        console.log(this);
        // NaN так как в методе sum() нет параметров a, b. Для этого убираем this,
        // после чего функция если не нашла параметров a, b она ищет в функции на 1 уровень выше. (ЗАМЫКАНИЕ ФУНКЦИЙ)
        // return this.a + this.b;
        return a + b; //ЗАМЫКАНИЕ ФУНКЦИЙ
    }

    // NaN
    console.log(sum());
}

let obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this.a + this.b)
    }
}


//Связывание объекта и метода
// 1. Через .call
// 2. Через .apply
// 3. Через .bind

let user = {
    name: "John"
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

//.call и .apply
console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Doe']));

//.bind
function count(number) {
    return this * number;
}

//double - ФУНКЦИЯ.
// Т.Е. в "double" записали функцию "count(number)"
let double = count.bind(2); //Методом .bind(2) привязали 2 к функции count(). И теперь number = this. В данном случае 2.

console.log(double(3));
console.log(double(5));

// 1) Просто вызов функции - window/undefined
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind


let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    this.style.display = 'none';
});


/*
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`);
    }
}

let ivan = new User('Ivan', 1);
let vasya = new User('Vasya', 2);

console.log(ivan);
console.log(vasya);

ivan.hello();
vasya.hello();
*/
