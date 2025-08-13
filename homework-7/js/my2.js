'use strict'

// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення. 


if (confirm('Почати тестування?')) {

	function getSum(a, b, c, d) {
		return a + b + c + d
	}

	const getProduct = (a, b, c, d) => a * b * c * d

	function getArithmeticMean(a, b, c, d) {
		const sum = getSum(a, b, c, d)
		return sum / 4
	}

	function getMin(a, b, c, d) {
		let min = a
		if (min > b) min = b
		if (min > c) min = c
		if (min > d) min = d

		return min
	}

	let num1 = parseInt(prompt('введіть перше число', '0'))
	let num2 = parseInt(prompt('введіть друге число', '0'))
	let num3 = parseInt(prompt('введіть третє число', '0'))
	let num4 = parseInt(prompt('введіть четверте число', '0'))

	document.write(`a=${num1}, b=${num2}, c=${num3}, d=${num4} <br>`)
	document.write(`сума чисел дорівнює: ${getSum(num1, num2, num3, num4)}<br>`)
	document.write(`добуток чисел дорівнює: ${getProduct(num1, num2, num3, num4)}<br>`)
	document.write(`середнє арифметичне чисел дорівнює: ${getArithmeticMean(num1, num2, num3, num4)}<br>`)
	document.write(`мінімальне значення чисел дорівнює: ${getMin(num1, num2, num3, num4)}<br>`)
}
















