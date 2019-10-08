/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];
// const array = [1, 2, 4, 5, 6]; //Проверка для себя

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

function some(arr, cb) {
  validateArr(arr);
  validateF(cb);
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

const result = some(array, (element, index, arrayRef) => {
  console.log(`${index}:`, element, arrayRef);

  return typeof element === 'string';
});

// some('array', (element, index, arrayRef) => { // Проверка для себя
//     console.log(`${index}:`, element, arrayRef);
// 	return typeof element === 'string';
// });

// some(array, 25);// Проверка для себя

console.log(result); // true

exports.some = some;
