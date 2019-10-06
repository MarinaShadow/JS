/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('some argument is not a number type');
    }
}

function f(a, b, c) {
	validate(a);
	validate(b);
	validate(c);
	let result;
	result = (a-b)/c;
	return result;
}



console.log(f(9, 3, 2)); // 3
// console.log(f(15, 1, 2)); // 7 Проверка для себя
// console.log(f(9, 'hhh', 2)); // Проверка для себя

exports.f = f;