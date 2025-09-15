"use strict";
if (confirm(`Почати   тестування?`)) {
    const auto = {
        carMake: 'Skoda',
        tankSize: 60,
        numberAvailableLiters: 40,
        numberPlaces: 5,
        numberPassengers: 2,
        refueling: function (numLiters) {
            this.numberAvailableLiters = numLiters + this.numberAvailableLiters < this.tankSize ? numLiters + this.numberAvailableLiters : this.tankSize;
            return this.numberAvailableLiters;
        },
        toString: function () {
            return `${this.numberPassengers}`;
        },
        addingPassengers: function (numPass) {
            this.numberPassengers = numPass + this.numberPassengers < this.numberPlaces ? numPass + this.numberPassengers : this.numberPlaces;
            return this.numberPassengers;
        },
        disembarkingPassengers: function (numPass) {
            this.numberPassengers = this.numberPassengers - numPass >= 0 ? this.numberPassengers - numPass : 0;
            return this.numberPassengers;
        }
    };
    auto.refueling(30);
    console.log(auto.numberAvailableLiters);
    auto.addingPassengers(2);
    console.log(auto.numberPassengers);
    auto.disembarkingPassengers(3);
    console.log(auto.numberPassengers);
    document.write(`<div> Відповідь у консолі</div>`);
}
