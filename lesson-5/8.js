/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

function validate(param) {
    if (!Array.isArray(param)) {
        throw new Error('argument is not an array');
    }
}

function validateNotAmpty(arg) {
	validate(arg);
    if (arg.length === 0 ) {
        throw new Error('array is ampty');
    }
}

function f(arr){
	validateNotAmpty(arr);
	console.log(arr[0]);
	arr.splice(0,1);
	arr.length >= 1 && f(arr);
}

f([1, 2, 3]);
// f(['test']); // Проверка для себя
// f([]); // Проверка для себя
// f('some text'); // Проверка для себя
// 1
// 2
// 3

exports.f = f;