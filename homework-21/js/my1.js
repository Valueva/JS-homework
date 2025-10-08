'use strict'




// if (confirm('Почати тестування?')) {


function formatDate(date) {
	return date.toLocaleString("uk-ua", {
		hour12: false,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	})
}
function formatHour(date) {
	return date.toLocaleString("uk-ua", {
		hour12: false,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	})
}

// 	Задача 1. Виводити на екран скільки хвилин користувач вже на сайті

const startDate = new Date()
function getMinuteForSite() {
	const currentDate = new Date()
	const elapsedSeconds = Math.floor((currentDate - startDate) / 1000)
	const elapsedMinutes = Math.floor(elapsedSeconds / 60)
	const seconds = elapsedSeconds % 60
	const span = document.querySelector('.page__task1 p span')
	span.innerText = ` ${elapsedMinutes} хв. ${seconds} сек.`
}
setInterval(() => {
	getMinuteForSite()
}, 1000)


// Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває. 

// function getProcedureTime(startProcedureHours, startProcedureMinutes, timeProcedure = 30) {
// 	const endProcedureDate = new Date()
// 	const date = new Date()
// 	endProcedureDate.setHours(startProcedureHours, startProcedureMinutes + timeProcedure)
// 	const p = document.querySelector('.page__task2 p')
// 	if (date < endProcedureDate) {
// 		p.innerText = `Процедура ще триває, закінчення о ${formatHour(endProcedureDate)}`
// 	} else {
// 		p.innerText = `Процедура закінчилася о ${formatHour(endProcedureDate)}`
// 	}
// }

// const procedure = getProcedureTime(11, 45)

function getProcedureTime(timeProcedure) {
	const input = document.querySelector('.page__input2')
	const inputValue = input.value
	const [hours, minutes] = inputValue.split(':').map(Number)
	const date = new Date()
	let startProcedureDate = new Date()
	startProcedureDate.setHours(hours, minutes, 0, 0)
	let endProcedureDate = new Date(startProcedureDate)
	endProcedureDate.setMinutes((startProcedureDate.getMinutes() + timeProcedure), 0, 0)
	const p = document.querySelector('.page__task2 p')
	if (date < endProcedureDate && date > startProcedureDate) {
		p.innerText = `Процедура ще триває, закінчення о ${formatHour(endProcedureDate)}`
	} else if (date < startProcedureDate) {
		p.innerText = `Процедура ще не почалась, закінчення о ${formatHour(endProcedureDate)}`
	}
	else {
		p.innerText = `Процедура закінчилася о ${formatHour(endProcedureDate)}`
	}
}

const btn = document.querySelector(".page__button2")
btn.addEventListener("click", () => getProcedureTime(30))


// Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)

function getTimeEndWorkingDay(endWorkingDayHours = 17, endWorkingDayMinutes = 0) {
	const date = new Date()
	const endDate = new Date()
	endDate.setHours(endWorkingDayHours, endWorkingDayMinutes, 0, 0)
	const difference = endDate - date
	const span = document.querySelector('.page__task3 p span')
	if (difference <= 0) {
		span.innerText = 'Робочий день закінчено'
	} else {
		const dateHours = Math.floor(difference / 1000 / 60 / 60)
		const dateMinutes = Math.floor((difference / 1000 / 60) % 60)
		span.innerText = `${dateHours} год ${dateMinutes} хв`
	}
}

const endWorkingDay = getTimeEndWorkingDay()

// Задача 4. Створити функцію, яка дозволяє визначити, 
// чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)



function getCurrentWeek(specifiedDate) {
	const date = new Date()
	const differenceToMonday = date.getDay() === 0 ? -6 : 1 - date.getDay()
	const monday = new Date()
	monday.setDate(date.getDate() + differenceToMonday)
	monday.setHours(0, 0, 0, 0)
	const sunday = new Date()
	sunday.setDate(monday.getDate() + 6)
	sunday.setHours(23, 59, 59, 999)
	const p = document.querySelector('.page__task4 p')
	if (specifiedDate >= monday && specifiedDate <= sunday) {
		p.innerText = `дата і час ${formatDate(specifiedDate)} у межах поточного тижня (від ${formatDate(monday)} до ${formatDate(sunday)})`
	} else {
		p.innerText = `дата і час ${formatDate(specifiedDate)} не у межах поточного тижня (від ${formatDate(monday)} до ${formatDate(sunday)})`
	}
}
const specifiedDate = new Date(2025, 8, 5)
const currentWeek = getCurrentWeek(specifiedDate)

// Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,  
// скільки хвилин залишилось до початку робочого дня (початок о 8.00).



function getTimeStartWorkingDay(startWorkingDayHours = 8, startWorkingDayMinutes = 0) {
	const date = new Date()
	const startWorking = new Date()
	startWorking.setHours(startWorkingDayHours, startWorkingDayMinutes, 0, 0)
	const difference = startWorking - date
	const p = document.querySelector('.page__task5 p')
	if (difference <= 0) {
		p.innerText = 'Вітаємо на сайті'
	} else {
		const dateHours = Math.floor(difference / 1000 / 60 / 60)
		const dateMinutes = Math.floor((difference / 1000 / 60) % 60)
		p.innerText = `До початку робочого дня залишилось${dateHours} год ${dateMinutes} хв`
	}
}

const startWorkingDay = getTimeStartWorkingDay()

// Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.

function getTimeForCountry(locals, zone) {
	const date = new Date().toLocaleString('locals', {
		timeZone: zone,
		hour12: false,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	})
	return date

}

function getListCountry() {
	const london = document.querySelector(".list__london span")
	const paris = document.querySelector(".list__paris span")
	const sydney = document.querySelector(".list__sydney span")
	london.innerText = getTimeForCountry('en-GB', 'Europe/London')
	paris.innerText = getTimeForCountry('fr-FR', 'Europe/Paris')
	sydney.innerText = getTimeForCountry('en-AU', 'Australia/Sydney')
}


setInterval(() => {
	const listCountry = getListCountry()
}, 1000)


// Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента

const students = [
	{ name: "Степан", birth: "09.06.1969" },
	{ name: "Ганна", birth: "20.03.2011" },
	{ name: "Катерина", birth: "11.05.2003" },
	{ name: "Ольга", birth: "06.06.1982" },
	{ name: "Іван", birth: "23.05.2024" }
]

function findOldestStudent(students) {
	let oldestStudent = students[0]
	let oldestData = Date.parse(oldestStudent.birth)
	for (const oldest of students) {
		let data = Date.parse(oldest.birth)
		if (data < oldestData) {
			oldestStudent = oldest
			oldestData = data
		}
	}
	const p = document.querySelector('.page__task7 p')
	p.innerText = `Найстарший студент ${oldestStudent.name} - ${oldestStudent.birth}p.н`

}

let oldestStudent = findOldestStudent(students)


// Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.


function getMinuteForMouseMove() {
	const starTime = new Date()

	const moveMouse = function () {

		document.removeEventListener('mousemove', moveMouse, false);

		const endTime = new Date()
		const difference = (endTime - starTime) / 1000
		const p = document.querySelector('.page__task8 p')
		p.innerText = `Рух мишкою відбувся через = ${difference}сек`
	};

	document.addEventListener('mousemove', moveMouse, false);
}
const mouse = getMinuteForMouseMove()

// Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться).
//  Визначити чи відпустка вже триває і чи не закінчилась.


function getOngoingMaternityLeave(durationOfMaternityLeave = 200) {
	const input = document.querySelector('.page__input9')
	const inputValue = input.value
	const [day, month, year] = inputValue.split('.').map(Number)
	const date = new Date()
	const startDate = new Date(year, month - 1, day)
	const endDate = new Date(startDate)
	endDate.setDate(endDate.getDate() + durationOfMaternityLeave)
	const p = document.querySelector('.page__task9 p')
	if (date > endDate) {
		p.innerText = `Відпустка вже закінчилася (відпустка з ${formatDate(new Date(startDate))} по ${formatDate(endDate)})`
	} else if (date < startDate) {
		p.innerText = `Відпустка ще не почалася (відпустка з ${formatDate(new Date(startDate))} по ${formatDate(endDate)})`
	} else
		p.innerText = `Відпустка триває (відпустка з ${formatDate(new Date(startDate))} по ${formatDate(endDate)})`
}


const btn9 = document.querySelector(".page__button9")
btn9.addEventListener("click", () => getOngoingMaternityLeave(200))

// Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. 
// Визначити чи є він придатним на даний момент.

function getSuitable() {
	const DaysValidity = document.querySelector('.page__input11')
	const numberOfDaysValidity = Number(DaysValidity.value)
	const input = document.querySelector('.page__input10')
	const inputValue = input.value
	const [day, month, year] = inputValue.split('.').map(Number)
	const date = new Date()
	const startProdDate = new Date(year, month - 1, day)
	const endProdDate = new Date(startProdDate)
	endProdDate.setDate(endProdDate.getDate() + numberOfDaysValidity)
	const p = document.querySelector('.page__task10 p')
	if (date > endProdDate) {
		p.innerText = `Продукт вже не придатен до використання (придатний до ${formatDate(endProdDate)})`
	} else {
		p.innerText = `Продукт придатен до використання (придатний до ${formatDate(endProdDate)})`
	}
}

const btn10 = document.querySelector(".page__button10")
btn10.addEventListener("click", () => getSuitable())


// Задача 12. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.

function generateRandomArray(arrayLength, min, max) {
	const arr = Array.from({ length: arrayLength }, () => min + Math.floor(Math.random() * (max - min + 1)))
	return arr
}

let randomArray = generateRandomArray(1000, 1, 800)

function bubleSort(randomArray) {
	const startTime = performance.now()
	let changed
	let number = randomArray.length
	do {
		changed = false
		for (let i = 1; i < number; i++) {
			if (randomArray[i - 1] > randomArray[i]) {
				let tmp = randomArray[i - 1]
				randomArray[i - 1] = randomArray[i]
				randomArray[i] = tmp
				changed = true
			}
		}
	} while (changed)
	const endTime = performance.now()
	return (endTime - startTime).toFixed(4)
}

function insertSort(randomArray) {
	const startTime = performance.now()
	let key, i
	let number = randomArray.length
	for (let k = 1; k < number; k++) {
		key = randomArray[k]
		i = k - 1
		while (i >= 0 && randomArray[i] > key) {
			randomArray[i + 1] = randomArray[i]
			i--
		}
		randomArray[i + 1] = key
	}
	const endTime = performance.now()
	return (endTime - startTime).toFixed(4)
}

function getDisplayComparison() {
	const pFirst = document.querySelector('.page__task11 p:first-child')
	const pEnd = document.querySelector('.page__task11 p:last-child')
	const timeBubleSort = bubleSort(randomArray)
	const timeInsertSort = insertSort(randomArray)
	pFirst.innerText = `Час сортування бульбашкою ${timeBubleSort} мсек.`
	pEnd.innerText = `Час сортування вставкою ${timeInsertSort} мсек.`
}

let comparison = getDisplayComparison()

// }