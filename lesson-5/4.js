/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 * 
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение

const week = {
	1: 'Воскресенье',
	2: 'Понедельник',
	3: 'Вторник',
	4: 'Среда',
	5: 'Четверг',
	6: 'Пятница',
	7: 'Суббота',
};

function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('argument is not a number type');
    }
}
function validateInterval(arg) {
	validate(arg);
    if (arg < 1 || arg > 7) {
        throw new Error('number out of range 1-7');
    }
}

function f(a) {
	validateInterval(a);
	for (let key in week) {
		if( +key === a){
			return week[key];
		}
	}
}

console.log(f(1)); // Воскресенье
console.log(f(4)); // Среда
// console.log(f(10)); // Проверка для себя
// console.log(f('text')); // Проверка для себя


exports.f = f;