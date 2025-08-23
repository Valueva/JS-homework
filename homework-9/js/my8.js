'use strict'


// 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»




if (confirm('Почати тестування?')) {

	const arrCarNumbers = ['BC6835OB', 'НЕ1539АВ', 'ВТ8252СМ', 'BC6835OO', 'AА7679ТA', 'AА6884ХС', 'A1234']
	document.write(`<div style="font-size:24px; margin-bottom:10px;"> Масив номерів авто:[${arrCarNumbers}]</div>`)

	const newArrCarNumbersA = arrCarNumbers.filter(
		(element) => element[0] === 'A'
	)



	document.write(`<div style="font-size:24px; margin-bottom:10px;">Масив номерів авто, які починаються на «А»:[${newArrCarNumbersA}]</div>`)

}