/**
 * Задача 1.
 *
 * Создайте функцию createNumberGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100 (включительно).
 *
 * Условия:
 * - Числа не должны повторяться;
 * - Задачу нужно решить с помощью замыкания.
 *
 * Генерировать ошибку если:
 * - Функция была вызвана, когда доступные для выведения числа закончились.
 *
 * Подсказка: в замыкании можно хранить массив с числами, которые уже были созданы функцией.
 */

// Решение

function createNumberGenerator(){
    let arr = [];
    
    return function getRandom() {
        let min = Math.ceil(1);
        let max = Math.floor(100);
        let result = Math.floor(Math.random() * (max - min + 1)) + min;

        if (arr.length === 100) {
            // arr.sort(function(a, b) { // Проверка для себя
            //     return a - b;
            // });
            // console.log(arr);
            throw new Error('There are no more numbers available');
        } else if (arr.indexOf(result) !== -1) {
            return getRandom();
        } else {
            arr.push(result);
            return result;
        }
    }
}

const TOTAL_ITERATIONS = 105;
let invocations = 0;
const generateNumber = createNumberGenerator();

try {
    for (invocations; invocations < TOTAL_ITERATIONS; invocations++) {
        console.log(`Iteration: ${invocations}. Number: ${generateNumber()}`);
    }
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
    console.log(`Function generated an error on ${invocations} invocation.`);
}

// Когда все числа выведутся:
// Error: There are no more numbers available.
// Function generated an error on 100 invocation.

exports.createNumberGenerator = createNumberGenerator;