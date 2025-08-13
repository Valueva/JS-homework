'use strict'



// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців 
// (таблиця заповнюється заданим фіксованим повідомленням).





if (confirm('Почати тестування?')) {

	function getTable(row, column, message) {
		document.write('<table style="border:2px solid black;">')
		for (let i = 0; i < row; i++) {
			document.write('<tr>')
			for (let j = 0; j < column; j++) {

				document.write(`<td style="border:2px solid black;">${message} </td>`)
			}
			document.write('</tr>')
		}
		document.write('</table>')
	}


	let num1 = parseInt(prompt('введіть кількість рядків ', '5'))
	let num2 = parseInt(prompt('введіть кількість стовпців ', '5'))
	let num3 = prompt('введіть значення', '')



	getTable(num1, num2, num3)
}
