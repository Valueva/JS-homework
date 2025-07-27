'use strict'

// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
// Обчислити вартість кожного товару окремо та загальну вартість. 
// Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

const price1 = parseFloat(prompt('введіть вартість першого товару', '0'))
const quantity1 = parseFloat(prompt('введіть кількість першого товару', '0'))
const price2 = parseFloat(prompt('введіть вартість другого товару', '0'))
const quantity2 = parseFloat(prompt('введіть кількість другого товару', '0'))
const price3 = parseFloat(prompt('введіть вартість третього товару', '0'))
const quantity3 = parseFloat(prompt('введіть кількість третього товару', '0'))


const total1 = price1 * quantity1
const total2 = price2 * quantity2
const total3 = price3 * quantity3

const totalCost = total1 + total2 + total3

document.write(`<h3>Задача 6.</h3>
                <p> З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
 							Обчислити вартість кожного товару окремо та загальну вартість. 
 							Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
					</p>
					 
                <h4>Чек.</h4>
					 <table border=2px>
					 	<thead>
							<tr>
								<th> Назва товару</th>
								<th> Вартість за одиницю </th>
								<th> Кількість товару </th>
								<th> Загальна вартість </th>
							</tr>
							<tr>
								<td> Товар1 </td>
								<td> ${price1} </td>
								<td> ${quantity1} </td>
								<td> ${total1} </td>
							</tr>
							<tr>
								<td> Товар2 </td>
								<td> ${price2} </td>
								<td> ${quantity2} </td>
								<td> ${total2} </td>
							</tr>
							<tr>
								<td> Товар3 </td>
								<td> ${price3} </td>
								<td> ${quantity3} </td>
								<td> ${total3} </td>
							</tr>
							<tr>
								<th colspan="3"> Загальна вартість </th>
								<th> ${totalCost} грн. </th>
							</tr>
							<tr>
							
						</thead>
					 </table>`)