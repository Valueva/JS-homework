'use strict'




if (confirm('Почати тестування?')) {

	// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

	function* rnd(count, min, max) {

		for (let i = 0; i < count; i++) {
			const random = Math.floor(Math.random() * (max - min + 1)) + min
			if (random % 2 === 0) {
				yield random
			} else yield random + 1
		}

	}

	const container = document.querySelector('.page-container')

	for (const el of rnd(20, 0, 200)) {
		const p = document.createElement('p')
		p.innerText = `${el}`
		container.append(p)

	}

}


