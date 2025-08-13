'use strict'


// Задача 7. Створити функцію, яка випадковим чином виводить на екран
//  одне із 4 зображень (шляхи до зображень передаються у функцію)





if (confirm('Почати тестування?')) {
	function displaysImg(img) {
		document.write(`<img src="${`./img/img${img}.webp`} " > `)
	}

	const randomNumber = (Math.floor(Math.random() * 4) + 1)
	const image = `./img/img${randomNumber}.webp`

	displaysImg(randomNumber)
}
