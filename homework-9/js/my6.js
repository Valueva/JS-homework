'use strict'


// 6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2




if (confirm('Почати тестування?')) {

	const arr = [20, 45, -67, 12, 70, -38, 100, -54, 5, -45, 32]
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> Масив <br> [${arr}]</div>`)

	arr.forEach((copyElement, ind, baseArrRef) => {
		if (copyElement > baseArrRef[0]) baseArrRef[ind] *= 2
	})

	document.write(`<div style="font-size:24px; margin-bottom:10px;">[${arr}]</div>`)

}