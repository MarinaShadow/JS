/**
 * Задача 4.
 *
 * Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске compose() последовательно запускает коллбек-функции из аргументов.
 *
 * Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.
 *
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Функция compose() возвращает ещё одну функцию с одним параметром.
 * Значение, переданное этой функции в качестве аргумента должно стать
 * параметром первой коллбек-функции в цепочке выполнения функции compose().
 *
 * Итого, подпись функции compose: `compose(f, g)(x) = f(g(x))`.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией;
 * - Любая функция из аргументов не вернула значение.
 *
 * Заметка:
 * Если функции, которая является возвращаемым значением compose()
 * не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.
 */

// Решение

function validateF(paramF) {
	for(let i=0; i<paramF.length; i++) {
		if (typeof paramF[i] !== 'function') {
			throw new Error('all arguments must be a function');
		}
	}
}

function compose(...res) {
	validateF(res);
	const err = ()  => {throw new Error(`one of callback did not return any value.`)};
	return (function(acc) {
		let myResult = res.reduceRight((acc, fn) =>
			(fn() === undefined && fn.length <=0)
			? err()
			: fn(acc), acc);
		return myResult;
	})
}

const result1 = compose(
    prevResult => prevResult + 'o',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'l',
	prevResult => prevResult + 'e',
)('h');
const result2 = compose(
    prevResult => prevResult + 'o',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'e',
    () => 'h',
)();

console.log(result1); // 'hello'
console.log(result2); // 'hello'

exports.compose = compose;