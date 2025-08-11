'use strict'

// 24. Дано натуральні числа від 35 до 87. 
// Надрукувати ті з них, які при діленні на 7 дають остачу 1, 2 або 5.

if (confirm('Почати тестування?')) {

	const minNumber = 35
	const maxNumber = 87

	for (let i = minNumber; i <= maxNumber; i++) {
		if (i % 7 === 1 || i % 7 === 2 || i % 7 === 5)
			document.write(`${i} <br>`)
	}

}
