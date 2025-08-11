'use strict'

// 10. Вивести на екран 
// 1 1
// 2 1234
// 3 123456789
// 4 1234…16
// 5 1 … 25
// 6 1…36

if (confirm('Почати тестування?')) {

	let n = 1
	for (let i = 1; i <= 6; i++) {
		let string = `<p >№ ${i}.  `

		for (let j = 0; j < i ** 2; j++) {

			string += n + ' '
			n++
			if (n > i ** 2) n = 1
		}

		string += `</p>`
		document.write(string)

	}

}














