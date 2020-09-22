let drink = 1;

function shoot(arrow) { // headshot и fail - ФУНКЦИИ
    console.log('Вы сделали выстрел...');

    // Создание промиса
    let promise = new Promise(function (resolve, reject) { // resolve - обещание выполнилось
        // Моделируем выстрел
        setTimeout(function () {
            // headshot({}) - "{}" передаем пустой объект
            Math.random() > 0.5 ? resolve({}) : reject("Вы промахнулись");
        }, 1000);
    });

    return promise;
}

function win() {
    console.log("Вы победили!");
    (drink == 1) ? buyBear() : giveMoney();
}

function loose() {
    console.log("Вы проиграли");
}

function buyBear() {
    console.log("Вам купили пиво!");
}

function giveMoney() {
    console.log("Вам дали денег!");
}

shoot({})
    .then(() => console.log("Вы попали в цель!"))
    .then(win)
    .catch(loose);

// shoot({},
//     function (mark) { // mark - хз за чем
//         console.log("Вы попали в цель!");
//         win(mark, buyBear, giveMoney); // buyBear, giveMoney - хз за чем передавать, если работает и без них
//     },
//     function (miss) { // "miss" -  это fail("Вы промахнулись")
//         console.error(miss);
//         loose();
//     });
