'use strict'

// Задача 7. Вивести на екран N абзаців (N вводиться користувачем) за зразком:



if (confirm('Почати тестування?')) {

	let num = 0
	let paragraph = 0
	const n = parseInt(prompt('ввести к-сть абзаців'))
	for (let i = 1; i <= n; i++) {
		num++
		document.write(`<h1>Заголовок ${num}</h1>`)

		for (let p = 1; p <= n; p++) {
			if (p > i)
				break

			document.write(`<p>Розділ ${num}, параграф ${p} </p>`)
		}

	}

}





