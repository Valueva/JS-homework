'use strict'




if (confirm('Почати тестування?')) {

	// Задача 2. Байрактар. З верхньої частини екрану у 
	// випадковій позиції по горизонталі з’являються танки, 
	// які їдуть вниз. При кліку на танк він вибухає і зникає з екрану. 


	class Bayraktar {
		constructor(imagesObj, maxStep, maxSpeed, cssObj) {
			this.imagesObj = imagesObj
			this.maxStep = maxStep
			this.maxSpeed = maxSpeed
			this.cssObj = cssObj
		}

		getRandomValue(minValue, maxValue) {
			return (
				minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
			)
		}

		// початкові координати позиціі

		setInitPositionCoordinates() {
			this.left = this.getRandomValue(0, 100)
			this.top = 0
		}

		// встановлюємо позиції об'єкту

		setTankPosition() {
			this.tank.style.top = this.top + '%'
			this.tank.style.left = this.left + '%'
		}

		// исходное положение

		setInitTankPosition() {
			this.setInitPositionCoordinates()
			this.setTankPosition()
		}

		// довжина шагу руху
		setInitDirection() {
			this.vy = this.getRandomValue(1, this.maxStep)
		}
		// оновлення координат

		updateCoordinates() {
			this.top += this.vy
			if (this.top > 100) this.top = 0
		}

		move() {
			this.updateCoordinates()
			this.setTankPosition()
		}

		// дія при кліку
		onTap() {
			clearInterval(this.interval)
			this.tank.src = this.imagesObj.explosion
			setTimeout(() => {
				this.tank.src = '';
			}, 1000)
		}

		render(containerSelector) {
			const img = document.createElement('img')
			img.src = this.imagesObj.alive
			img.className = this.cssObj.containerClass
			this.tank = img
			this.tank.onclick = this.onTap.bind(this)
			this.setInitTankPosition()
			this.setInitDirection()
			this.interval = setInterval(() => this.move(), this.maxSpeed)
			if (containerSelector) {
				document.querySelector(containerSelector).append(img)
			}
		}
	}


	//---------------
	const imagesObj = {
		alive: './img/images.jpg',
		explosion: './img/img_1.png',
	}
	for (let i = 0; i < 10; i++) {
		const bayraktar = new Bayraktar(
			imagesObj,
			Math.random() * 6,
			Math.random() * 800,
			{
				containerClass: 'bayraktar',
			}
		)
		bayraktar.render('body')
	}

}


