'use strict'




if (confirm('Почати тестування?')) {

	const arr = [23, 45, 10, 15, -10, 678, -34, 0, 2, 37]

	// Заповнити масив нулями, крім першого й останнього елементів, котрі мають дорівнювати одиниці.

	// let arr1 = new Array(10).fill(0, 1, 9).fill(1, 0, 1).fill(1, 9)
	// document.write(`${arr1}`)

	// Заповнити масив нулями та одиницями, при цьому дані значення чергуються, починаючи з нуля.

	// let arr1 = new Array(10).fill(0)
	// arr1.forEach((item, index, baseArrRef) => {
	// 	if (index % 2 !== 0) baseArrRef[index] = 1
	// })
	// document.write(`${arr1}`)

	// Заповнити масив послідовними непарними числами, починаючи з одиниці.

	// let arr1 = new Array(10).fill(1)
	// arr1.forEach((item, index, baseArrRef) => {
	// 	if (index === 0) baseArrRef[index] = 1
	// 	else baseArrRef[index] = baseArrRef[index - 1] + 2
	// })
	// document.write(`${arr1}`)

	// Сформувати спадний масив із чисел, що діляться на 3.

	// let arr1 = new Array(20).fill(0)
	// let num = 0
	// for (let i = arr1.length - 1; i >= 0; i--) {
	// 	num += 3
	// 	arr1[i] = num
	// }

	// document.write(`${arr1}`)

	// Сформувати масив з елементів арифметичної прогресії зі заданим першим елементом $x$ і різницею $d$.

	// let arr1 = new Array(20).fill(0)
	// arr1.forEach((item, index, baseArrRef) => {
	// 	if (index === 0) baseArrRef[index] = 5
	// 	else baseArrRef[index] = baseArrRef[index - 1] + 5
	// })

	// document.write(`${arr1}`)

	// Створити масив із $n$ перших чисел Фібоначчі.

	// let arr1 = new Array(20).fill(1)
	// arr1.forEach((item, index, baseArrRef) => {
	// 	if (index === 0) {
	// 		baseArrRef[index] = 0
	// 	} else
	// 		if (index === 1) {
	// 			baseArrRef[index] = 1

	// 		} else {
	// 			baseArrRef[index] = baseArrRef[index - 1] + baseArrRef[index - 2]
	// 		}
	// })

	// document.write(`${arr1}`)

	// Заповнити масив заданої довжини різними простими числами. Натуральне число,
	//  більше за одиницю, називається простим, якщо воно ділиться тільки на себе та на одиницю.

	let arr1 = new Array(20)
	let num = 2
	for (let i = 2; i <= Math.sqrt(num); i++) {

		if (num % i !== 0) {
			arr1.push(num)
		}
		num++
	}
	document.write(`${arr1}`)

}