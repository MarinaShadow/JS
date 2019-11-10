/**
 * Задача 2.
 *
 * Улучшите класс Worker из предыдущей задачи.
 * Сделайте все свойства приватными, а для чтения каждого из них создайте соответствующие методы:
 *
 * - getName — возвращает конкатенацию приватных свойств firstName и lastName;
 * - getRate — возвращает значение приватного свойства rate
 * - getDays — возвращает значение приватного свойства days
 * - getSalary — возвращает зарплату
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
	getDays() {
		return this.#daysPr;
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

exports.Worker = Worker;