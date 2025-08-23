'use strict'


// 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.




if (confirm('Почати тестування?')) {

	const prices = [150, 290, 75, 420, 60, 180, 250, 90, 310, 55]
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> Масив цін:[${prices}]</div>`)

	const taxes = prices.map(element => element * 0.2)

	document.write(`<div style="font-size:24px; margin-bottom:10px;">Масив податку:[${taxes}]</div>`)

}