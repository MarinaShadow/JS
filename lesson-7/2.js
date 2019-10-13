/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

function validateArr(paramArr) {
    if (!Array.isArray(paramArr)) {
        throw new Error('argument is not an array');
    }
}

function validateNum(paramN) {
	for (let i = 0; i < paramN.length; i++) {
		if (typeof paramN[i] !== 'number' && !Array.isArray(paramN[i])) {
			throw new Error('argument is not an array or a number');
		}
	}
}

function collect(arr) {
	validateArr(arr);
	let newArr = arr.reduce((acc, val) => Array.isArray(val)
		? acc.concat(collect(val))
		: acc.concat(val), []);
	
	// let newArr = arr.flat(Infinity); // или так

	validateNum(newArr);
	let result = newArr.reduce((sum, current)=> 
		sum + current, 0);
	return result;
}

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

// const array6 = [[1, 2], [[13]], ['hhh'], 1];
// console.log(collect(array6));  // Проверка для себя

// const array7 = 'hhh';
// console.log(collect(array7));  // Проверка для себя

exports.collect = collect;