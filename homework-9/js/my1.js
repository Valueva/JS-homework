'use strict'

// 1. Користувач вводить кількість елементів. Створити масив, 
// що складається з вказаної кількості елементів заповнених нулями.

if (confirm('Почати тестування?')) {

	const arrLength = parseInt(prompt('Введіть довжину массива', '10'))
	const arr = [new Array(arrLength).fill(0)]

	document.write(`<div style="font-size:24px; margin-bottom:10px;">Кількість елементів: ${arrLength} <br> [${arr}]</div>`)
}