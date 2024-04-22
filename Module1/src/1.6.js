"use strict";
// function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 56));
const addArrow = (num1, num2) => num1 + num2;
// object => function => method
const person = {
    name: "Raihan",
    age: 20,
    balance: 0,
    addMoney: function (newBalance) {
        return `My new balance is ${this.balance + newBalance} TK`;
    },
};
