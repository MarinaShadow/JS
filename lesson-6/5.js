/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

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

// inAcc=arr[0] Если я правильно поняла, про:
// Если третий аргумент не передан — начальным значением аккумулятора станет
// первый элемент обрабатываемого массива.

function reduce(arr, cb, inAcc=arr[0]) {
    validateArr(arr);
    validateF(cb);
    let result = inAcc;
    for (let i = 0; i < arr.length; i++) {
        result = cb(result, arr[i], i, arr);
    }
    return result;
}

const result = reduce(
    array,
    (accumulator, element, index, arrayRef) => {
        console.log(`${index}:`, accumulator, element, arrayRef);

        return accumulator + element;
    },
    INITIAL_ACCUMULATOR,
);

// reduce('array', (element, index, arrayRef) => { // Проверка для себя
//     console.log(`${index}:`, element, arrayRef);
// 	return accumulator + element;
// }, INITIAL_ACCUMULATOR);

// reduce(array, 25); // Проверка для себя

console.log(result); // 21

exports.reduce = reduce;
