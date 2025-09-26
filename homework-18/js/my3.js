'use strict'




if (confirm('Почати тестування?')) {

	// Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table». 
	// В результаті формується таблиця з input, куди користувач вводить оцінки. 
	// Після цього натискає на кнопку “get sum” і знаходить середнє значення.

	function getTable() {
		const userNumber = parseFloat(document.querySelector('.info__input').value)
		const table = document.createElement('table')
		table.classList.add('info__table')

		for (let i = 0; i < userNumber; i++) {
			const tr = document.createElement('tr')
			tr.innerHTML = '<input class="info__input info__input--table" type="number" value>'
			table.append(tr)
		}

		const myButton = document.querySelector('.info__button--table')
		myButton.after(table)
	}

	function getAverageValue() {
		const userNumber = document.querySelectorAll('.info__input--table')
		let sum = 0
		for (const inpElement of userNumber) {
			sum += parseFloat(inpElement.value)
		}
		const averageValue = sum / userNumber.length
		document.querySelector('.info__item').innerText = `Середній бал = ${averageValue}`
	}




	window.onload = function () {
		document.querySelector('.info__button--table').onclick = getTable
		document.querySelector('.info__button--sum').onclick = getAverageValue
	}
}