
if (confirm(`Почати   тестування?`)) {

	// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою

	// генеруємо масив з випадкових чисел

	/**
	 * 
	 * @param minValue - мінімальне число
	 * @param maxValue - максимальне число
	 * @returns  - рандомне число у заданих проміжках
	 */

	function getRandomNumber(minValue: number, maxValue: number): number {
		return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	}

	let arr = Array.from({ length: 30 }, () => getRandomNumber(1, 99))

	document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${arr}]</div><br>`)

	let changed
	let exchanges = 0
	let endIndex = arr.length
	do {
		changed = false
		for (let i = 1; i < endIndex; i++) {
			if (arr[i - 1] > arr[i]) {
				let tmp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = tmp
				changed = true
				exchanges++
			}
		}
		endIndex--

	}
	while (changed)

	document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${arr}] - Відсортований масив методом бульбашка</div><br>`)
	document.write(`<div style="fort-size:24px; margin-bottm:10px;">Кільлість обмінів ${exchanges}</div><br>`)


	// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.

	let arr1 = Array.from({ length: 30 }, () => getRandomNumber(1, 99))


	document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${arr1}]</div><br>`)

	let exchanges2 = 0
	let rightIndex = arr1.length
	let leftIndex = 0

	while (leftIndex < rightIndex) {
		let changed = false
		for (let i = leftIndex; i < rightIndex - 1; i++) {
			if (arr1[i - 1] > arr1[i]) {
				let tmp = arr1[i - 1]
				arr1[i - 1] = arr1[i]
				arr1[i] = tmp
				changed = true
				exchanges2++
			}
		}
		rightIndex--

		if (changed === false)
			break
		for (let i = rightIndex; i > leftIndex; i--) {
			if (arr1[i - 1] > arr1[i]) {
				let tmp = arr1[i - 1]
				arr1[i - 1] = arr1[i]
				arr1[i] = tmp
				changed = true
				exchanges2++
			}
		}
		leftIndex--

	}

	document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${arr1}] -Відсортований масив методом змішування </div><br>`)
	document.write(`<div style="fort-size:24px; margin-bottm:10px;">Кільлість обмінів ${exchanges2}</div><br>`)


	// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.

	let arr2 = Array.from({ length: 30 }, () => getRandomNumber(1, 99))

	document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${arr2}]</div><br>`)

	let exchanges3 = 0
	let key, i
	for (let k = 1; k < arr2.length; k++) {
		key = arr2[k]
		i = k - 1
		while (i >= 0 && arr2[i] > key) {
			arr2[i + 1] = arr2[i]
			i--
			exchanges3++
		}
		arr2[i + 1] = key

	}

	document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${arr2}] - Відсортований масив методом включення </div><br>`)
	document.write(`<div style="fort-size:24px; margin-bottm:10px;">Кільлість обмінів ${exchanges3}</div><br>`)

}