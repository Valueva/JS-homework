'use strict'

// Задача -2. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.


// Вариант 1 

// let doubleNumber = 0
// let notDoubleNumber = 0
// for (let i = 0; i < 100; i++) {
// 	const num = Math.floor(1 + (Math.random() * 1000))
// 	document.write(`${num};  `)
// 	if (num % 2 === 0)
// 		doubleNumber++
// 	else
// 		notDoubleNumber++
// }
// document.write(`<br> парних чисел: ${doubleNumber}  непарних чисел: ${notDoubleNumber} `)

if (confirm('Почати тестування?')) {

	let evenNumber = 0
	// let notDoubleNumber = 0
	for (let i = 0; i < 100; i++) {
		const randNum = Math.floor(Math.random() * 1000) + 1
		document.write(`${randNum};  `)
		if (randNum % 2 === 0)
			evenNumber++
	}
	const oddNumber = 100 - evenNumber
	document.write(`<br> парних чисел: ${evenNumber}  непарних чисел: ${oddNumber} `)

}











