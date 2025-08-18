'use strict'

// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься 
// (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка))

if (confirm('Почати тестування?')) {

	// Знайходимо середній бал

	function getAverageScores(arr) {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum / arr.length
	}



	// Знайходимо мінімальне число

	function getMinNumber(arr) {
		let min = arr[0]
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i]
			}
		}
		return min
	}

	//з’ясуваємо до якої категорії він відноситься 

	function getCategories(min) {
		let category
		switch (min) {
			case 2:
				category = 'двійочник'
				break
			case 3:
				category = 'трійочник'
				break
			case 4:
				category = 'хорошист'
				break
			default:
				category = 'відмінник'
				break
		}
		return category
	}




	let arrGrades = [4, 3, 5, 4, 4, 3, 4]
	const averageRating = getAverageScores(arrGrades)
	const category = getCategories(getMinNumber(arrGrades))

	document.write(`<div> Оцінки: ${arrGrades} </div> <br>
	<div> Середній бал: ${averageRating.toFixed(2)} </div><br>
	<div> Категорія: ${category} </div>`)









}