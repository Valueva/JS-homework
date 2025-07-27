'use strict'

// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

const seconds = parseInt(prompt('введіть кількість секунд', '0'))



const hours = Math.floor(seconds / 3600)
const minutes = Math.floor((seconds % 3600) / 60)
const remainingSeconds = seconds % 60



document.write(`<h3>Задача 5.</h3>
                <p>Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.</p>
					 
                <h4>кількість секунд, що пройшла від початку доби = ${seconds}с.</h4>
					 <h4>Розраховано час: ${hours} годин, ${minutes} хвилин, ${remainingSeconds} секунд. </h4>`)