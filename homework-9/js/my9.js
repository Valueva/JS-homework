'use strict'


// 9. Дано масив імен. Сформувати масив з перших літер цих імен.




if (confirm('Почати тестування?')) {

	const names = ['Anna', 'Boris', 'Victor', 'Helen', 'Dmitry', 'Elena', 'Jane', 'Igor', 'Kirill', 'Linda']

	document.write(`<div style="font-size:24px; margin-bottom:10px;"> Масив імен:[${names}]</div>`)

	const newArrFirstLetters = names.map
		(element => element[0])
	document.write(`<div style="font-size:24px; margin-bottom:10px;">Масив з перших літер імен:[${newArrFirstLetters}]</div>`)

}