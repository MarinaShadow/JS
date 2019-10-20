/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Первая коллбек-функция не принимает параметров.
 *
 * Функция calculate() должна вернуть результат выполнения последней коллбек-функции из цепочки.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

// Решение

function validateF(paramF) {
	for(let i=0; i<paramF.length; i++) {
		if (typeof paramF[i] !== 'function') {
			throw new Error('all arguments must be a function');
		}
	}
}

function calculate(...res) {
	validateF(res);
	const err = ()  => {throw new Error(`one of callback did not return any value.`)};
	let myResult = res.reduce((acc, current) =>
		(current() === undefined && current.length <=0)
		? err()
		: current(acc), 0);
	return myResult;
}

const result = calculate(
    () => {
        return 7;
	},
    prevResult => {
        return prevResult + 4;
    },
    prevResult => {
        return prevResult * 5;
	},
);

console.log(result); // 55

exports.calculate = calculate;