'use strict'



// З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.

// let num
// let sum = 0
// do {
// 	num = parseInt(prompt('Введіть число', ''))
// 	if (num !== 0)
// 		sum += num
// }
// while (num !== 0)

// document.write(`${sum}`)

//  З клавіатури поступово вводяться символи поки не буде введено символ «а». Вивести рядок символів у зворотному порядку.

// let symbol
// let rowSymbol = ' '
// do {
// 	symbol = prompt('Введіть символ', '')
// 	if (symbol !== 'a')
// 		rowSymbol = symbol + rowSymbol
// }
// while (symbol !== 'a')
// document.write(`${rowSymbol}`)

// 3. З клавіатури вводиться початкове знчення суми. Поки сума є меншою за 100 додавати до неї числа, які вводяться з клавіатури.

// let sum = parseInt(prompt('Введіть число', '10'))
// while (sum < 100) {
// 	let number = parseInt(prompt(`сумма дорівнює ${sum} Введіть число`, '50'))
// 	sum += number
// }

// З клавіатури поступово вводяться числа. Знайти суму перших N парних чисел.

// let num = parseInt(prompt('Введіть кількість чисел', '10'))
// let sum = 0
// let evenNumber = 0
// for (let i = 1; i <= num; i++) {
// 	let number = parseInt(prompt('Введіть число', '10'))
// 	if (number % 2 === 0) {
// 		sum += number
// 		evenNumber++
// 	}
// 	if (evenNumber >= 3) break
// }
// document.write(`${sum}`)


// 4.1. З клавіатури вводяться два числа N i M (N<M). Вивести а екран числа
// N---M
// N+1 --- M-1
// N+2 --- M-2
// N+3 --- M-3 Виведення завершити коли число справа стане меншим за число зліва.

// let n = parseInt(prompt('введіть менеше число n=', ''))
// let m = parseInt(prompt('введіть більше число m=', ''))
// while (n < m) {
// 	document.write(`${n} - ${m} <br>`)
// 	n++
// 	m--
// }

// 5. На екрані виводиться меню:
// 1. Сказати «Привіт».
// 2. Сказати «Зачекай».
// 3. Сказати «До побачення».
// 4. Вихід.
// Шляхом вибору пунктів меню виводити відповідні повідомлення, поки не буде вибрано пункт номер 4.


// 0. Вивести на екран
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I

// let startCharCode = 'A'.charCodeAt(0)

// for (let k = 0; k < 5; k++) {
// 	let string = `<p>`
// 	let letter = startCharCode
// 	for (let i = 0; i < 5; i++) {

// 		string += String.fromCharCode(letter)
// 		letter++
// 	}
// 	string += `</p>`
// 	startCharCode++
// 	document.write(string);
// }



// const newLetterCode = ((letterCode - min + shift) % (max - min + 1)) + min

// const newLetter = String.fromCharCode(newLetterCode)
// document.write(`${letter}  => ${newLetter}`)


// 2. Відобразити трикутник за допомогою символів «о»
// о
// оо
// ооо
// оооо
// ооооо
// оооооо
// ооооооо


// for (let i = 0; i < 7; i++) {
// 	let string = `<p>`
// 	for (let j = 0; j <= i; j++) {
// 		string += `0`
// 	}

// 	string += `</p>`
// 	document.write(string)

// }

// 4. Побудувати ялинку

// for (let k = 0; k < 3; k++) {
// 	for (let i = 0; i < 5; i++) {
// 		let string = `<p>`
// 		for (let j = 0; j <= i; j++) {
// 			string += `0`
// 		}

// 		string += `</p>`
// 		document.write(string)
// 	}
// }

// 3. Відобразити трикутник за допомогою символів «о»
// оооооооооооо
// ооооооооооо
// оооооооооо
// ооооооооо
// оооооооо
// …
// оо
// о


// for (let i = 0; i < 7; i++) {
// 	let string = `<p>`
// 	for (let j = 0; j < 7 - i; j++) {
// 		string += `0`
// 	}

// 	string += `</p>`
// 	document.write(string)

// }

// 5. Інвестор вклав  тис. грн на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування).

// let investment = parseInt(prompt('ввести суму інвестиціі', ''))
// let percent
// for (let i = 0; i < 20; i++) {
// 	percent = investment / 100 * 20
// 	investment += percent
// }
// document.write(`${investment}`)

// ???????????  6. Інвестор вклав  тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку.
// Визначити за допомогою циклів суму, яку він одержить.

// const investment = parseInt(prompt('ввести суму інвестиціі', ''))
// let totalSum = investment
// let percent
// let tax
// for (let i = 0; i < 5; i++) {
// 	percent = totalSum / 100 * 20
// 	totalSum += percent
// 	tax = (totalSum - investment) / 100 * 5
// 	totalSum -= tax
// }


// document.write(`вклав ${investment}  <br> податок ${tax} <br> отримає ${totalSum}`)


// 8. Вивести на екран послідовність символів
// а о а о а о а о а о …
// Всього символів 82


// 9. Вивести на екран
// 1 1
// 2 1 2
// 3 1 2 3
// 4 1 2 3 4
// …
// i 1 2 3 ..i
// 23 1 2 3 .. 22 23

// let n = 1
// for (let i = 1; i <= 23; i++) {
// 	let string = `<p >№ ${i}-`

// 	for (let j = 0; j < i; j++) {

// 		string += n + ' '
// 		n++
// 		if (n > i) n = 1
// 	}

// 	string += `</p>`
// 	document.write(string)

// }


// 10. Вивести на екран
// 1 1
// 2 1234
// 3 123456789
// 4 1234…16
// 5 1 … 25
// 6 1…36

// let n = 1
// for (let i = 1; i <= 6; i++) {
// 	let string = `<p >№ ${i}.  `

// 	for (let j = 0; j < i ** 2; j++) {

// 		string += n + ' '
// 		n++
// 		if (n > i ** 2) n = 1
// 	}

// 	string += `</p>`
// 	document.write(string)

// }

// 24. Дано натуральні числа від 35 до 87.
// Надрукувати ті з них, які при діленні на 7 дають остачу 1, 2 або 5.

// const minNumber = 35
// const maxNumber = 87

// for (let i = minNumber; i <= maxNumber; i++) {
// 	if (i % 7 === 1 || i % 7 === 2 || i % 7 === 5)
// 		document.write(`${i} <br>`)
// }