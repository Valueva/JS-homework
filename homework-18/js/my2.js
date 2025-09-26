'use strict'




if (confirm('Почати тестування?')) {

	// Задача 4. Наперед задано у скрипті масив зі списком бажань. 
	// Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div 
	// (їх треба створити і додати на сторінку)


	const wishList = [
		'Вичити JS',
		'Вичити React',
		'Подорож до Карпат',
		'Створити свій перший проект',
		'Завести цуценя',
		'Купити новий ноутбук',
		'Виспатися',
		'Подорож на повітряній кулі',
		'Вільне володіння англійскою'
	]



	function getRandomWish(selector) {
		const myContainer = document.querySelector(selector)
		const copyWishList = [...wishList]
		for (let i = 0; i < 3; i++) {
			const random = Math.floor(Math.random() * copyWishList.length)
			const item = copyWishList.splice(random, 1)
			const myDiv = document.createElement('div')
			myDiv.innerText = item
			myContainer.after(myDiv)
		}
	}
	window.onload = function () {
		getRandomWish('.page-box')
	}

}