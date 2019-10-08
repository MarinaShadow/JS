/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

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

function filter(arr, cb) {
	validateArr(arr);
	validateF(cb);
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (cb(arr[i], i, arr)) {
			result.push(arr[i]);
		}
	}
	return result;
}

const filteredArray = filter(array, (element, index, arrayRef) => {
	console.log(`${index}:`, element, arrayRef);

	return element === 'Добрый вечер!';
});

// filter('array', (element, index, arrayRef) => { // Проверка для себя
//     console.log(`${index}:`, element, arrayRef);
// 	return element === 'Добрый вечер!';
// });

// filter(array, 25); // Проверка для себя

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
