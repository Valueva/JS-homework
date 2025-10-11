'use strict'




if (confirm('Почати тестування?')) {

	const arrString = [
		"user123",
		"id_4567_data",
		"product98price",
		"noDigitsHere",
		"temp2025report",
		"abc000xyz",
		"42isTheAnswer",
		"value_789_extra",
		"x1y2z3",
		"test",
		"Brrr"
	]
	const task = document.querySelector('.page p')
	task.innerHTML = arrString.join('<br>')


	// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

	const task1 = document.querySelector('.page__task1 p')
	const arrString1 = arrString.filter(str => /\d+/.test(str))
	task1.innerHTML = arrString1.join('<br>')


	// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.

	const task2 = document.querySelector('.page__task2 p')
	const arrString2 = arrString.filter(str => /^\D+$/g.test(str))
	task2.innerHTML = arrString2.join('<br>')


	// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.

	const task3 = document.querySelector('.page__task3 p')
	const arrString3 = arrString.filter(str => /[aeiouy]/ig.test(str))
	task3.innerHTML = arrString3.join('<br>')

	// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.

	const task4 = document.querySelector('.page__task4 p')
	const arrString4 = arrString.filter(str => /^[^aeiouy]+$/ig.test(str))
	task4.innerHTML = arrString4.join('<br>')

	// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

	const task5 = document.querySelector('.page__task5 p')
	const arrString5 = arrString.filter(str => /^[1]|[3]+$/g.test(str))
	task5.innerHTML = arrString5.join('<br>')

	// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

	const str = 'Order#5489 confirmed on 23.07.2025! Total: $199.99 — Thank you, John_Doe :)'
	const taskStr = document.querySelector('.page__str p')
	taskStr.innerText = str

	const task6 = document.querySelector('.page__task6 p')
	if (/[0-9]/.test(str)) {
		const list6 = str.match(/[0-9]/g)
		task6.innerText = list6
	} else task6.innerText = 'Чисел немає'


	// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

	const task7 = document.querySelector('.page__task7 p')
	if (/[^a-z0-9]/.test(str)) {
		const list7 = str.match(/[^a-z 0-9]/ig)
		task7.innerText = list7
	} else task7.innerText = 'Знаки пунктуації відсутні'

	// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

	const parts = str.split(/[!,—.;:#_]/)
	const task8 = document.querySelector('.page__task8 p')
	task8.innerHTML = parts.join('<br>')

	// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).

	const task9 = document.querySelector('.page__task9 p')
	if (/(\d{2}).([0-1]\d).(\d{4})/.test(str)) {
		const list9 = str.match(/(\d{2}).([0-1]\d).(\d{4})/g)
		task9.innerText = list9
	} else task9.innerText = 'Дата у форматі dd.mm.yyyy відсутня'

	// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.

	const task10 = document.querySelector('.page__task10 p')
	if (/\b\d{2}\b/.test(str)) {
		const list10 = str.match(/\b\d{2}\b/g)
		task10.innerText = `У рядку ${list10.length}  двоцифрових чисел`
	}

	// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434» ).
	//  Знайти усі такі номери (при цьому символи “-” можуть бути, а можуть і не бути, тобто так «4142343323233434».

	const strCard = `4142343323233434`
	const task11 = document.querySelector('.page__task11 p')
	if (/\b(\d{16})|(\d{4}-\d{4}-\d{4}-\d{4})\b/.test(strCard)) {
		task11.innerText = 'Рядок тексту є номером банківської картки'
	} else task11.innerText = 'Рядок тексту не є номером банківської картки'

	// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим 
	// (містить домен “gov”, але не обов”язково у кінці). Наприклад: “https://company.gov.ua”

	const site = 'https://company.gov.ua'
	const task12 = document.querySelector('.page__task12 p')
	if (/\.gov/.test(site)) {
		task12.innerText = 'сайт містить домен “gov”'
	} else task12.innerText = 'сайт не містить домен “gov”'

	// Задача 13. Вибрати усі роки між 2020 та 2049 з отриманого повідомлення
	const message = 'In 2019, many events took place, but in 2021 a new development program began.' +
		'It is planned that by 2025 the main projects will be completed, and by 2030 new centers will open.' +
		'The next major goals are set for 2040 and 2045.'

	const task13 = document.querySelector('.page__task13 p')
	if (/\b(20[2-4][0-9])\b/.test(message)) {
		const list13 = message.match(/\b(20[2-4][0-9])\b/g)
		task13.innerText = list13
	} else task13.innerText = 'У повідомленні відсутні вказані роки '

	// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном оператора Киїівстар
	const strTel = `+380674660466`
	const task14 = document.querySelector('.page__task14 p')
	if (/\+380(67|68|77|96|98)/.test(strTel)) {
		task14.innerText = 'Рядок тексту є телефоном оператора Киїівстар'
	} else task14.innerText = 'Рядок тексту не є телефоном оператора Киїівстар'

	// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.

	const strName = prompt('Введіть прізвище та ім’я', 'Shevchenko Taras')
	const strName2 = strName.replace(' ', '-')
	const task15 = document.querySelector('.page__task15 p')
	task15.innerText = strName2


	// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «місяць/рік»

	const strData = prompt('Введіть дату (dd.mm.yyyy)', '11.10.2025')
	const [day, month, year] = strData.split('.')
	// const strData2 = `${month}/${year}`
	const task16 = document.querySelector('.page__task16 p')
	task16.innerText = `${month}/${year}`
}