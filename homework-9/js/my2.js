'use strict'

// 2. Користувач вводить кількість елементів. 
// Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.



if (confirm('Почати тестування?')) {

	const arrLength = parseInt(prompt('Введіть довжину массива', '10'))
	const arrLengthHalf = arrLength / 2
	const arr = [new Array(arrLength).fill(1, 0, arrLengthHalf).fill(7, arrLengthHalf)]

	document.write(`<div style="font-size:24px; margin-bottom:10px;">Кількість елементів: ${arrLength} <br> [${arr}]</div>`)
}
















