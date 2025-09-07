if (confirm(`Почати   тестування?`)) {

	// Задача 5. Дано масив імен. 
	// Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

	const names: string[] = ['John', 'Emily', 'Michael', 'Sarah', 'David', 'Olga', 'Jessica', 'Daniel', 'Sophia', 'Matthew'];
	document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${names}]</div><br>`)

	/**
	 * ф-я обмін елементів місцями
	 * @param A - элемент
	 * @param i - 1й індекс
	 * @param j - 2й індекс
	 */
	function swap(A: string[], i: number, j: number) {
		let tmp = A[i]
		A[i] = A[j]
		A[j] = tmp
	}

	/**
	 * поділ фрагмента на дві частини
	 * @param A - элемент
	 * @param p - 1й індекс
	 * @param q - 2й індекс
	 * @returns - повертає нову позицію pivot
	 */
	function partition(A: string[], p: number, q: number) {
		let pivot = A[q]
		let i = p - 1
		for (let j = p; j < q; j++) {
			if (A[j] <= pivot) {
				i = i + 1
				swap(A, i, j)
			}

		}
		swap(A, i + 1, q)
		return i + 1
	}

	/**
	 * ф-я швидка сортировка
	 * @param A - элемент
	 * @param p - 1й індекс
	 * @param q - останній індекс
	 * @returns - відсортований масив
	 */
	function quickSort(A: string[], p: number, q: number) {
		if (p >= q)
			return
		let i = partition(A, p, q)
		quickSort(A, p, i - 1)
		quickSort(A, i + 1, q)
	}

	quickSort(names, 0, names.length - 1)
	document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${names}]-швидке сортування </div><br>`)

	/**
	 * ф-я бінарний пошук
	 * @param arr -масив
	 * @param searchElement - елемент масиву
	 * @returns - індекс елементу
	 */

	function binarySearch(arr: string[], searchElement: string) {
		let start = 0
		let end = arr.length - 1
		while (start <= end) {
			const middle = Math.floor((start + end) / 2)
			if (arr[middle] === searchElement)
				return middle
			if (arr[middle] < searchElement)
				start = middle + 1
			if (arr[middle] > searchElement)
				end = middle - 1
		}
		return false
	}

	let search = binarySearch(names, 'Olga')
	if (search === false)
		document.write('<div style="fort-size:24px; margin-bottm:10px;">ім’я «Olga» відсутнє в масиві</div><br>')
	else
		document.write(`<div style="fort-size:24px; margin-bottm:10px;">ім’я «Olga» є в масиві, під індексом ${search}</div><br>`)


	// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
	//  чи є у масиві ім’я довжиною 5 символів і під яким індексом.

	/**
	 * поділ фрагмента на дві частини
	 * @param A - элемент
	 * @param p - 1й індекс
	 * @param q  - 2й індекс
	 * @returns - повертає нову позицію pivot
	 */

	function partition1(A: string[], p: number, q: number) {
		let pivot = A[q].length
		let i = p - 1
		for (let j = p; j < q; j++) {
			if (A[j].length <= pivot) {
				i = i + 1
				swap(A, i, j)
			}

		}
		swap(A, i + 1, q)
		return i + 1
	}

	/**
	 * ф-я швидка сортировка
	 * @param A - элемент
	 * @param p - 1й індекс
	 * @param q - останній індекс
	 * @returns - індекс елементу
	 */
	function quickSort1(A: string[], p: number, q: number) {
		if (p >= q)
			return
		let i = partition1(A, p, q)
		quickSort1(A, p, i - 1)
		quickSort1(A, i + 1, q)
	}

	quickSort1(names, 0, names.length - 1)
	document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${names}]-швидке сортування </div><br>`)

	/**
	 * ф-я бінарний пошук
	 * @param arr -масив
	 * @param lengthElement - елемент масиву
	 * @returns - індекс елементу
	 */
	function findIndex(arr: string[], lengthElement: number) {
		let start = 0
		let end = arr.length - 1
		while (start <= end) {
			const middle = Math.floor((start + end) / 2)
			if (arr[middle].length === lengthElement)
				return middle
			if (arr[middle].length < lengthElement)
				start = middle + 1
			if (arr[middle].length > lengthElement)
				end = middle - 1
		}
		return false
	}

	let length = findIndex(names, 5)
	if (length === false)
		document.write('<div style="fort-size:24px; margin-bottm:10px;">У масиві відсутнє ім’я довжиною 5 символів</div><br>')
	else
		document.write(`<div style="fort-size:24px; margin-bottm:10px;">У масиві є ім’я довжиною 5 символів, під індексом ${length}</div><br>`)


	// Задача 7. Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). 
	// Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.

	/**
	 * ф-я формування рандомних рядків багатовимірного масиву
	 * @param elCount - довжина ряда
	 * @param min - мінімальне значення елементу
	 * @param max - максимальне значення елементу
	 * @returns - рядок масиву
	 */
	const getRandomRow = (elCount: number, min: number, max: number) =>
		Array.from({ length: elCount }, () => min + Math.floor(Math.random() * (max - min + 1)))

	/**
	 * ф-я формування рандомного двовимірного масиву
	 * @param rowCount - кількість рядків
	 * @param elCount - довжина ряда
	 * @param min - мінімальне значення елементу
	 * @param max - максимальне значення елементу
	 * @returns - двовимірний масив
	 */
	const getRandomMatrix = (rowCount: number, elCount: number, min: number, max: number) =>
		Array.from({ length: rowCount }, () => getRandomRow(elCount, min, max))

	const arrNumbersDays = getRandomMatrix(4, 8, 1, 7)
	arrNumbersDays.forEach(row => document.write(` <div style="fort-size:24px; margin-bottm:10px;">[${row}]</div><br>`))

	let counter = 0
	let counters = []

	for (const row of arrNumbersDays) {
		for (const element of row) {
			if (element === 7)
				counter++
		}
		counters.push(counter)
		counter = 0
	}
	document.write(`<div style="fort-size:24px; margin-bottm:10px;">кількість неділь - ${counters}</div>`)


}