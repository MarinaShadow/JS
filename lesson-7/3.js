/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function validate(param) {
	if (typeof param !== 'number' && typeof param !== 'string'
		&& typeof param !== 'object' && !Array.isArray(param)) {
        	throw new Error('argument is not: number, string, object or array');
    }
}

function validateNum(paramN) {
    if (typeof paramN !== 'number') {
        throw new Error('argument is not a number type');
    }
}

function createArray(a, b) {
	validate(a);
	validateNum(b);

	const arr = [];
	for (let i = 0; i<b; i++) {
		arr.push(a);
	} 
	return arr;
}

const result = createArray('x', 5);

// const result = createArray(false, 5); //Проверка для себя
// const result = createArray([3], 2); //Проверка для себя

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;