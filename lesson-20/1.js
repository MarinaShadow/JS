/*
Задача 1

Создайте класс `Customers` который умеет работать с механизмом `for of`.

1. Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. У этого объекта есть обязательное поле `name` и необязательное поле `verified`.
2. Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

**Обратите внимание**:
1. Использование генераторов **запрещено**.
2. Использование посторонних библиотек **запрещено**
3. У класса `Customers` **должен** быть метод `Symbol.iterator`
*/

// Решение

class Customers {
    constructor() {
        this.arr = [];
    }

    add(obj) {
        if (typeof obj !== 'object') {
            throw new Error('argument is not an object');
        } else if (typeof obj.name !== 'string') {
            throw new Error('name is required field with type string');
        } else if (obj.verified && typeof obj.verified !== 'boolean') {
            throw new Error('verified is not type boolean');
        }

        this.arr.push(obj);
    }

    [Symbol.iterator]() {
        let i = 0;

        const result = this.arr.filter(i => i.verified === true);

        return {
            next: () => {
                const done = i >= result.length;
                const value = !done ? result[i++] : undefined;

                return {
                    value,
                    done,
                };
            },
        };
    }
}


// Пример использования:
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
