/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

function checkSpam(source, example) {
  if (typeof source === 'string' && typeof example === 'string'){
      let lowerSource = source.toLowerCase();
      let lowerExample = example.toLowerCase();
      let result = lowerSource.includes(lowerExample);
      return result;
  }
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true
console.log(checkSpam('pitterxxx@gmail.com', '77')); // false

exports.checkSpam = checkSpam;
