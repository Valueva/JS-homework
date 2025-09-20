if (confirm(`Почати   тестування?`)) {

	// Задача 2. Створити клас TMoney для роботи з грошовими сумами. 
	// Сума повинна зберігатися у вигляді доларового еквіваленту. 
	// Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, 
	// та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі. 

	class TMoney {
		private _moneyDollars: number = 0
		private _dollarExchangeRate: number = 0
		constructor(initialMoneyDollars: number, initialExchange: number) {
			this.MoneyDollars = initialMoneyDollars
			this.DollarExchangeRate = initialExchange
		}
		get MoneyDollars() {
			return this._moneyDollars
		}
		set MoneyDollars(val) {
			if (val < 0) throw new Error('MoneyDollars is incorrect')
			this._moneyDollars = val
		}
		get DollarExchangeRate() {
			return this._dollarExchangeRate
		}
		set DollarExchangeRate(val) {
			if (val < 0) throw new Error('DollarExchangeRate is incorrect')
			this._dollarExchangeRate = val
		}
		exchange(val: number) {
			return val / this.DollarExchangeRate
		}
		addMoney(val: number) {
			this.MoneyDollars += this.exchange(val)
		}
		withdrawalMoney(val: number) {
			this.MoneyDollars -= this.exchange(val)
		}
		sumIncrease100() {
			return (this.MoneyDollars * this.DollarExchangeRate + 100) / this.MoneyDollars;
		}
		toString() {
			return `На рахунку ${this.MoneyDollars.toFixed(2)}$ - курс долара ${this.DollarExchangeRate}<br>`
		}
	}

	let newMoney
	try {
		newMoney = new TMoney(150, 42);
		document.write(newMoney.toString())
		newMoney.addMoney(2000)
		document.write(`Додали 2000гр <br> ${newMoney.toString()}`)
		newMoney.withdrawalMoney(1500)
		document.write(`Вилучили 1500гр <br> ${newMoney.toString()}`)
		document.write(`курсу долара, при якому сума у гривнях збільшиться на 100 - ${newMoney.sumIncrease100().toFixed(2)}`)
	}
	catch (error) {
		if (error instanceof Error)
			document.write(error.message);
		else document.write("Неизвестная ошибка")
	}






}