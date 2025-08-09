'use strict'



// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). 
// Кількість випадкових чисел вводиться користувачем. Приклад:

if (confirm('Почати тестування?')) {
	let a = parseInt(prompt('веддіть кількість пунктів', ""))
	for (let i = 1; i <= a; i++) {
		const numRandom = Math.floor(Math.random() * 100) + 1
		document.write(`<li> ${numRandom} </li>`)
	}
}