'use strict'

// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
//       1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
//       2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
//       3)Сформувати список з тих цін, які більші за попереднє значення
//       4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
//       5)Підрахувати кількість змін цін
//       6)Визначити, чи є ціна, що менше 1000
//       7)Визначати, чи усі ціни більше за 1000
//       8)Підрахувати кількість цін, що більше за 1000
//       9)Підрахувати суму цін, що більше за 1000
//       10)Знайти першу ціну, що більше за 1000
//       11)Знайти індекс першої ціни, що більше за 1000
//       12)Знайти останню ціну, що більше за 1000
//       13)Знайти індекс останньої ціни, що більше за 1000



if (confirm('Почати тестування?')) {

	// Генеруємо масив цін

	const numberPrice = parseInt(prompt('Введіть кількість цін', '20'))
	function inputArray(number) {
		let arr = []
		for (let i = 0; i < number; i++) {
			let element = Math.floor((Math.random() * 10000) + 1)
			arr.push(element)

		}
		return arr
	}

	const arrPrices = inputArray(numberPrice)
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> Масив цін на цінні папери:<br>[${arrPrices}]</div>`)


	//   1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.


	const pricesMore1000 = arrPrices.filter((element) => element > 1000)
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.:<br>
		[${pricesMore1000}]</div>`)


	//   2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.


	const arrIndexMore1000 = []
	arrPrices.forEach((element, index) => {
		if (element > 1000)
			arrIndexMore1000.push(index)
	})

	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.:<br>
	[${arrIndexMore1000}]</div>`)


	//    3)Сформувати список з тих цін, які більші за попереднє значення


	const greaterThanPrevious = arrPrices.filter((element, index, baseArrRef) => index > 0 && element > baseArrRef[index - 1])
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 3)Сформувати список з тих цін, які більші за попереднє значення <br>
		[${greaterThanPrevious}]</div>`)


	//    4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального


	const maxPrice = Math.max(...arrPrices)
	const arrPricesInPercentage = arrPrices.map((element) => element = element / maxPrice * 100)
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального:<br>
[${arrPricesInPercentage.map((element) => element.toFixed())}]</div>`)


	//    5)Підрахувати кількість змін цін


	const numberOfPriceChanges = arrPrices.reduce((prevChanges, element, index, baseArrRef) =>
		(index > 0 && element !== baseArrRef[index - 1] ? prevChanges + 1 : prevChanges), 0)
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 5)Підрахувати кількість змін цін:
	 ${numberOfPriceChanges}</div>`)


	//    6)Визначити, чи є ціна, що менше 1000


	if (arrPrices.some((element) => element < 1000))
		document.write(`<div style="font-size:24px; margin-bottom:10px;"> 6)Визначити, чи є ціна, що менше 1000:<br>
	 Так масив має ціни < 1000 </div>`)
	else
		document.write(`<div style="font-size:24px; margin-bottom:10px;"> 6)Визначити, чи є ціна, що менше 1000: <br>
	Ні масив не має цін < 1000</div>`)


	//    7)Визначати, чи усі ціни більше за 1000


	if (arrPrices.every((element) => element > 1000))
		document.write(`<div style="font-size:24px; margin-bottom:10px;"> 7)Визначати, чи усі ціни більше за 1000: <br> 
	Так усі ціни > за 1000</div>`)
	else
		document.write(`<div style="font-size:24px; margin-bottom:10px;"> 7)Визначати, чи усі ціни більше за 1000:<br>
	 Ні не усі ціни > за 1000</div>`)


	//    8)Підрахувати кількість цін, що більше за 1000


	const numberOfPricesGreater1000 = arrPrices.reduce((prevNum, num) =>
		(num > 1000 ? prevNum + 1 : prevNum), 0)
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 8)Підрахувати кількість цін, що більше за 1000:
	 ${numberOfPricesGreater1000}</div>`)


	//    9)Підрахувати суму цін, що більше за 1000


	const sumOfPricesGreater1000 = arrPrices.reduce((prevSum, el) =>
		(el > 1000 ? prevSum + el : prevSum), 0)
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 9)Підрахувати суму цін, що більше за 1000:
	 ${sumOfPricesGreater1000}</div>`)


	//    10)Знайти першу ціну, що більше за 1000


	const firstPriceGreater1000 = arrPrices.find((element) => element > 1000)
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 10)Знайти першу ціну, що більше за 1000:
	 ${firstPriceGreater1000}</div>`)


	//    11)Знайти індекс першої ціни, що більше за 1000


	const firstIndexGreater1000 = arrPrices.findIndex((element) => element > 1000)
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 11)Знайти індекс першої ціни, що більше за 1000:
	 ${firstIndexGreater1000}</div>`)


	//    12)Знайти останню ціну, що більше за 1000


	const lastPriceGreater1000 = arrPrices.findLast((element) => element > 1000)
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 12)Знайти останню ціну, що більше за 1000:
	 ${lastPriceGreater1000}</div>`)


	//    13)Знайти індекс останньої ціни, що більше за 1000


	const lasttIndexGreater1000 = arrPrices.findLastIndex((element) => element > 1000)
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> 13)Знайти індекс останньої ціни, що більше за 1000:
	 ${lasttIndexGreater1000}</div>`)


}