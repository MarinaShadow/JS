/**
 * Задача 2.
 *
 * Дан класс Developer.
 *
 * У класса два свойства:
 * - completedTasks — массив с выполненными задачами;
 * - completeTask — метод для пополнения массива с выполненными задачами новой выполненной задачей.
 *
 * При создании двух экземпляров класса Developer,
 * если выполнил задачу – почему-то эта-же задача
 * считается выполненной и вторым вторым разработчиком.
 *
 * Исправьте этот пример так, чтобы при выполнении задачи одним разработчиком
 * массив completedTasks второго разработчика никак не менялся.
 * Нужно, чтобы у каждого разработчика был свой независимый массив completedTasks.
 *
 *  Условия:
 * - Решить задачу в стиле прототипного наследования JavaScript.
 */

function Developer() {}

Developer.prototype.completedTasks = []; // эту строку я бы удалила
Developer.prototype.completeTask = function(task) {
	this.completedTasks.push(task);
};

function Dev1(){
	Developer.call(this);
}

Dev1.prototype = Object.create(Developer.prototype);
Dev1.prototype.completedTasks = [];

function Dev2(){
	Developer.call(this);
}

Dev2.prototype = Object.create(Developer.prototype);
Dev2.prototype.completedTasks = [];

const developer1 = new Dev1();
const developer2 = new Dev2();

developer1.completeTask('finish a feature');
developer1.completeTask('refactor code');
developer2.completeTask('fix bug');

console.log(developer1.completedTasks.length); // 2
console.log(developer2.completedTasks.length); // 1

exports.Developer = Developer;