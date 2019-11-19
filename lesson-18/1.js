/*
# Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.

Метод `create`:
    - принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Метод `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
    - если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
Метод `readAll`:
    - возвращает массив пользователей
    - генерировать ошибку если в метод `readAll` передан параметр
Метод `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
    - генерирует ошибку если передан несуществующий `id`
    - генерирует ошибку если передан `id` с типом не строка
    - генерирует ошибку если второй параметр не валидный
Метод `delete`:
    - удаляет пользователя
    - Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
*/

// Решение

class DB {
    constructor() {
        this.map = new Map();
        this.i = 0;
    }

    create(obj) {

        if (typeof obj !== 'object') {
            throw new Error('argument is not an object');
        } else if (typeof obj.name !== 'string') {
            throw new Error('name is required field with type string');
        } else if (typeof obj.age !== 'number') {
            throw new Error('age is required field with type number');
        } else if (typeof obj.country !== 'string') {
            throw new Error('country is required field with type string');
        } else if (typeof obj.salary !== 'number') {
            throw new Error('salary is required field with type number');
        }

        // const id = Math.floor(Math.random() * 100) + '';
        const id = (this.i++) + '';

        this.map.set(id, obj);

        return id;
    }

    read(id) {

        if (typeof id != 'string' || arguments.length === 0) {
            throw new Error('method read must accept a string');
        }

        return this.map.has(id) ? {id, ...this.map.get(id)} : null;
    }

    readAll() {
        if (arguments.length !== 0) {
            throw new Error('method readAll should not accept any parameters');
        }

        const all=[];

        this.map.forEach((value, key, ownMap) => {
            all.push({...{id: key}, ...this.map.get(key)})
        });

        // Или так
        // const keys = Array.from(this.map.keys());
        // for (let i=0; i<keys.length; i++) {
        // 	all.push({...{id: keys[i]}, ...this.map.get(keys[i])});
        // }

        return all;
    }

    update(id, obj) {
        if (arguments.length !== 2) {
            throw new Error('method update must accept two parameters');
        } else if (typeof id != 'string') {
            throw new Error('id is not a string');
        } else if (!this.map.has(id)) {
            throw new Error('this id does not exist');
        } else if (typeof obj !== 'object') {
            throw new Error('second argument is not an object');
        }

        this.map.set(id, {...(this.map.get(id)), ...obj});

        return id;
    }

    delete(id) {
        if (typeof id != 'string') {
            throw new Error('id is not a string');
        } else if (!this.map.has(id)) {
            throw new Error('this id does not exist');
        }

        return this.map.delete(id);
    }
}

// Проверка
const db = new DB();

const person = {
    name: "Pitter", // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const person2 = {
    name: "Bob", // обязательное поле с типом string
    age: 50, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 700 // обязательное поле с типом number
};

db.create(person2);

const id = db.create(person);
console.log(id);
const customer = db.read(id);
console.log(customer);
const customers = db.readAll(); // массив пользователей
console.log(customers);
console.log(db.update(id, { age: 22 })); // id
console.log(db.delete(id)); // true