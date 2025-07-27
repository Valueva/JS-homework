'use strict'

// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

const lengthCm = parseFloat(prompt('введіть довжину у сантиметрах', '0'))



const lengthMeter = lengthCm / 100
const lengthKm = lengthCm / 100000


document.write(`<h3>Задача 4.</h3>
                <p>Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів..</p>
					 
                <h4>довжина у сантиметрах = ${lengthCm}см.</h4>
					 <h4>довжина у метрах = ${lengthMeter}м.</h4>
					 <h4>довжина у кілометрах = ${lengthKm}км. </h4>`)