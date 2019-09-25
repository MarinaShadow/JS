/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(string) {
    if (typeof string === 'string'){
       let newString = string.charAt(0).toUpperCase() + string.slice(1);
       console.log(newString);
    }
}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''


exports.upperCaseFirst = upperCaseFirst;