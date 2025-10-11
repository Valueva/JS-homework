'use strict'




if (confirm('Почати тестування?')) {

	// Задача 19. Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). 
	// Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). 
	// Якщо користувач натискає на «Ок», то видаляти цю задачу.

	class Storage {
		constructor(storageKey) {
			this.storageKey = storageKey
		}


		loadData() {
			if (localStorage.getItem(this.storageKey))
				return JSON.parse(localStorage.getItem(this.storageKey))
			else return []
		}
		saveData(list) {
			localStorage.setItem(this.storageKey, JSON.stringify(list))
		}
		addTask(task) {
			const list = this.loadData()
			list.push(task)
			this.saveData(list)
		}
		deleteTask(id) {
			let list = this.loadData()
			list = list.filter((el) => el.id != id)
			this.saveData(list)
		}

		updateTask(task) {
			const list = this.loadData()
			const elIndex = list.findindex((el) => el.id == task.id)
			list[elIndex] = task
			this.saveData(list)
		}
		getTask(id) {
			const list = this.loadData()
			return list.find((el) => el.id == id)
		}
	}

	class Manager {
		constructor(storageKey, targetContainerSelector) {
			this.storageKey = new Storage(storageKey)
			this.targetContainerSelector = document.querySelector(targetContainerSelector)
			this.intervalId = null
		}


		createTaskEl(taskObj) {
			const container = document.createElement('div')
			container.innerText = `${taskObj.title} - ${taskObj.priority}`
			return container
		}


		printTasks() {
			const list = this.storageKey.loadData()
			this.targetContainerSelector.innerHTML = ''
			for (const task of list) {
				this.targetContainerSelector.append(this.createTaskEl(task))
			}
		}


		addTask() {
			const title = document.querySelector('.page-input__title').value
			const priority = document.querySelector('.page-input__priority').value

			if (!title.trim()) return alert('Введіть нові значення')

			const newTask = {
				id: Date.now(),
				title,
				priority,
			}

			this.storageKey.addTask(newTask)
			this.printTasks()
		}
		startRandomCheck(intervalMs = 13000) {

			this.intervalId = setInterval(() => {
				const tasks = this.storageKey.loadData()
				if (tasks.length === 0) {
					return
				} else {
					const randomIndex = Math.floor(Math.random() * tasks.length)
					const randomTask = tasks[randomIndex]
					const confirmed = confirm(`Виконати задачу: "${randomTask.title}"?`)
					if (confirmed) {
						this.storageKey.deleteTask(randomTask.id)
						this.printTasks()
					}
				}
			}, intervalMs)
		}


		init(addBtn, title, priority) {
			this.printTasks()
			document.querySelector(addBtn).addEventListener('click', () => {
				this.addTask(title, priority)
			})

			this.startRandomCheck()
		}

	}

	window.onload = function () {
		const manager1 = new Manager('tasks', '.page-tasks')
		manager1.init('.page-button', 'title', 'priority')
	}

}


