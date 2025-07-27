'use strict'

// Задача 0. Обчислити значення виразів

const a = parseFloat(prompt('введіть число а', '0'))
const b = parseFloat(prompt('введіть число b', '0'))
const c = parseFloat(prompt('введіть число c', '0'))

const s1 = a + 12 + b
const s2 = Math.sqrt((a + b) / (2 * a))
const s3 = Math.cbrt((a + b) * c)
const s4 = Math.sin(a / (-b))

document.write(`<h3>Задача 0.</h3>
                <p>Обчислити значення виразів</p>
					 <p>1. S1=a+12+b</p>
					 <p>2. S2 = √((a + b) / (2 * a)</p>
					 <p>3. S3 = ∛((a + b) * c)</p>
					 <p>4. S4 = sin(a / (-b))</p>
                <h4>значення а = ${a}</h4>
					 <h4>значення b = ${b}</h4>
					 <h4>значення c = ${c}</h4>
					 <br>
					 <h3>Результат</h3>
					 
					 <h4>S1 = ${s1}</h4>
					 <h4>S2 = ${s2}</h4>
					 <h4>S3 = ${s3}</h4>
					 <h4>S4 = ${s4}</h4>`)