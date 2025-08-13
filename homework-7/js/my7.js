'use strict'


// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: 
// кількість парних, кількість додатних, кількість більших за 100.

if (confirm('Почати тестування?')) {


	function getResult(a, b, c) {
		let even = 0
		let positiveNumber = 0
		let moreHundred = 0
		for (let i = 0; i > 3; i++) {
			if (a > 100)
				moreHundred++
			if (b > 100)
				moreHundred++
			if (c > 100)
				moreHundred++
			if (a % 2 === 0)
				even++
			if (b % 2 === 0)
				even++
			if (b % 2 === 0)
				even++
			if (a > 0)
				positiveNumber++
			if (b > 0)
				positiveNumber++
			if (c > 0)
				positiveNumber++
		}

		return even, positiveNumber, moreHundred
	}

	// ПЕРЕДЕЛАТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

}