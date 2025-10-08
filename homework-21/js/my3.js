'use strict'




if (confirm('Почати тестування?')) {

	// Задача 0. Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження). 
	// На основі класу Person  розробити клас Worker 
	// (додати поля: посада, розмір заробітної плати, кількість відсотів оподаткування; 
	// методи:визначення кількості виплачених коштів за рік, та визначення розміру податків) 


	class Person {
		constructor(name, age, address) {
			this.name = name
			this.age = age
			this.address = address
		}
		getYearOfBirth() {
			const data = new Date()
			return data.getFullYear() - this.age
		}
		toString() {
			return `Iм'я: ${this.name} <br> Вік: ${this.age}<br> Рік народження: ${this.getYearOfBirth()}<br>`
		}
	}


	class Worker extends Person {
		constructor(name, age, address, position, salaryAmount, percentagesTaxation) {
			super(name, age, address)
			this.position = position
			this.salaryAmount = salaryAmount
			this.percentagesTaxation = percentagesTaxation
		}

		getAmountOfMoneyYear() {
			return this.salaryAmount * 12
		}
		getAmountOfTaxes() {
			return this.getAmountOfMoneyYear() * (this.percentagesTaxation / 100)
		}
		toString() {
			return `${super.toString()} Посада: ${this.position}<br>Зарплата: ${this.salaryAmount}<br>Податок: 
			 ${this.percentagesTaxation}%<br>Річний дохід: ${this.getAmountOfMoneyYear()}<br>Податки за рік: ${this.getAmountOfTaxes()}<br>`
		}
	}

	const worker = new Worker("Анна", 43, "м.Миколаїв, вул.Березнева 8 кв9", "менеджер", 26000, 25)

	document.write(worker)
}


