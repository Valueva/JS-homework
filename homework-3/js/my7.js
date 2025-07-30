'use strict'

// Задача 7. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься



const monthNumber = parseInt(prompt('введіть номер місяця', '10'))
let season



switch (monthNumber) {
	case 1:
	case 2:
	case 12:
		season = `зима`
		break
	case 3:
	case 4:
	case 5:
		season = `весна`
		break
	case 6:
	case 7:
	case 8:
		season = `літо`
		break
	case 9:
	case 10:
	case 11:
		season = `осінь`
		break

	default:
		season = `введіть коректні дані`
		break
}

document.write(`<h2>Задача 7. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься</h2>`)
document.write(`пора року: ${season}`)