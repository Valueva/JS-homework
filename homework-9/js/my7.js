'use strict'


// 7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.




if (confirm('Почати тестування?')) {

	const arrPrices = [20, 45, 1500, 1000, 70, 1230, 100, 2000, 500, 10000, 320]
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> Масив цін: [${arrPrices}]</div>`)

	arrPrices.forEach((price, ind, baseArrRef) => {
		if (price > 1000) baseArrRef[ind] *= 0.7
	})

	document.write(`<div style="font-size:24px; margin-bottom:10px;">Масив цін зі знижкою:[${arrPrices}]</div>`)

}