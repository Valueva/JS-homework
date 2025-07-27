'use strict'

// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

const yearBirth = parseInt(prompt('введіть рік народження', '2000'))
const yearCurrent = parseInt(prompt('введіть поточний рік', '2025'))


const yearsOld = yearCurrent - yearBirth


document.write(`<h3>Задача 2.</h3>
                <p>Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.</p>
					 
                <h4>рік народження - ${yearBirth}</h4>
					 <h4>поточний рік - ${yearCurrent}</h4>
					 <h4>вік - ${yearsOld} років</h4>`)