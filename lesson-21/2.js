/*
# Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.
*/

// Решение

function getCustomers(arr1, arr2) {

    return new Promise(function(resolve, reject) {

        const arrId2 = [];
        for (let j = 0; j < arr2.length; j++) {
            arrId2.push(arr2[j].id);
        }

        const concatArr = [];
        for (let i = 0; i < arr1.length; i++) {

            if (arrId2.indexOf(arr1[i].id) === -1 && arr1[i].verified) {
                const error = new Error(`We don't have information about country for this customer: ${arr1[i].name}`);
                reject(error);
            }

            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i].id === arr2[j].id && arr1[i].verified) {
                    let c = {...arr1[i], ...arr2[j]};
                    concatArr.push(c);
                }
            }
        }
        concatArr.length > 0 && resolve(concatArr);
    });
}


// Пример использования

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error));