'use strict'

// Задача 3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

const randomNumber = (Math.floor(Math.random() * 5) + 1)
let userNumber = parseInt(prompt("Спробуйте вгадати число від 1 до 5", ""))

document.write(`<h2>Задача 3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.</h2>`)


if (userNumber == randomNumber)
	document.write(`Чудово, ви вгадали з першої спроби, це дійсно число ${randomNumber}`)
else {
	userNumber = parseInt(prompt("Спробуй ще раз", ""))
	if (userNumber == randomNumber)
		document.write(`Чудово, ви вгадали з другої спроби, це дійсно число ${randomNumber}`)
	else
		document.write(`На жаль, ви не вгадали, це число ${randomNumber}`)
}
