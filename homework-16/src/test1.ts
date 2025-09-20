
if (confirm(`Почати   тестування?`)) {

	//      Магазин
	// Клас із полями #stock (масив з товарами (назва, кількість)) і #revenue. Дозвольте продавати товар, якщо є запас.

	type Product = {
		nameProduct: string
		quantityProduct: number
		priceProduct: number

	}

	class Shop {
		private _stock: Product[] = []
		private _revenue: number = 0
		constructor(initStock: Product[] = []) {
			this.Revenue
			this.Stock = [...initStock]
		}
		get Revenue() {
			return this._revenue
		}
		set Revenue(val) {
			if (val < 0) throw new Error('Revenue is incorrect')
			this._revenue = val
		}
		get Stock() {
			return this._stock
		}
		set Stock(val: Product[]) {
			if (val.length === 0) throw new Error('Stock is empty')
			this._stock = val
		}
		sellProduct(sellProd: string, quantity: number) {
			let product = this.Stock.find((el) => el.nameProduct === sellProd)
			if (!product) throw new Error('product not found')
			if (quantity > product.quantityProduct) {
				throw new Error('there is no such quantity')
			} else {
				product.quantityProduct -= quantity
				this.Revenue += product.priceProduct * quantity
			}
		}
		toString() {
			return `Продано товарів на  ${this.Revenue}`
		}
	}

	let shop1 = new Shop([
		{ nameProduct: 'Хліб', quantityProduct: 100, priceProduct: 14 },
		{ nameProduct: 'Молоко', quantityProduct: 20, priceProduct: 20 },
		{ nameProduct: 'Яйце', quantityProduct: 300, priceProduct: 6 },
		{ nameProduct: 'Сік', quantityProduct: 10, priceProduct: 80 },
		{ nameProduct: 'Томат', quantityProduct: 3, priceProduct: 70 },
	])

	try {

		shop1.sellProduct('Хліб', 2)
		shop1.sellProduct('Яйце', 10)
		shop1.sellProduct('Томат', 1)
		shop1.sellProduct('Сік', 1)

		document.write(shop1.toString());
	}
	catch (error) {
		if (error instanceof Error)
			document.write(error.message);
		else document.write("Неизвестная ошибка")

	}
}