'use strict'




if (confirm('Почати тестування?')) {

	// Задача 1. Розробити калькулятор


	function getCalculations(operation) {
		const firstNumber = parseFloat(document.querySelector('.info__input--first').value)
		const secondNumber = parseFloat(document.querySelector('.info__input--second').value)
		const rez = operation(firstNumber, secondNumber)
		document.querySelector('.info__input--rez').value = rez
	}

	function getTotalSum(a, b) {
		return a + b
	}

	function getSubtraction(a, b) {
		return a - b
	}

	function getProduct(a, b) {
		return a * b
	}

	function getDivision(a, b) {
		return b !== 0 ? a / b : 'error'
	}

	window.onload = function () {
		document.querySelector('.info__button--add').onclick = () => getCalculations(getTotalSum)
		document.querySelector('.info__button--subtract').onclick = () => getCalculations(getSubtraction)
		document.querySelector('.info__button--multiply').onclick = () => getCalculations(getProduct)
		document.querySelector('.info__button--share').onclick = () => getCalculations(getDivision)
	}


}