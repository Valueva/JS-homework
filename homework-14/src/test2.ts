if (confirm(`Почати   тестування?`)) {

	// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

	let monthNumber: number = Number(prompt('Введіть кількість місяців', '26'))

	type Data = {
		day: number,
		month: number,
		year: number
	}
	let dataObj: Data = {
		day: 6,
		month: 2,
		year: 2023
	}

	document.write(`Початкові дані:<br>`)
	document.write(`День-${dataObj.day}<br>`)
	document.write(`Місяць-${dataObj.month}<br>`)
	document.write(`Рік-${dataObj.year}<br>`)

	/**
	 * 
	 * @param param0 -{ month, year } - беремо з об'єкту початкові значення місяця і року
	 * @param N - кількість місяців
	 * @returns - який буде рік
	 */

	function getYearInN({ month, year }: { month: number; year: number }, N: number): number {
		return (Math.floor((month + N) / 12)) + year
	}

	let res: number = getYearInN(dataObj, monthNumber)

	document.write(`Через ${monthNumber} місяців буде ${res} рік <br>`)





}