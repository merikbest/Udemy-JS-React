let drink = 1;

function shoot(arrow, headshot, fail) { // headshot и fail - ФУНКЦИИ
    console.log('Вы сделали выстрел...');

    // Моделируем выстрел
    setTimeout(function () {
        // headshot({}) - "{}" передаем пустой объект
        Math.random() > 0.5 ? headshot({}) : fail("Вы промахнулись");
    }, 1000);
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

shoot({},
    function (mark) { // mark - хз за чем
        console.log("Вы попали в цель!");
        win(mark, buyBear, giveMoney); // buyBear, giveMoney - хз за чем передавать, если работает и без них
    },
    function (miss) { // "miss" -  это fail("Вы промахнулись")
        console.error(miss);
        loose();
    });
