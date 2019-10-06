/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
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

function isEven(arg) {
	validate(arg);
	let result;
	result = (arg % 2 === 0) ? true : false;
	// result = (arg % 2 === 0); // или так
	return result;
}

console.log(isEven(3)); // false
console.log(isEven(4)); // true
// console.log(isEven('test')); // Проверка для себя

exports.isEven = isEven;