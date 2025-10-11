'use strict'





if (confirm('Почати тестування?')) {
	// Задача 18. Користувач може змінювати колір фону, що вибирає користувач з використанням
	// <input type="color">.
	// Зберігати цей колір і відновлювати при наступному відкритті. 
	// Також зберігати і відображати кількість змін протягом одного сеансу.



	function loadUserColor() {
		const input = document.querySelector('.page-input')
		const color = input.value
		document.body.style.backgroundColor = color;
		localStorage.setItem('backgroundColor', color);
		let count = sessionStorage.getItem('colorChangeCount') ?? 0
		count++
		sessionStorage.setItem('colorChangeCount', count)
		document.querySelector('.page-res span').innerText = ` ${count}`
	}

	function initUserColor() {
		const savedColor = localStorage.getItem('backgroundColor')
		const input = document.querySelector('.page-input')
		if (savedColor) {
			document.body.style.backgroundColor = savedColor;
			input.value = savedColor;
		}

	}

	window.onload = function () {
		initUserColor()
		document.querySelector('.page-button').onclick = loadUserColor
	}
}
