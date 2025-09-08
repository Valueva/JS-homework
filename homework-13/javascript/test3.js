"use strict";
if (confirm(`Почати   тестування?`)) {

	// Задача 7. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад 
	// з додавання двох цифр і робиться перевірка.

	setInterval(() => {
		let num1 = Math.floor(Math.random() * (50 + 1))
		let num2 = Math.floor(Math.random() * (50 + 1))
		let sum = num1 + num2
		let userAnser = prompt(`${num1}+${num2}=?`, '0')
		const userNum = Number(userAnser)
		if (userNum === sum)
			alert('Вірно,молодець')
		else
			alert(`Помилка, вірна відповідь${sum}`)
	}, 10000)

}
