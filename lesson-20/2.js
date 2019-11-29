/**
 # Задача 2

 Улучшите класс `Customers` добавив функцию генератор.

 **Обратите внимание**:

 1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.
 */

// Решение

class Customers {
    constructor() {
        this.arr = [];
    }

    add(obj) {
        if (typeof obj !== 'object') {
            throw new Error('argument is not an obgect');
        } else if (typeof obj.name !== 'string') {
            throw new Error('name is required field with type string');
        } else if (obj.verified && typeof obj.verified !== 'boolean') {
            throw new Error('verified is not type boolean');
        }

        this.arr.push(obj);
    }

    *[Symbol.iterator]() {

        const result = this.arr.filter(i => i.verified);

        for (const i of result) {
            yield i;
        }
    }
}

// Пример использования
const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }
