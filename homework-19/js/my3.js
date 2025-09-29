'use strict'




if (confirm('Почати тестування?')) {

	// Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами. 
	// Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка 
	// (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням 
	// відповідно доданого для цього атрибута).

	function getRandomNumber(minValue, maxValue) {
		return minValue + Math.floor(Math.random() * (maxValue - minValue) + 1)
	}

	const myDiv = document.querySelector('.page-box')
	for (let y = 0; y < 3; y++) {
		const table = document.createElement('table')
		table.classList.add('page-table')
		table.dataset.clicks = 0
		table.innerHTML = `<thead><tr><td id = "title" colspan = "3">Таблиця${y + 1} <span>клік-0</span></td></tr></thead>`
		for (let i = 0; i < 3; i++) {
			const tr = document.createElement('tr')
			for (let j = 0; j < 3; j++) {
				const td = document.createElement('td')
				td.innerText = getRandomNumber(10, 90)
				tr.append(td)
			}
			table.append(tr)
		}
		myDiv.append(table)
	}


	function onTdClick(event) {
		const el = event.target
		if (el.tagName === "TD") {
			const table = el.closest('table')
			table.style.borderColor = 'red'
			table.dataset.clicks = Number(table.dataset.clicks) + 1
			table.querySelector('span').innerText = `клік-${table.dataset.clicks}`
		}
	}



	window.onload = function () {
		document.querySelector('.page-box').onclick = onTdClick
	}
}


