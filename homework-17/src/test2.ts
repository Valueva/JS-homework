if (confirm(`Почати   тестування?`)) {

	// Склад. База товарів, які зберігаються на складі: 
	// назва товару, 
	// одиниця виміру, 
	// кількість, 
	// фірма виробник (назва, реєстраційний номер). 
	// Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми

	// клас фірма
	class Firm {
		companyName: string = ''
		registryNumber: number = 0
		constructor(companyName: string, registryNumber: number) {
			this.companyName = companyName
			this.registryNumber = registryNumber
		}
		toString() {
			return `${this.companyName}, реєстраційний номер-${this.registryNumber}<br>`
		}
	}
	// клас товари

	class Product {
		productName: string = ''
		unitOfMeasurement: string = ''
		numberOfProduct: number = 0
		firmProduct: Firm
		constructor(productName: string, unitOfMeasurement: string, numberOfProduct: number, firmProduct: Firm) {
			this.productName = productName
			this.unitOfMeasurement = unitOfMeasurement
			this.numberOfProduct = numberOfProduct
			this.firmProduct = firmProduct
		}
		toString() {
			return `назва товару - ${this.productName} <br>
	   одиниця виміру-${this.unitOfMeasurement}<br>
	   кількість-${this.numberOfProduct}<br>
	   фірма виробник-${this.firmProduct}<br>`
		}
	}

	// клас склад
	class Warehouse {
		productList: Product[]
		constructor(productList = []) {
			this.productList = [...productList]
		}

		registration(...productObj: Product[]) {
			this.productList.push(...productObj)
		}
		shipment(val: string, number: number) {
			let product = this.productList.find(el => el.productName === val)
			if (!product)
				return document.write(`товар ${val} відсутній <br>`)
			if (product.numberOfProduct < number)
				return document.write(`товара ${val} недостатньо <br>`)
			else product.numberOfProduct -= number
			return document.write(`відвантажено ${val}-${number} <br>`)

		}
		filteringByProductName(val: string) {
			return this.productList.filter(el => el.productName === val)
		}

		filteringByCompanyName(val: string) {
			return this.productList.filter(el => el.firmProduct.companyName === val)
		}
		toString() {
			return this.productList.map(product => product.toString()).join('<br>')
		}
	}

	let firm1 = new Firm('Sandora', 567387)
	let firm2 = new Firm('Щедро', 87905)
	let product1 = new Product('Сік Садочок', 'уп', 30, firm1)
	let product2 = new Product('pepsi-cola', 'бут', 50, firm1)
	let product3 = new Product('Lays', 'уп', 40, firm1)
	let product4 = new Product('Марічка десерт', 'уп', 20, firm1)
	let product5 = new Product('Олія', 'бут', 100, firm2)
	let product6 = new Product('Майонез', 'уп', 55, firm2)
	let product7 = new Product('соус', 'уп', 25, firm2)

	let warehouse1 = new Warehouse()
	warehouse1.registration(product1, product2, product3, product4, product5, product6, product7)
	document.write(`<div style="font-size:24px; margin-bottom:10px;">Зареєстровані товари </div><br>${warehouse1}`)
	document.write(`<div style="font-size:24px; margin-bottom:10px;">Відвантаження </div>`)
	warehouse1.shipment('Сік Садочок', 10)
	warehouse1.shipment('pepsi-cola', 50)
	warehouse1.shipment('Марічка десерт', 30)
	warehouse1.shipment('Кeтчуп', 20)
	document.write(`<div style="font-size:24px; margin-bottom:10px;">Товари після відвантаження</div><br>${warehouse1}`)
	document.write(`<div style="font-size:24px; margin-bottom:10px;">фільтрація за назвою товару </div>`)
	document.write(`${warehouse1.filteringByProductName('Lays')}<br>`)
	document.write(`<div style="font-size:24px; margin-bottom:10px;">фільтрація за назвою фірми </div>`)
	document.write(`${warehouse1.filteringByCompanyName('Щедро')}<br>`)



}