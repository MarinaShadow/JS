/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// const person = {};

// Решение

const person = {
    get salary() {
        const currentDay = new Date().getDate();
        const today = new Date();
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        if ( lastDay - currentDay > 20) {
            return `good salary`;
        } else {
            return `bad salary`;
        }
    },
};

console.log(person.salary);
console.log(person);

// person.salary; // good salary

exports.person = person;