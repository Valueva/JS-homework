'use strict'





if (confirm('Почати тестування?')) {
	// Задача 2. Дано Shop  -- клас, що містить список товарів 
	// (масив об’єктів класу Product (назва, ціна, кількість одиниць). 
	// Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»


	class Product {
		constructor(name, price, number) {
			this.name = name
			this.price = price
			this.number = number
		}
		getTotalCost() {
			return this.price * this.number
		}
	}


	class Shop {
		constructor(products) {
			this.products = products
		}
		*[Symbol.iterator]() {
			for (const product of this.products) {
				yield `${product.name}-${product.getTotalCost()}`
			}
		}
	}

	const products = [
		new Product("Хліб", 20, 3),
		new Product("Молоко", 30, 2),
		new Product("Яблука", 15, 5),
		new Product("Цукор", 40, 1),
		new Product("Кава", 120, 2),
		new Product("Чай", 80, 3),
		new Product("Сир", 150, 1),
		new Product("Масло", 70, 2),
		new Product("Яйця", 5, 10),
		new Product("Сіль", 25, 1)
	]

	const shop = new Shop(products)
	const container = document.querySelector('.page-container')
	for (const product of shop) {
		const p = document.createElement('p')
		p.innerText = `${product}`
		container.append(p)
	}

}
