function User(name, age) {
    this.name = name;
    let userAge = age; // Пример инкапсуляции

    this.getAge = function () {
        return userAge;
    };

    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log("Недопустимое значение");
        }
    }

    this.say = function () {
        console.log(`Имя пользователя ${this.name}, возраст ${this.userAge}`);
    }
}

let user = new User('Ivan', 25);
console.log(user.name);
console.log(user.userAge);  // undefined
user.say();                 // Имя пользователя Ivan, возраст undefined
console.log(user.getAge()); // 25
user.setAge(30);
console.log(user.getAge()); // 30