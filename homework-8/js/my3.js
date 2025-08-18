'use strict'



// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.


if (confirm('Почати тестування?')) {

	function getScoreTwo(arr) {
		let sumTwo = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 2)
				sumTwo++
		}
		return sumTwo
	}
	function getGoodGrades(arr) {
		let sumNumber = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] >= 4)
				sumNumber++
		}
		return sumNumber
	}

	function getAverageValue(arr) {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum / arr.length
	}

	function getNumberOfGradesBelowAverage(arr) {
		let sumNumber = 0
		const average = getAverageValue(arr)
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < average)
				sumNumber++
		}
		return sumNumber
	}

	let arrScore = [3, 4, 5, 5, 2, 2, 3, 3, 5, 4]



	document.write(`<div>${arrScore}</div> <br>
		<div> кількість двійок: ${getScoreTwo(arrScore)} </div> <br>
	<div> кількість хороших оцінок (добре, відмінно): ${getGoodGrades(arrScore)} </div><br>
	<div> кількість оцінок, які нижче середнього: ${getNumberOfGradesBelowAverage(arrScore)} </div>`)
}

