
if (confirm(`Почати   тестування?`)) {

	// Задача 4. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з
	// хлопців і дівчат.

	const namesBoys = ['Ivan', 'Victor', 'Mykola']
	const namesGirls = ['Olga', 'Anna', 'Elena', 'Katrina']

	document.write(`[${namesBoys}]-Масив хлопців<br>`)
	document.write(`[${namesGirls}]-Масив дівчат<br>`)

	/**
	 * ф-я рекурсія - комбінації
	 * @param arr - 1й масив
	 * @param arr1 -2й масив
	 * @param i - індекс
	 * @returns елементи масивів
	 */
	function generationCoupleDance(arr: string[], arr1: string[], i = 0) {
		if (i === arr.length)
			return
		for (let j = 0; j < arr1.length; j++) {
			document.write(`${arr[i]}-${arr1[j]},<br>`)
		}

		generationCoupleDance(arr, arr1, i + 1)

	}

	generationCoupleDance(namesBoys, namesGirls)
}