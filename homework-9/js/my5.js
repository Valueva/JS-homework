'use strict'


// 5.Дано масив елементів. Знайти добуток додатних елементів
//використати цикл for..of




if (confirm('Почати тестування?')) {

	const arr = [20, 45, -67, 12, 7, -38, 10, -54, 5, -45, 32]
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> Масив [${arr}]</div>`)
	let product = 1
	for (const element of arr) {
		if (element > 0) {
			product *= element
		}
	}
	document.write(`<div style="font-size:24px; margin-bottom:10px;">Добуток додатних елементів:${product}</div>`)

}

