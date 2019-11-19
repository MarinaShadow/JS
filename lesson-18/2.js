/*
# Задача 2

Улучшить класс `DB` из предыдущей задачи.

- Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
- Генерировать ошибку, если query не валидный
- Поля `name` и `country` ищут 100% совпадение
- Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
- Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
*/

// Решение

class DB {
    constructor() {
        this.map = new Map();
        this.i = 0;
    }

    create(obj) {

        if (typeof obj !== 'object') {
            throw new Error('argument is not an obgect');
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
        })

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
            throw new Error('second argument is not an obgect');
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
    find(obj) {
        if (typeof obj !== 'object') {
            throw new Error('query is not an obgect');
        }
        else if (Object.keys(obj).length === 0) {
            throw new Error('query is empty');
        }
        else if (obj.name && typeof obj.name !== 'string') {
            throw new Error('name is not a type string');
        } else if (obj.age && typeof obj.age !== 'object') {
            throw new Error('argument is not an obgect');
        } else if (obj.age && (!obj.age.min && !obj.age.max)) {
            throw new Error('age must contain two parameters min and max or one of them');
        } else if (obj.country && typeof obj.country !== 'string') {
            throw new Error('country is not a type type string');
        } else if (obj.salary && typeof obj.salary !== 'object') {
            throw new Error('argument is not an obgect');
        } else if (obj.salary && (!obj.salary.min && !obj.salary.max)) {
            throw new Error('salary must contain two parameters min and max or one of them');
        }

        const all=[];
        this.map.forEach((value, key, ownMap) => {
            const arr = [];
            if (obj.name) {
                arr.push(obj.name === value.name);
                // console.log(arr);
            }
            if (obj.age) {
                if (obj.age.min && obj.age.max) {
                    arr.push(obj.age.min <= value.age && obj.age.max >= value.age);
                } else if (obj.age.min) {
                    arr.push(obj.age.min <= value.age);
                } else if (obj.age.max) {
                    arr.push(obj.age.max >= value.age);
                }
            }
            if (obj.country) {
                arr.push(obj.country === value.country);
            }
            if (obj.salary) {
                if (obj.salary.min && obj.salary.max) {
                    arr.push(obj.salary.min <= value.salary && obj.salary.max >= value.salary);
                } else if (obj.salary.min) {
                    arr.push(obj.salary.min <= value.salary);
                } else if (obj.salary.max) {
                    arr.push(obj.salary.max >= value.salary);
                }
            }
            // console.log(arr);
            arr.every(elem => elem === true) && all.push({...{id: key}, ...this.map.get(key)});
        });

        return all;
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
    salary: 500 // обязательное поле с типом number
};

db.create(person2);

const id = db.create(person);
// console.log(id);
// const customer = db.read(id);
// console.log(customer);
// const customers = db.readAll(); // массив пользователей
// console.log(customers);
// console.log(db.update(id, { age: 22 })); // id
// console.log(db.delete(id)); // true

// Проверка
const query = {
    country: "ua",
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};

const customers = db.find(query); // массив пользователей
console.log(customers);