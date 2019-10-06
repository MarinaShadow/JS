/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение

function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('argument is not a number type');
    }
}

function validateInterval(arg) {
	validate(arg);
    if (arg < 1) {
        throw new Error('number < 1');
    }
}

function getDivisors(num) {
	validateInterval(num);
	const arr = [];
	let j = 0;
	for (let i = 0; i <= num; i++) {
		if (num % i === 0) {
			arr[j]=i;
			j++;
			// arr.push(i); // или так
		} 
	}
	return arr;
}

console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
// console.log(getDivisors(15)); // Проверка для себя
// console.log(getDivisors('text')); // Проверка для себя
// console.log(getDivisors(-3)); // Проверка для себя

exports.getDivisors = getDivisors;