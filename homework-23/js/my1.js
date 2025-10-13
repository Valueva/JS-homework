'use strict'




if (confirm('Почати тестування?')) {

	// Задача 1. Дано клас PhoneNumber. 
	// Створити функцію перетворення до string, 
	// при якому на основі номера виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)

	class PhoneNumber {
		constructor(number) {
			this.number = number
		}
		[Symbol.toPrimitive]() {
			const mtc = ['050', '066', '095', '099']
			const kyivstar = ['067', '068', '096', '097', '098']
			const lifecell = ['063', '073', '093']
			const prefix = this.number.toString().slice(0, 3)
			let result
			switch (true) {
				case mtc.includes(prefix):
					result = 'MTC'
					break
				case kyivstar.includes(prefix):
					result = 'Kyivstar'
					break
				case lifecell.includes(prefix):
					result = 'Lifecell'
					break
				default:
					result = 'Невідомий оператор'
			}
			return `${this.number}-${result}`
		}

	}

	function print(tag, text) {
		const container = document.querySelector('.page__task')
		const p = document.createElement(tag)
		p.innerText = text
		container.append(p)
	}

	const phone = new PhoneNumber('0507777777')
	const phone1 = new PhoneNumber('0677777777')
	const phone2 = new PhoneNumber('0937777777')

	print('p', `${phone}`)
	print('p', `${phone1}`)
	print('p', `${phone2}`)





}