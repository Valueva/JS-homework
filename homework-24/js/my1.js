'use strict'




if (confirm('Почати тестування?')) {

	// Задача 1. Використовуючи один з АРІ 
	// https://github.com/public-apis/public-apis#animals
	// та функцію fetch організувати завантаження та відображення даних
	// Намагайтесь зробити це з використанням класів. Окремо клас для побудови розмітки. 
	// Окремо клас, який буде робити запити і повертати результати.


	class API {
		constructor(baseUrl) {
			this.baseUrl = baseUrl
		}
		async getRandomImg(count) {
			let response = await fetch(`${this.baseUrl}/breeds/image/random/${count}`)
			if (!response.ok) throw new Error('Проблема із запитом')
			const data = await response.json()
			return data.message
		}
	}


	class Markings {
		constructor(container) {
			this.container = document.querySelector(container);
		}

		render(images) {
			images.forEach(src => {
				const img = document.createElement('img');
				img.src = src;
				this.container.appendChild(img);
			});
		}
	}




	const api = new API('https://dog.ceo/api');
	const cards = new Markings('.page-gallery');


	async function loadImages() {
		try {
			const imageUrl = await api.getRandomImg(10);
			cards.render(imageUrl);

		} catch (error) {
			cards.showError('Проблема із завантаженням');
		}
	}

	document.querySelector('.button').addEventListener('click', loadImages);

	loadImages()
}

