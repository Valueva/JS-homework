'use strict'

// Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів.
//  Користувач стріляє вказуючи координати. 
// Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.



if (confirm('Почати тестування?')) {


	const rows = 6; // Кількість рядків
	const cols = 6; // Кількість стовбців

	// Створюємо двовимірний масив, заповнений нулями
	let seaBattle = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

	// розташовуємо випадковим чином кораблі(число1)

	let ship = 5

	while (ship > 0) {
		const randomNumber = Math.floor(Math.random() * 5)
		const randomNumber2 = Math.floor(Math.random() * 5)
		if (seaBattle[randomNumber][randomNumber2] === 0) {
			seaBattle[randomNumber][randomNumber2] = 1
			ship--
		}
	}

	// умови гри

	let numberShells = 10
	let numberShip = 5
	let shipsSunk = 0
	while (numberShells > 0 && numberShip > 0) {
		const coordinateX = prompt(`У Вас ${numberShells} снарядів \n Введіть координати коробля по осі х від 1 до 6`, '1')
		const coordinateY = prompt('Введіть координати коробля по осі y від 1 до 6', '1')
		if (coordinateX > 6 || coordinateX < 1 || coordinateY > 6 || coordinateY < 1) {
			alert('Постріл за межі поля')
		} else if (seaBattle[coordinateX - 1][coordinateY - 1] === 1) {
			seaBattle[coordinateX - 1][coordinateY - 1] = 'x'
			numberShip--
			shipsSunk++
			alert(`Ви влучили, корабль потонув! Залишилось ${numberShip} кораблів`)
		} else if (seaBattle[coordinateX - 1][coordinateY - 1] === 0) {
			seaBattle[coordinateX - 1][coordinateY - 1] = '-'
			numberShells--
			alert('Ви не влучили')
		} else if (seaBattle[coordinateX - 1][coordinateY - 1] === 'x' || seaBattle[coordinateX - 1][coordinateY - 1] === '-') {
			alert('Будьте уважнішими, ви вже сюди стріляли')
		}

	}

	if (numberShip === 0)
		alert('Вітаю, ви потопили всі кораблі')
	else
		alert(`Снаряди закінчилися, нажаль ви програли. Потоплених кораблів ${shipsSunk}`)



	document.write(`<div style="font-size:24px; margin-bottom:10px;"> "х" - влучив </div>
		<div style="font-size:24px; margin-bottom:10px;"> "-" - не потрапив у ціль </div>
		<div style="font-size:24px; margin-bottom:10px;"> "1" - вцілілий корабель </div>`)
	seaBattle.forEach(row => document.write(`<div style="font-size:24px; margin-bottom:10px;"> ${row} </div>`))


}
