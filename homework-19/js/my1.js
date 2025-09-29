'use strict'




if (confirm('Почати тестування?')) {

	// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. 
	// При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.



	function divClick(event) {
		const myClass = event.target
		if (myClass.tagName === 'DIV') {
			myClass.style.color = 'red'
			let currentDivElement = myClass.nextElementSibling
			while (currentDivElement?.getAttribute('class') === 'page__text') {
				currentDivElement.style.color = 'red'
				currentDivElement = currentDivElement.nextElementSibling
			}
		}

	}

	document.querySelector('.page').onclick = divClick
}