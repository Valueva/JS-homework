'use strict'




if (confirm('Почати тестування?')) {

	function print(selector, text) {
		const container = document.querySelector(selector)
		let p = document.createElement('p')
		p.innerText = text
		container.append(p)
	}

	// Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.

	const studentAges = [10, 11, 15, 12, 13, 11, 10, 8, 9, 11, 10, 16, 13, 10, 11]
	let map = new Map()
	for (const age of studentAges) {
		let count = map.get(age) ?? 0
		map.set(age, count + 1)
	}

	map.forEach((count, age) => {
		print('.page__task1', `${age} років - ${count}`)
	})

	let max = Math.max(...map.keys())
	print('.page__task1', `Максимальний вік ${max}років`)

	// Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
	const books = [
		{ title: "Кобзар", year: 1840, author: "Тарас Шевченко" },
		{ title: "Тіні забутих предків", year: 1938, author: "Михайло Коцюбинський" },
		{ title: "Земля", year: 1904, author: "Павло Скоропадський" },
		{ title: "Солодка Даруся", year: 1923, author: "Степан Шандор" },
		{ title: "Катерина", year: 1883, author: "Тарас Шевченко" },
	]
	map = new Map()
	for (const book of books) {
		let count = map.get(book.author) ?? 0
		map.set(book.author, count + 1)
	}

	map.forEach((count, book) => {
		print('.page__task2', `${book} - ${count}`)
	})

	// Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). 
	// Підрахувати для кожного клієнта кількість відвідувань.

	const visitors = ["olga82", "user23", "taras_s", "12_ivan", "ghjkd", "user23", "olga82", "taras_s", "anna20ts", "katrysya77", "taras_s"]

	map = new Map()
	for (const visitor of visitors) {
		let count = map.get(visitor) ?? 0
		map.set(visitor, count + 1)
	}

	map.forEach((count, visitor) => {
		print('.page__task3', `${visitor} - ${count} - відвідування`)
	})

	// Задача 8. Дано масив студентів (піб, курс, факультет). 
	// Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів. 

	const students = [
		{ name: "Іваненко Марія Олександрівна", course: 1, faculty: "Філологічний" },
		{ name: "Петренко Андрій Сергійович", course: 2, faculty: "Інженерний" },
		{ name: "Сидоренко Олена Василівна", course: 3, faculty: "Економічний" },
		{ name: "Мельник Дмитро Ігорович", course: 4, faculty: "Філологічний" },
		{ name: "Коваль Наталія Петрівна", course: 1, faculty: "Юридичний" },
		{ name: "Гончаренко Максим Олексійович", course: 2, faculty: "Економічний" },
		{ name: "Бондар Вікторія Іванівна", course: 3, faculty: "Інженерний" },
		{ name: "Шевченко Артем Володимирович", course: 4, faculty: "Комп’ютерних наук" },
		{ name: "Кравчук Ірина Миколаївна", course: 2, faculty: "Юридичний" },
		{ name: "Литвин Олег Степанович", course: 3, faculty: "Інженерний" }
	]

	const numberOfFaculty = new Set(students.map(student => student.faculty))
	print('.page__task4', `Кількість різних факультетів - ${numberOfFaculty.size}`)

	map = new Map()
	for (const student of students) {
		let count = map.get(student.course) ?? 0
		map.set(student.course, count + 1)
	}

	map.forEach((count, course) => {
		print('.page__task4', `${course} курс - ${count} студентa`)
	})

	// Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
	// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
	// Заокруглити вверх значення та підрахувати кількість різних показів.
	let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

	map = new Map()
	for (const el of temperatures) {
		let count = map.get(el) ?? 0
		map.set(el, count + 1)
	}

	map.forEach((count, el) => {
		print('.page__task5', `${el} - ${count}`)
	})

	temperatures = temperatures.map(el => Math.ceil(el))
	print('.page__task5', `Кількість різних показів: ${new Set(temperatures).size}`)

	// Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. 
	// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. 
	// Також підрахувати скільки всього студентів відвідують хоча б один гурток. 

	const mathClub = [
		"Іваненко",
		"Петренко",
		"Мельник",
		"Коваль",
		"Шевченко",
		"Бондар",
		"Гончаренко"
	]

	const historyClub = [
		"Кравчук",
		"Сидоренко",
		"Петренко",
		"Мельник",
		"Шевченко",
		"Литвин"
	]

	const mathClubSet = new Set(mathClub)
	const historyClubSet = new Set(historyClub)
	const bothClub = mathClubSet.intersection(historyClubSet)
	print('.page__task6', `${bothClub.size} студенти відвідують оба гуртки`)
	const allStudents = mathClubSet.union(historyClubSet)
	print('.page__task6', `${allStudents.size} студентів відвідують хоча б один гурток`)

}