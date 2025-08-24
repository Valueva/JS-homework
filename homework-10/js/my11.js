'use strict'




if (confirm('Почати тестування?')) {

	// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

	// 	function getNames(arr) {
	// 		let sum = 0
	// 		for (let i = 0; i < arr.length; i++) {
	// 			if (arr[i] == 'Іван') {
	// 				sum += 1
	// 			}
	// 		}
	// 		return sum
	// 	}

	// 	const arrName = ['Іван', 'Юля', 'Аня', 'Іван']
	// 	document.write(`ім’я «Іван» зустрічається ${getNames(arrName)}`)


	// 	Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
	// •	починаються на букву «А»;
	// •	перша і остання літери співпадають;
	// •	складаються з більше ніш 5 символів;


	// const arr = ['BC6835OB', 'НЕ1539АВ', 'ВТ8252СМ', 'BC6835OO', 'AА7679ТA', 'AА6884ХС', 'A1234']

	// function getFirstLetter(arr) {
	// 	let sum = 0
	// 	for (let i = 0; i < arr.length; i++) {
	// 		let firstLetter = arr[i]

	// 		if (firstLetter[0] === 'A')
	// 			sum++
	// 	}

	// 	return sum
	// }

	// function getFirstLetterLastLetter(arr) {
	// 	let sum = 0
	// 	for (let i = 0; i < arr.length; i++) {
	// 		let letter = arr[i]

	// 		let first = letter[0]
	// 		let last = letter[letter.length - 1]
	// 		if (first === last)
	// 			sum++

	// 	}
	// 	return sum
	// }

	// function getNumberCharacters(arr) {
	// 	let sum = 0
	// 	for (let i = 0; i < arr.length; i++) {
	// 		let letter = arr[i]

	// 		if (letter.length > 5)
	// 			sum++
	// 	}
	// 	return sum
	// }


	// function printArr(arr) {
	// 	let listString = ''
	// 	for (let i = 0; i < arr.length; i++) {
	// 		listString += "<li>" + arr[i] + "</li>"
	// 	}
	// 	document.write(`<ul>${listString}</ul<br>`)
	// }


	// const firstLetter = getFirstLetter(arr)
	// const firstLetterLastLetter = getFirstLetterLastLetter(arr)
	// const numberCharacters = getNumberCharacters(arr)

	// printArr(arr)

	// document.write(`
	// <div>починаються на букву «А»${firstLetter}</div><br>
	// <div>перша і остання літери співпадають${firstLetterLastLetter}</div><br>
	// <div>складаються з більше ніш 5 символів;${numberCharacters}</div>`)


	// Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума 
	// (елементи заповнюються випадковим чином значеннями від -500 до 500). 
	// Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.


	// function inputArray(elementsNumber = 20) {
	// 	let min = -500
	// 	let max = 500
	// 	let arr = []
	// 	for (let i = 0; i < elementsNumber; i++) {
	// 		const element = parseInt(Math.random() * (max - min + 1) + min)
	// 		arr.push(element)
	// 	}
	// 	return arr
	// }

	// function totalWinnings(arr) {
	// 	let sum = 0
	// 	while (true) {
	// 		let elementNum = prompt(`Введіть номер елемента (1-${arr.length}):`)
	// 		if (elementNum === null) break
	// 		else
	// 			sum += arr[elementNum - 1]
	// 	}
	// 	return sum

	// }
	// const arrWinningAmount = inputArray()
	// const winnings = totalWinnings(arrWinningAmount)
	// document.write(`<div>${arrWinningAmount}</div><br>`)
	// document.write(`<div>${winnings}</div>`)


	// Задача 9. Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів.
	//  Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці 
	//  (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. 
	// 	Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.

	// 1.Функция которая создает и наполняет массив
	// 2. функция которая позволяет пользователю выбрать ячейки
	// 3-4 результат суммы игры \ функция вывода на экран выигрыша
	// 5 функция инициализации и запуска игры

	const numberOfCells = parseInt(prompt('Вводіть кількість клітинок', '10'))
	const numberOfSingleShips = parseInt(prompt('Вводіть кількість одиночних кораблів', '3'))


	//создаем массив без кораблей

	function arrayInput(numberOfCells) {
		let arr = []
		for (let i = 0; i < numberOfCells; i++) {
			arr.push(0)
		}
		return arr
	}

	// рандомная функция которая не повторяет числа
	function generateUniqueRandomNumbers(numberOfSingleShips, min = 1, max = numberOfCells) {
		if (numberOfSingleShips > (max - min + 1)) {
			throw new Error("Количество уникальных чисел не может превышать диапазон");
		}

		const numbers = [];
		for (let i = min; i <= max; i++) {
			numbers.push(i);
		}

		// Перемешивание Fisher-Yates
		for (let i = numbers.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
		}

		return numbers.slice(0, numberOfSingleShips);
	}



	//расставляем кораболи

	function entryOfShips(arr, numberOfSingleShips, numberOfCells) {

		for (let i = 1; i <= numberOfSingleShips; i++) {
			let random = generateUniqueRandomNumbers(numberOfSingleShips, 1, numberOfCells)
			for (let k = 0; k < arr.length; k++)
				if (k === random) {
					arr[k] = 1
				}

		}
		return arr
	}

	console.log(entryOfShips(arrayInput(numberOfCells), numberOfSingleShips, numberOfCells))


}