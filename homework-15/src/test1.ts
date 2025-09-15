
if (confirm(`Почати   тестування?`)) {

	//Задача 2. Створити об’єкт «Авто».  

	// Авто  
	// Поля(властивості)
	// Марка
	// Розмір бака
	// Кількість наявних літрів
	// Кількість місць
	// Кількість пасажирів
	// Методи (дії)
	// Заправка на вказану кількість літрів
	// Виведення кількості пасажирів
	// Додавання пасажирів
	// Висадка пасажирів


	interface Auto {
		carMake: string,
		tankSize: number,
		numberAvailableLiters: number,
		numberPlaces: number,
		numberPassengers: number,
		refueling(numLiters: number): number,
		toString(): string,
		addingPassengers(numPass: number): number,
		disembarkingPassengers(numPass: number): number
	}


	const auto: Auto = {
		carMake: 'Skoda',
		tankSize: 60,
		numberAvailableLiters: 40,
		numberPlaces: 5,
		numberPassengers: 2,
		refueling: function (numLiters) {
			this.numberAvailableLiters = numLiters + this.numberAvailableLiters < this.tankSize ? numLiters + this.numberAvailableLiters : this.tankSize
			return this.numberAvailableLiters
		},
		toString: function () {
			return `${this.numberPassengers}`
		},
		addingPassengers: function (numPass) {
			this.numberPassengers = numPass + this.numberPassengers < this.numberPlaces ? numPass + this.numberPassengers : this.numberPlaces
			return this.numberPassengers
		},
		disembarkingPassengers: function (numPass) {
			this.numberPassengers = this.numberPassengers - numPass >= 0 ? this.numberPassengers - numPass : 0
			return this.numberPassengers
		}
	}

	auto.refueling(30)
	console.log(auto.numberAvailableLiters)
	auto.addingPassengers(2)
	console.log(auto.numberPassengers)
	auto.disembarkingPassengers(3)
	console.log(auto.numberPassengers)

	document.write(`<div> Відповідь у консолі</div>`);
}