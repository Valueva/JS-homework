'use strict'

// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

const a = parseFloat(prompt('введіть число', '0'))
const b = parseFloat(prompt('введіть число', '0'))

const sum = a + b
const product = a * b
const quotient = a / b

document.write(`<h3>Задача 1.</h3>
                <p>Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці</p>
					 
                <h4>перше число = ${a}</h4>
					 <h4>друге число = ${b}</h4>
					
					 <br>
					 <h3>Результат</h3>
					 
					 <table border=2px>
					 	<thead>
							<tr>
								<th> операція </th>
								<th> результат </th>
							</tr>
							<tr>
								<td> cума </td>
								<td> ${sum} </td>
							</tr>
							<tr>
								<td> добуток </td>
								<td> ${product}  </td>
							</tr>
							<tr>
								<td> частка </td>
								<td> ${quotient}  </td>
							</tr>
						</thead>
					 </table>`)