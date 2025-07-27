'use strict'

// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

const randomMonth = Math.floor(Math.random() * 12) + 1
const randomDay = Math.floor(Math.random() * 7)
const sum = randomMonth + randomDay




document.write(`<h3>Задача 7.</h3>
                <p>Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
					</p>
					 
                <h4> Випадковий номер місяця: ${randomMonth}</h4>
					 <h4> Випадковий номер дня тижня: ${randomDay}</h4>
					 <h4> Сума: ${sum}</h4>
					 `)