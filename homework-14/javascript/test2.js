"use strict";
if (confirm(`Почати   тестування?`)) {
    // Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
    let monthNumber = Number(prompt('Введіть кількість місяців', '26'));
    let dataObj = {
        day: 6,
        month: 2,
        year: 2023
    };
    document.write(`Початкові дані:<br>`);
    document.write(`День-${dataObj.day}<br>`);
    document.write(`Місяць-${dataObj.month}<br>`);
    document.write(`Рік-${dataObj.year}<br>`);
    /**
     *
     * @param param0 -{ month, year } - беремо з об'єкту початкові значення місяця і року
     * @param N - кількість місяців
     * @returns - який буде рік
     */
    function getYearInN({ month, year }, N) {
        return (Math.floor((month + N) / 12)) + year;
    }
    let res = getYearInN(dataObj, monthNumber);
    document.write(`Через ${monthNumber} місяців буде ${res} рік <br>`);
}
