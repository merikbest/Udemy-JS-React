let json1 = '{"id": 2}';

// Пример обработки ошибок (как в Java)
try {
    let user1 = JSON.parse(json1);
    let user2 = JSON.parse(json2); // ERROR

    console.log(user1);
    console.log(user2);

    // Пример проброса ошибки
    if (!user1.name) {
        throw new Error("В этих данных нет имени");
    }
} catch (error) {
    console.log(error.stack);
}