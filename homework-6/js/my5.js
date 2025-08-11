'use strict'

// 14. Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір,
//  поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести). 



if (confirm('Почати тестування?')) {

	const sum = parseInt(prompt(`Введіть вартість товару`, '1000'))
	let userMoney = 0
	do {
		const money = parseInt(prompt(`Введіть кошти. Залишок до сплати ${sum - userMoney}`, ''))
		userMoney += money
	} while (userMoney < sum)
	if (userMoney === sum)

		document.write('Вітаємо з покупкою.')
	else
		document.write(`Вітаємо з покупкою, ваша решта ${userMoney - sum}`)
}