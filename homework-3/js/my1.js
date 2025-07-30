'use strict'

// Задача 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. 
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, 
// що кількість однакова.

const firstChildName = prompt('введіть ім\'я дитини', 'Тарас')
const numberOfCandiesFirstChild = parseInt(prompt('введіть кількість цукерок', '5'))
const secondChildName = prompt('введіть ім\'я дитини', 'Галина')
const numberOfCandiesSecondChild = parseInt(prompt('введіть кількість цукерок', '3'))

document.write(`<h2>Задача 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. 
Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, 
що кількість однакова.</h2>`)

if (numberOfCandiesFirstChild == numberOfCandiesSecondChild)
	document.write(` цукерок у ${firstChildName} та ${secondChildName} однаково`)
else {
	if (numberOfCandiesFirstChild > numberOfCandiesSecondChild)
		document.write(`цукерок більше у ${firstChildName}`)
	else
		document.write(`цукерок більше у ${secondChildName}`)

}

