'use strict'





if (confirm('Почати тестування?')) {
	// Задача 4. Користувач задає місяць навчання учня 
	// (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та оцінку 
	// (перевіряти чи є числом, чи від 1 до 100). 
	// Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . 
	// Обробку усіх помилок зробити з використанням відповідних класів.


	class NumberIncorrect extends Error {
		constructor() {
			super()
			this.message = 'Повинно бути число'
			this.name = 'NumberIncorrect'
		}
	}

	class MimMonthError extends Error {
		constructor() {
			super()
			this.message = 'Номер місяця повинен бути не менше 1!'
			this.name = 'MimMonthError'
		}
	}

	class MaxMonthError extends Error {
		constructor() {
			super()
			this.message = 'Номер місяця повинен бути не більше 12!'
			this.name = 'MaxMonthError'
		}
	}

	class HolidaysMonthError extends Error {
		constructor() {
			super()
			this.message = 'Червень, липень, серпень не є навчальними!'
			this.name = 'HolidaysMonthError'
		}
	}
	class MinNumberIncorrect extends Error {
		constructor() {
			super()
			this.message = 'Не може бути менше 1'
			this.name = 'MinNumberIncorrect'
		}
	}
	class MaxNumberIncorrect extends Error {
		constructor() {
			super()
			this.message = 'Не може бути більше 100'
			this.name = 'MaxNumberIncorrect'
		}
	}




	function CorrectingAssessment() {
		const month = Number(document.querySelector('.page__input').value)
		const number = Number(document.querySelector('.page__input1').value)
		const result = document.querySelector('.page-result p')

		try {
			if (isNaN(month) || isNaN(number)) throw new NumberIncorrect()
			if (month < 1) throw new MimMonthError()
			if (month > 12) throw new MaxMonthError()
			if (month === 6 || month === 7 || month === 8) throw new HolidaysMonthError()
			if (number < 1) throw new MinNumberIncorrect()
			if (number > 100) throw new MaxNumberIncorrect()
			if (number < 60 && (month === 5 || month === 12)) result.innerText = 'оцінку не можна виправити'
			else if (number < 60) result.innerText = 'оцінку можна виправити'
			else result.innerText = 'оцінка задовільна'
		}
		catch (err) {
			if (err instanceof NumberIncorrect) {
				alert(err.message)
			}
			if (err instanceof MimMonthError) {
				alert(err.message)
			}
			if (err instanceof MaxMonthError) {
				alert(err.message)
			}
			if (err instanceof HolidaysMonthError) {
				alert(err.message)
			}
			if (err instanceof MinNumberIncorrect) {
				alert(err.message)
			}
			if (err instanceof MaxNumberIncorrect) {
				alert(err.message)
			}
		}
	}

	window.onload = function () {
		document.querySelector('button').onclick = CorrectingAssessment

	}

}
