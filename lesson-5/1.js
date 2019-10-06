/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('num is not a number type');
    }
}

function f(num) {
	validate(num);
	let result = 1;
	for (let count = 0; count < 3; count++) {
		result *= num;
	}
	return result;
}

console.log(f(2)); // 8
console.log(f(3)); // 27 Проверка для себя
// console.log(f(0)); // Проверка для себя
// console.log(f('jjj')); // Проверка для себя

exports.f = f;