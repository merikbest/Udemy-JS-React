// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);
//
// let timerId = setInterval(sayHello, 3000);
// // clearTimeout(timerId);
//
// function sayHello() {
//     console.log('Hello world!');
// }
//
// let timerId = setTimeout(function log() {
//     console.log("Hello");
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn');
let element = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos +'px';
            element.style.left = pos +'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block');
let btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }

    if (event.target && event.target.classList.contains('first')) {
        console.log('Hello');
    }

    if (event.target && event.target.matches('button.first')) {
        console.log('Hello');
    }
});