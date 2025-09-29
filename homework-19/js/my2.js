'use strict'





if (confirm('Почати тестування?')) {
	// Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами 
	// (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). 
	// При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

	function getRandomNumber(minValue, maxValue) {
		return minValue + Math.floor(Math.random() * (maxValue - minValue) + 1)
	}

	const myDiv = document.querySelector('.page-box')
	for (let i = 0; i < 5; i++) {
		const list = document.createElement('ol')
		const randomLi = getRandomNumber(1, 10)
		for (let j = 0; j < randomLi; j++) {
			const listLi = document.createElement('li')
			listLi.innerText = getRandomNumber(1, 100)
			list.append(listLi)
		}
		myDiv.append(list)
	}

	function onButtonClick(e) {
		const btn = e.target
		if (btn) {
			for (let i = 0; i < myDiv.children.length; i++) {
				if (myDiv.children[i].children.length % 2 === 0) {
					myDiv.children[i].style.backgroundColor = 'green'
				} else {
					myDiv.children[i].style.backgroundColor = 'red'
				}
			}
		}
	}

	document.querySelector('.page-button').onclick = onButtonClick

}


