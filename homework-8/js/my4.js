'use strict'



// Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).



if (confirm('Почати тестування?')) {

	// за весь рік;

	function getTotalMoneyForYear(arr) {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum
	}
	// у першій половині року;

	function getTotalMoneyForFirstHalfYear(arr) {
		let sum = 0
		for (let i = 0; i <= 5; i++) {
			sum += arr[i]
		}
		return sum
	}

	// у другій половині року;

	function getTotalMoneyForTwoHalfYear(arr) {
		let sum = 0
		for (let i = 6; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum
	}

	// за літо;

	function getTotalMoneyForSummer(arr) {
		let sum = 0
		for (let i = 5; i <= 7; i++) {
			sum += arr[i]
		}
		return sum
	}

	// за ІІ квартал;

	function getTotalMoneyForTwoQuarter(arr) {
		let sum = 0
		for (let i = 3; i <= 5; i++) {
			sum += arr[i]
		}
		return sum
	}

	// за парні місяці (з парними номерами);

	function getTotalMoneyForEvenMonths(arr) {
		let sum = 0
		for (let i = 1; i <= arr.length; i += 2) {
			sum += arr[i]
		}
		return sum
	}


	// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

	function getTotalMoneyForBeginningOfSeason(arr) {
		let sum = 0
		for (let i = 2; i <= arr.length; i += 3) {
			sum += arr[i]
		}
		return sum
	}


	const paymentsDuringYear = [2000, 1003, 2345, 546, 7654, 903, 100, 200, 550, 1000, 234, 567]

	document.write(`<div>${paymentsDuringYear}</div> <br>
		<div> Cумарнa кількість грошей за весь рік: ${getTotalMoneyForYear(paymentsDuringYear)} </div> <br>
	<div>Cумарнa кількість грошей у першій половині року: ${getTotalMoneyForFirstHalfYear(paymentsDuringYear)} </div><br>
	<div> Cумарнa кількість грошей у другій половині року: ${getTotalMoneyForTwoHalfYear(paymentsDuringYear)} </div><br>
	<div> Cумарнa кількість грошей за літо: ${getTotalMoneyForSummer(paymentsDuringYear)} </div><br>
	<div> Cумарнa кількість грошей за ІІ квартал: ${getTotalMoneyForTwoQuarter(paymentsDuringYear)} </div><br>
	<div> Cумарнa кількість грошей за парні місяці (з парними номерами): ${getTotalMoneyForEvenMonths(paymentsDuringYear)} </div><br>
	<div> Cумарнa кількість грошей за за місяці, які є початковими у сезоні (весна, літо, осінь, зима):
	 ${getTotalMoneyForBeginningOfSeason(paymentsDuringYear)} </div>`)




}


