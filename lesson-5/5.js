/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('argument is not a number type');
    }
}

function isPositive(arg) {
	validate(arg);
	let result;
	result = (arg >= 0) ? true : false;
	// result = (arg >= 0); // или так
	return result;
}

console.log(isPositive(-3)); // false
console.log(isPositive(3)); // true
// console.log(isPositive(0)); // Проверка для себя
// console.log(isPositive('text')); // Проверка для себя

exports.isPositive = isPositive;