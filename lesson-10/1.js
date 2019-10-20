/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение

function validateF(paramF) {
    if (typeof paramF !== 'function') {
        throw new Error('first argument is not a function');
    }
}

function validateObj(param) {
	if (typeof param !== 'object') {
        throw new Error('second argument is not an obgect');
    }
}

function validateArr(paramArr) {
	validateObj(paramArr);
    if (Array.isArray(paramArr)) {
        throw new Error('second argument is array');
    }
}

function bind(fn, context) {
	validateF(fn);
	validateArr(context);
	
	let bindArgs = [].slice.call(arguments, 2);
	return function() {
	  let fnArgs = [].slice.call(arguments);
	  return fn.apply(context, bindArgs.concat(fnArgs));
	};
}

function getName(greeting, message) {
    return `${greeting} ${message} ${this.name}.`;
}

const user = { name: 'Walter', getName };
const oliver = { name: 'Oliver' };


const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hello! I am Oliver.

exports.bind = bind;