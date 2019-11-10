/**
 * Задача 3.
 *
 * Улучшите класс Worker из предыдущей задачи.
 * Для свойства rate и days добавьте методы для установки значений.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 * - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства).
 */

// Решение

class Worker {
	#firstNamePr = null;
	#lastNamePr = null;
	#ratePr = null;
	#daysPr = null;

	constructor(firstName, lastName, rate, days) {
		this.#firstNamePr = firstName;
		this.#lastNamePr = lastName;
		this.#ratePr = rate;
		this.#daysPr = days;
	}

	getName() {
		return this.#firstNamePr + ' ' + this.#lastNamePr;
	}
	getRate() {
		return this.#ratePr;
	}
	setRate(rate) {
		this.#ratePr = rate;
	}

	getDays() {
		return this.#daysPr;
	}
	setDays(days) {
		this.#daysPr = days;
	}

	getSalary() {
		return this.#ratePr * this.#daysPr;
	}
}

const worker = new Worker('Walter', 'White', 10, 31);

console.log(worker.getName()); // Walter White
console.log(worker.getRate()); // 10
console.log(worker.getDays()); // 31
console.log(worker.getSalary()); // 10 * 31 = 310

worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary()); // 20 * 10 = 200

exports.Worker = Worker;