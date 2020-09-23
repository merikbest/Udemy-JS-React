// поменять класс элемента
$(".list-item:eq(0)").on("click", function () {
    $(this).toggleClass("active");
});

// анимация
$("button").on("click", function () {
    $(".list-item:eq(1)").animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 1000);
});

// document.querySelectorAll('.list-item').forEach();
// .classList
// .addEventListener
// $.ajax === fetch






