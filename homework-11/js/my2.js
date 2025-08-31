'use strict'

// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень;
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
// 5) максимальний прибуток за середу
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// 7) відсортувати кожен тиждень за зростанням
// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).




if (confirm('Почати тестування?')) {

	let profits = [
		[120, 200, 340, 150, 220, 180, 90],   // Магазин 1
		[210, 180, 250, 300, 190, 220, 130],  // Магазин 2
		[160, 230, 210, 170, 260, 200, 110],  // Магазин 3
		[350, 130, 220, 160, 280, 400, 450]   // Магазин 4
	]

	profits.forEach(row => document.write(`<div style="font-size:24px; margin-bottom:10px;"> ${row} </div>`))


	// 1) загальний прибуток кожного масиву за тиждень;

	let sumWeekProfits = profits.map((profit) => profit.reduce((prevSum, el) => prevSum + el))

	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 
		1. загальний прибуток кожного магазину за тиждень:<br>[${sumWeekProfits}]</div>`)

	// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);

	let sumDayProfits = [0, 0, 0, 0, 0, 0, 0]
	for (const profit of profits) {
		for (let i = 0; i < 7; i++) {
			sumDayProfits[i] += profit[i]
		}
	}
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 
		2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.):
		<br>[${sumDayProfits}]</div>`)

	// 3) загальний прибуток за робочі дні

	let sumWorkingDaysProfits = 0
	for (const row of profits) {
		for (let colIndex = 0; colIndex < 5; colIndex++)
			sumWorkingDaysProfits += row[colIndex]
	}
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 
		3) загальний прибуток за робочі дні:
		<br>[${sumWorkingDaysProfits}]</div>`)

	// 4) загальний прибуток за вихідні дні

	let sumWeekendsProfits = 0
	for (const row of profits) {
		for (let colIndex = 5; colIndex < 7; colIndex++)
			sumWeekendsProfits += row[colIndex]
	}
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 
		4) загальний прибуток за вихідні дні:
		<br>[${sumWeekendsProfits}]</div>`)

	// 5) максимальний прибуток за середу[2]

	let maxProfitWednesday = -Infinity
	for (const row of profits) {
		if (row[2] > maxProfitWednesday)
			maxProfitWednesday = row[2]
	}

	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 
		5) максимальний прибуток за середу:
		<br>[${maxProfitWednesday}]</div>`)

	// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200

	const profitsMore200 = profits.flat().filter((element) => element > 200)

	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 
		 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200:
		<br>[${profitsMore200}]</div>`)


	// 7) відсортувати кожен тиждень за зростанням


	for (const row of profits) {
		row.sort((a, b) => a - b)
	}

	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 
		7) відсортувати кожен тиждень за зростанням:
		</div>`)
	profits.forEach(row => document.write(`<div style="font-size:24px; margin-bottom:10px;"> ${row} </div>`))

	// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку),
	//  тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків




	profits.sort((row1, row2) => {
		const max1 = Math.max(...row1)
		const max2 = Math.max(...row2)
		return max2 - max1
	}
	)

	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 
		8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку),
	 тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків:
		</div>`)

	profits.forEach(row => document.write(`<div style="font-size:24px; margin-bottom:10px;"> ${row} </div>`))

	// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку 
	// (тобто при порівнянні двох рядків треба знайти суму кожного з рядків


	profits.sort((row1, row2) => {
		const sum1 = row1.reduce((prevSum, el) => prevSum + el)
		const sum2 = row2.reduce((prevSum, el) => prevSum + el)
		return sum2 - sum1
	}
	)

	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 
		9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку 
	(тобто при порівнянні двох рядків треба знайти суму кожного з рядків:
		</div>`)

	profits.forEach(row => document.write(`<div style="font-size:24px; margin-bottom:10px;"> ${row} </div>`))

}