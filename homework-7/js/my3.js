'use strict'



// Задача 5. Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.





if (confirm('Почати тестування?')) {

	function getCmToInches(cm) {
		return cm / 2.54
	}


	function getKgToPounds(kg) {
		return kg * 2.20462
	}

	function getKmToMiles(km) {
		return km / 1.609
	}

	let num1 = parseInt(prompt('введіть сантиметри', '100'))
	let num2 = parseInt(prompt('введіть кілограми', '100'))
	let num3 = parseInt(prompt('введіть кілометри', '100'))


	document.write(`сантиметри=${num1}, кілограми=${num2}, кілометри=${num3} <br>`)
	document.write(`${num1} сантиметрів  = ${getCmToInches(num1)} дюймів <br>`)
	document.write(`${num2} кілограмів  = ${getKgToPounds(num2)} фунтів <br>`)
	document.write(`${num3} кілометрів  = ${getKmToMiles(num3)} миль <br>`)
}
