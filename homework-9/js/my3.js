'use strict'



// 3. Користувач вводить кількість елементів. 
// Створити масив, у якому перші 5 елементів заповнені 1-цями, 
// а інші до кінця масиву заповнені 7-ками.


if (confirm('Почати тестування?')) {

	const arrLength = parseInt(prompt('Введіть довжину массива', '15'))

	const arr = [new Array(arrLength).fill(1, 0, 5).fill(7, 5)]

	document.write(`<div style="font-size:24px; margin-bottom:10px;">Кількість елементів: ${arrLength} <br> [${arr}]</div>`)
}


