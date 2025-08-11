'use strict'

// Задача. 15 разів вивести слово "Hello"

// for (let i = 1; i <= 15; i++) {
// 	document.write(`№ ${i}Hello <br>`)
// }

//  З клавіатури вводиться 5 пар цілих чисел. Якщо числа рівні, то вивести їх суму, інакше – добуток



// for (let i = 1; i <= 5; i++) {
// 	const num1 = parseInt(prompt('ввести число1', '1'))
// 	const num2 = parseInt(prompt('ввести число2', '1'))
// 	let result = num1 * num2
// 	let resultSum = num1 + num2
// 	if (num1 === num2)
// 		document.write(`№ ${i}) ${num1} + ${num2} = ${resultSum} <br>`)
// 	else
// 		document.write(`№ ${i}) ${num1} * ${num2} = ${result} <br>`)
// }

// Задача. Вивести суми сплаченого кредиту. Початковий внесок 5000грн, кінцевий 15000 грн, а щомісячний внесок 2000грн.


// for (let sum = 5000; sum <= 15000; sum += 2000) {
// 	document.write(` ${sum} <br>`)
// }


// Приклад*. «Тренажер множення». Розробити програму, яка випадковим чином (4 рази) генерує перше число в межах від 1 до 9,
//  друге число від 1 до 9 і перевірити чи знає користувач, чому дорівнює результат їх множення.
// Підрахувати кількість правильних відповідей.
// Тут (перед циклом ) пишемо те, що треба зробити 1 раз


// let correctAnswerNumber = 0,
// 	errorAnswerNumber = 0
// for (let i = 1; i <= 4; i++) {
// 	const num1 = Math.floor(1 + (Math.random() * 9))
// 	const num2 = Math.floor(1 + (Math.random() * 9))
// 	const userAnswer = parseInt(prompt(`${num1} * ${num2}`, ''))
// 	const correctAnswer = num1 * num2
// 	if (userAnswer === correctAnswer) {
// 		alert('ok')
// 		correctAnswerNumber++
// 	}

// 	else {
// 		alert('error')
// 		errorAnswerNumber++
// 	}
// }
// document.write(`Правильних : ${correctAnswerNumber} , неправильних : ${errorAnswerNumber}`)

//   Перевірити таблицю множення від 3 до 8  (друге число змінюєтсья завжди від 1 до 9)

// for (let num1 = 3; num1 <= 8; num1++) {
// 	for (let num2 = 1; num2 <= 9; num2++) {
// 		const userAnswer = parseInt(prompt(`${num1} * ${num2}`, ''))
// 		const correctAnswer = num1 * num2
// 		if (userAnswer === correctAnswer)
// 			alert('ok')
// 		else
// 			alert(`error correctAnswer = ${correctAnswer}`)
// 	}
// }

// Задача 7. Вивести на екран N абзаців (N вводиться користувачем) за зразком:

// let num = 0
// let paragraph = 0
// const n = parseInt(prompt('ввести к-сть абзаців'))
// for (let i = 1; i <= n; i++) {
// 	num++
// 	document.write(`<h1>Заголовок ${num}</h1>`)

// 	for (let p = 1; p <= n; p++) {
// 		if (p > i)
// 			break

// 		document.write(`<p>Розділ ${num}, параграф ${p} </p>`)
// 	}

// }