'use strict'

// Задача 6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

const numberDayWeek = parseInt(prompt('введіть номер дня тижня', '1'))
let nameDay

switch (numberDayWeek) {
	case 1: nameDay = `понеділок`
		break
	case 2: nameDay = `вівторок`
		break
	case 3: nameDay = `середа`
		break
	case 4: nameDay = `четвер`
		break
	case 5: nameDay = `п'ятниця`
		break
	case 6: nameDay = `субота`
		break
	case 7: nameDay = `неділя`
		break
	default:
		nameDay = `введіть коректні дані`
		break
}

document.write(`<h2>Задача 6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.</h2>`)
document.write(`Назва дня: ${nameDay}`)