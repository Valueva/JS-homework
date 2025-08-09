'use strict'

// Задача 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком






if (confirm('Почати тестування?')) {

	let num = 0
	for (let tab = 0; tab < 3; tab++) {
		document.write('<table style="border:2px solid black;">')
		for (let row = 0; row < 3; row++) {
			document.write('<tr>')
			for (let column = 0; column < 3; column++) {
				num++
				document.write(`<td style="border:2px solid black;">  ${num} </td>`)
			}
			document.write('</tr>')
		}
		document.write('</table>')
	}

}