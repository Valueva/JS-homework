'use strict'

// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.



if (confirm('Почати тестування?')) {

	function getNumbersDaysOfVisitorsLessThan20(arr) {
		let arrNumDays = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < 20) {
				arrNumDays.push(i + 1)
			}
		}
		return arrNumDays
	}

	function getTotalNumberOnWeekdays(arr) {
		let sum = 0
		for (let i = 0; i < 5; i++) {
			sum += arr[i]
		}
		return sum
	}

	function getTotalNumberOnWeekends(arr) {
		let sum = 0
		for (let i = 5; i < 7; i++) {
			sum += arr[i]
		}
		return sum
	}

	function getNumbersDaysOfVisitorsMin(arr) {
		let numMin = Infinity
		let arrDaysOfVisitorsMin = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < numMin) {
				numMin = arr[i]
				arrDaysOfVisitorsMin = [i + 1]
			}
			else if (arr[i] === numMin) {
				arrDaysOfVisitorsMin.push(i + 1)
			}
		}
		return arrDaysOfVisitorsMin
	}

	function getNumbersDaysOfVisitorsMax(arr) {
		let numMax = -Infinity
		let arrDaysOfVisitorsMax = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > numMax) {
				numMax = arr[i]
				arrDaysOfVisitorsMax = [i + 1]
			}
			else if (arr[i] === numMax) {
				arrDaysOfVisitorsMax.push(i + 1)
			}
		}
		return arrDaysOfVisitorsMax
	}


	let arrNumberOfStoreVisitors = [11, 67, 17, 11, 19, 340, 197]




	document.write(`<div>${arrNumberOfStoreVisitors}</div> <br>
		<div> номери днів, протягом яких кількість відвідувачів була меншою за 20:
		 ${getNumbersDaysOfVisitorsLessThan20(arrNumberOfStoreVisitors)} </div> <br>
	<div> номери днів, коли кількість відвідувачів була мінімальною: ${getNumbersDaysOfVisitorsMin(arrNumberOfStoreVisitors)} </div><br>
	<div>  номери днів, коли кількість відвідувачів була максимальною: ${getNumbersDaysOfVisitorsMax(arrNumberOfStoreVisitors)} </div><br>
	<div>  загальна кількість клієнтів у робочі дні: ${getTotalNumberOnWeekdays(arrNumberOfStoreVisitors)} </div><br>
	<div>  загальна кількість клієнтів у вихідні дні: ${getTotalNumberOnWeekends(arrNumberOfStoreVisitors)} </div>`)
}
















