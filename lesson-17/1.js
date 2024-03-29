/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('some param is not a number type');
    }
}

function postpone(start, end, delay) {
    validate(start);
    validate(end);
    validate(delay);

    if (start < end) {
        for (let i = start; i <= end; i++) {
            setTimeout( function timer(i){
                console.log(i);
            }, (i - start + 1) * delay, i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            setTimeout(function timer(i){
                console.log(i);
            }, (start - i + 1) * delay, i);
        }
    }

    // Или так
    // for (let i = start;
    //      start<end ? i <= end : i >= end;
    //      start<end ? i++ : i--) {
    //     setTimeout( function timer(i){
    //         console.log(i);
    //     }, (start<end ? (i - start + 1) : (start - i + 1)) * delay, i);
    // }
}


postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;
