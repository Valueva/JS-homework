'use strict'


// Задача 6. Дано послідовність цін товарів та назв (у окремих масивах).
//  Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]





if (confirm('Почати тестування?')) {

	const amountOfMoney = parseInt(prompt('Введіть кількість грошей', '500'))
	let arrProductsPrices = [1000, 20, 31, 1200, 499]
	let arrProductsTitles = ['cheese', 'juice', 'bread', 'meat', 'fish']

	function printArrProducts(arr, arr1) {
		let arrProducts = []
		for (let i = 0; i < arr.length; i++) {
			arrProducts.push(`${arr[i]} - ${arr1[i]}`)
		}
		document.write(`<div>${arrProducts}</div><br>`)
	}



	function getAvailableProduct(arrPrices, arrProducts, money) {
		let arrAvailableProduct = []
		for (let i = 0; i < arrPrices.length; i++) {
			if (arrPrices[i] <= money)
				arrAvailableProduct.push(`${arrProducts[i]} - ${arrPrices[i]}`)
		}
		return arrAvailableProduct
	}

	function getResult(arrAvailableProduct) {

		if (arrAvailableProduct.length === 0) {
			document.write('Нажаль у вас не вистачає коштів')
		} else {
			document.write(`Ви можете придбати:<br> ${arrAvailableProduct}`)
		}

	}


	const productsPricesTitles = printArrProducts(arrProductsTitles, arrProductsPrices)
	const availableProduct = getAvailableProduct(arrProductsPrices, arrProductsTitles, amountOfMoney)
	const result = getResult(availableProduct)



}

