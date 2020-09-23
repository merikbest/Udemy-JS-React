// 1 СПОСОБ
let number = 1;

// анонимная самовызывающиеся функция
(function () {
    let number = 2;
    console.log(number);

    return console.log(number + 3);
}());

console.log(number); // 2 5 1


// 2 СПОСОБ
let user = (function () {
    let private = function () { // undefined
        console.log('I am a private');
    };
    return {
        sayHello: function () {
            console.log('Hello!');
        }
    };
}());

console.log(user);
console.log(user.sayHello());


// 3 СПОСОБ
let user2 = (function () {

    let private = function () { // undefined
        console.log('I am a private');
    };

    let sayHello = function () {
        console.log('Hello!');
    };

    return {
        private: private(),
        sayHello: sayHello()
    };
}());

console.log(user2.private);
console.log(user2.sayHello);
