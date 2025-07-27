'use strict'

// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

const costProduct = parseFloat(prompt('вартість одиниці товару', '0'))
const quantity = parseFloat(prompt('кількість', '1'))


const costTotal = costProduct * quantity
const vat = (costTotal * 5) / 100


document.write(`<h3>Задача 3.</h3>
                <p>Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).</p>
					 
                <h4>вартість одиниці товару: ${costProduct}</h4>
					 <h4>кількість: ${quantity}</h4>
					 <h4>загальнa вартість: ${costTotal} </h4>
					 <h4>ПДВ: ${vat} </h4>`)