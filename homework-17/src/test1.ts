
if (confirm(`Почати   тестування?`)) {

	// Створити службове авто (водій, марка, номер). 
	// Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

	class CompanyCar {

		driver: string = ''
		brand: string = ''
		numberCar: string = ''

		static companyCarOneCopy: CompanyCar
		constructor(initialDriver: string, initialBran: string, initialNumberCar: string) {
			if (CompanyCar.companyCarOneCopy)
				return CompanyCar.companyCarOneCopy
			this.driver = initialDriver
			this.brand = initialBran
			this.numberCar = initialNumberCar
			CompanyCar.companyCarOneCopy = this
		}
		tiString() {
			return `Водій - ${this.driver}<br> марка авто - ${this.brand}<br> номер авто -${this.numberCar}<br>`
		}

	}

	let companyCar1 = new CompanyCar('Olga', 'Volkswagen', 'AA4354DD')
	document.write('<div style="font-size:20px; margin-bottom:10px;">Перший об\'єкт </div>')
	document.write(companyCar1.tiString())
	document.write('<div style="font-size:20px; margin-bottom:10px;">Другий об\'єкт (змінюємо дані)</div>')
	let companyCar2 = new CompanyCar('Ivan', 'Skoda', 'AB4756XX')
	document.write(companyCar2.tiString())

}