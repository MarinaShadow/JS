'use strict';
/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */


// Решение

const person = {};

Object.defineProperties(person, {
    rate: {
        // value: null,
        writable: true,
    },
    salary: {
        get: function() {
            const currentDay = new Date().getDate();
            if (this.rate) {
                return this.rate * currentDay;
            } else {
                return 0;
            }
        },
    },
});

person.rate = 30;

// delete person.rate; // Проверка для себя
// delete person.salary; // Проверка для себя

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
console.log(person.rate);
console.log(person.salary);

//for(let key in person) console.log(key); // Проверка для себя

exports.person = person;
