/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Если в качестве первого параметра передана не строка — нужно вернуть null.
 */

const PRICE = '$120';

// Решение

function extractCurrencyValue(source) {
    if (typeof source === 'string') {
        let onlyPrice = +source.slice(1);
        return onlyPrice;
        // console.log(typeof onlyPrice); //проверка для себя
    } else {
        return null;
    }
}

console.log(extractCurrencyValue(PRICE)); // 120
// console.log(extractCurrencyValue(25)); //проверка для себя

exports.extractCurrencyValue = extractCurrencyValue;
