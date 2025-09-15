"use strict";
if (confirm(`Почати   тестування?`)) {
    // Задача 3. Розробити клас MultChecker для перевірки таблиці множення
    // Поля
    // Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
    // Кількість правильних відповідей
    // Кількість неправильних відповідей
    // Методи
    // Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
    // Перевірка правильності вказаної відповіді
    // render - виведення інформації про тестування на екран
    class MultChecker {
        constructor(initNumber) {
            // ---- властивості ---
            this.numberChecking = initNumber;
            this.numberCorrectAnswers = 0;
            this.numberIncorrectAnswers = 0;
            this.randomNumber = 0;
        }
        // ---- методи ---
        // генерування другого числа
        getRandomNumber() {
            this.randomNumber = Math.floor((Math.random() * 10) + 1);
            return this.randomNumber;
        }
        // Генерування прикладу 
        getExample() {
            return this.numberChecking * this.randomNumber;
        }
        //відповідь користувача
        getUserAnswer() {
            let userAnswer = Number(prompt(`${this.numberChecking} * ${this.getRandomNumber()}`, '0'));
            return userAnswer;
        }
        // підрахунок вірних відповідей
        getNumberCorrectIncorrectAnswers() {
            return this.getUserAnswer() === this.getExample() ? this.numberCorrectAnswers++ : this.numberIncorrectAnswers++;
        }
        render() {
            document.write(`Кількість правильних відповідей - ${this.numberCorrectAnswers} <br>`);
            document.write(`Кількість неправильних відповідей - ${this.numberIncorrectAnswers} <br>`);
        }
    }
    const checker = new MultChecker(8);
    for (let i = 0; i < 5; i++) {
        checker.getNumberCorrectIncorrectAnswers();
    }
    checker.render();
}
