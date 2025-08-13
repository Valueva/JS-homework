'use strict'

// Задача 1. Створити функцію, яка за номером місяця повертає його назву.

if (confirm('Почати тестування?')) {


	function getMonth(monthNumber) {
		let monthName
		switch (monthNumber) {
			case 1:
				monthName = 'January'
				break
			case 2:
				monthName = 'February'
				break
			case 3:
				monthName = 'March'
				break
			case 4:
				monthName = 'April'
				break
			case 5:
				monthName = 'May'
				break
			case 6:
				monthName = 'June'
				break
			case 7:
				monthName = 'July'
				break
			case 8:
				monthName = 'August'
				break
			case 9:
				monthName = 'September'
				break
			case 10:
				monthName = 'October'
				break
			case 11:
				monthName = 'November'
				break
			case 12:
				monthName = 'December'
				break
			default:
				throw new Error("Error");
		}

		return monthName
	}

	let monthNum = parseInt(prompt('Введіть номер місяця від 1 до 12'))
	document.write(`<h2> ${getMonth(monthNum)}</h2>`)

}
