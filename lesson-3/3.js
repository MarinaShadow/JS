/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение

function truncate(string, maxLength) {
    if (typeof string === 'string' && typeof maxLength === 'number'){
        if (string.length > maxLength) {
            let myString = string.slice(0, maxLength-3) + '...';
            return myString;
            // console.log(myString.length); //проверка для себя
        } else {
            return string;
            // console.log(string.length); //проверка для себя
        }
    }
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'
// console.log(truncate('Вот, что мне хотел', 21)); //проверка для себя

exports.truncate = truncate;
