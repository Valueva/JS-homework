if (confirm(`Почати   тестування?`)) {


	//Задача 5. Розробити клас «Керівник танців»
	// Поля
	// Масив імен хлопців
	// Масив імен дівчат
	// Методи
	// Метод випадкового вибору імені хлопця
	// Метод випадкового вибору імені дівчини
	// Метод виведення пари для танців
	// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

	class DanceDirector {
		boysNames: string[]
		girlsNames: string[]
		constructor(initBoysNames: string[], initGirlsNames: string[]) {
			// ---- властивості ---
			this.boysNames = initBoysNames
			this.girlsNames = initGirlsNames
		}
		// ---- методи ---
		getRundomBoysNames() {
			const randomIndex = Math.floor(Math.random() * this.boysNames.length)
			return this.boysNames[randomIndex]
		}
		getRundomGirlsNames() {
			const randomIndex = Math.floor(Math.random() * this.girlsNames.length)
			return this.girlsNames[randomIndex]
		}
		toString() {
			return `${this.getRundomBoysNames()}-${this.getRundomGirlsNames()}`
		}
		run() {
			setInterval(() => {
				const couple = this.toString()
				console.log(couple)
			}, 5000)
		}
	}

	const arrBoysNames = ['Іван', 'Василь', 'Андрій', 'Сергій', 'Антон', 'Михайло', 'Олександр']
	const arrGirlsNames = ['Ганна', 'Катерина', 'Ольга', 'Марійка', 'Антоніна', 'Світлана', 'Галина']

	const danseObj = new DanceDirector(arrBoysNames, arrGirlsNames)
	console.log(danseObj)
	danseObj.run()




}