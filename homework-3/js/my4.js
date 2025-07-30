'use strict'

// Задача 4. З клавіатури вводиться вік людини. Вивести на екран ким він є 
// (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const personAge = parseInt(prompt('введіть ваш вік', '10'))
let personStatus

if (personAge <= 0)
	personStatus = `введіть коректні данні`
else
	if (personAge <= 6)
		personStatus = `дитина у садочку`

	else
		if (personAge <= 17)
			personStatus = `школяр`
		else
			if (personAge <= 23)
				personStatus = `студент`
			else
				if (personAge <= 65)
					personStatus = `працівник`
				else
					if (personAge <= 100)
						personStatus = `пенсіонер`
					else
						personStatus = `введіть коректні данні`

document.write(`<h2>Задача 4. З клавіатури вводиться вік людини. Вивести на екран ким він є 
(дитиною у садочку, школярем, студентом, працівником, пенсіонером).</h2>`)
document.write(personStatus)