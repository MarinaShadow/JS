/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение

function validateArr(paramArr) {
    if (!Array.isArray(paramArr)) {
        throw new Error('first argument is not an array');
    }
}

function validateF(paramF) {
    if (typeof paramF !== 'function') {
        throw new Error('second argument is not a function');
    }
}

function forEach(arr, cb) {
    validateArr(arr);
    validateF(cb);
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

// forEach('array', (element, index, arrayRef) => { // Проверка для себя
//     console.log(`${index}:`, element, arrayRef);
// });

// forEach(array, 25);// Проверка для себя

console.log(result); // undefined

exports.forEach = forEach;
