/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('some argument is not a number type');
    }
}

function f() {
	let result = 0;
	for (let item of arguments) {
		validate(item);
		result +=item;
	}
	return result;
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9
// console.log(f(10, 5, 3)); // 18 Проверка для себя
// console.log(f(1, 1, 1, 2, 'text', 1, 1, 1)); // Проверка для себя


exports.f = f;