'use strict'



// 4.Дано масив елементів. Вивести на екран елементи, що більші за 100
//використати цикл for..of




if (confirm('Почати тестування?')) {

	const arr = [20, 45, 67, 123, 78, -38, 189, 456, 65, 45678, 10, 54, 567, 45, 32]
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> Масив [${arr}]</div>`)
	for (const element of arr) {
		if (element > 100) {
			document.write(`<div style="font-size:24px; margin-bottom:10px;">${element}</div>`)
		}
	}


}
