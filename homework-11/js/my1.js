'use strict'

// Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
// 1.номери рядків від 0 до половини, стовпці від 0 до половини
// 2.номери рядків від 0 до половини, стовпці від половини до кінця
// 3.номери рядків (від половини до кінця, стовпці від 0 до половини
// 4.номери рядків від половини до кінця , стовпці від половини до кінця
// 5. Суму парних рядків
// 6. Суму непарних стовпців
// 7. У парних рядках – непарні стовпці, у непарних – парні.





if (confirm('Почати тестування?')) {


	// генеруємо масив

	// генеруємо випадкові числа

	function getRandomNumber(minValue, maxValue) {
		return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	}

	// генеруємо рядки масиву

	function getRandomArr(arrLength) {
		const arr = []
		for (let i = 0; i < arrLength; i++) {
			const randomNumber = getRandomNumber(1, 100)
			arr.push(randomNumber)
		}
		return arr
	}

	// генеруємо сам масив

	function getRandomTable(rowsLength, columnsLength) {
		const array = []
		for (let i = 0; i < rowsLength; i++) {
			const randomRow = getRandomArr(columnsLength)
			array.push(randomRow)
		}
		return array
	}

	const rowNumber = parseInt(prompt('Введіть кількість рядків масиву', '6'))
	const columnNumber = parseInt(prompt('Введіть кількість стовпців масиву', '8'))

	const arr = getRandomTable(rowNumber, columnNumber)

	arr.forEach(row => document.write(`<div style="font-size:24px; margin-bottom:10px;"> ${row} </div>`))


	// загальна функція

	function sumArr(array, startRow, endRow, startColumn, endColumn) {
		let sum = 0
		for (let rowIndex = startRow; rowIndex < endRow; rowIndex++) {
			for (let colIndex = startColumn; colIndex < endColumn; colIndex++) {
				sum += array[rowIndex][colIndex]
			}
		}
		return sum
	}

	const halfRow = Math.floor(arr.length / 2)
	const halfCol = Math.floor(arr[0].length / 2)

	// 1.номери рядків від 0 до половини, стовпці від 0 до половини

	const sum1 = sumArr(arr, 0, halfRow, 0, halfCol)

	document.write(`<div style="font-size:24px; margin-bottom:10px;">
		1. Сума елементів:номери рядків від 0 до половини, стовпці від 0 до половини: ${sum1} </div>`)


	// 2.номери рядків від 0 до половини, стовпці від половини до кінця

	const sum2 = sumArr(arr, 0, halfRow, halfCol, arr[0].length)

	document.write(`<div style="font-size:24px; margin-bottom:10px;">
		2. Сума елементів:номери рядків від 0 до половини, стовпці від половини до кінця: ${sum2} </div>`)

	// 3.номери рядків (від половини до кінця, стовпці від 0 до половини

	const sum3 = sumArr(arr, halfRow, arr.length, 0, halfCol)

	document.write(`<div style="font-size:24px; margin-bottom:10px;">
		3. Сума елементів:номери рядків від половини до кінця, стовпці від 0 до половини: ${sum3} </div>`)

	// 4.номери рядків від половини до кінця , стовпці від половини до кінця

	const sum4 = sumArr(arr, halfRow, arr.length, halfCol, arr[0].length)

	document.write(`<div style="font-size:24px; margin-bottom:10px;">
		4. Сума елементів:номери рядків від половини до кінця , стовпці від половини до кінця: ${sum4} </div>`)

	// 5. Суму парних рядків
	let sum5 = 0
	for (let rowIndex = 0; rowIndex < arr.length; rowIndex += 2) {
		for (let colIndex = 0; colIndex < arr[rowIndex].length; colIndex++) {
			sum5 += arr[rowIndex][colIndex]
		}
	}

	document.write(`<div style="font-size:24px; margin-bottom:10px;">
		5. Сума парних рядків: ${sum5} </div>`)

	// 6. Суму непарних стовпців

	let sum6 = 0
	for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
		for (let colIndex = 1; colIndex < arr[rowIndex].length; colIndex += 2) {
			sum6 += arr[rowIndex][colIndex]
		}
	}

	document.write(`<div style="font-size:24px; margin-bottom:10px;">
		6. Сума непарних стовпців: ${sum6} </div>`)

	// 7. У парних рядках – непарні стовпці, у непарних – парні.

	let sum7 = 0
	for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
		for (let colIndex = 0; colIndex < arr[rowIndex].length; colIndex++) {
			if ((rowIndex % 2 === 0 && colIndex % 2 !== 0) || ((rowIndex % 2 !== 0 && colIndex % 2 === 0)))
				sum7 += arr[rowIndex][colIndex]
		}
	}

	document.write(`<div style="font-size:24px; margin-bottom:10px;">
		7. У парних рядках – непарні стовпці, у непарних – парні.: ${sum7} </div>`)

}