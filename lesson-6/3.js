/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];
// const array = [1, 2, 3, '5', 4, 5, 6]; // Проверка для себя

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

function every(arr, cb) {
  validateArr(arr);
  validateF(cb);
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

const result = every(array, (element, index, arrayRef) => {
  console.log(`${index}:`, element, arrayRef);

  return typeof element === 'number';
});

// every('array', (element, index, arrayRef) => { // Проверка для себя
//     console.log(`${index}:`, element, arrayRef);
// 	return typeof element === 'number';
// });

// every(array, 25);// Проверка для себя

console.log(result); // true

exports.every = every;
