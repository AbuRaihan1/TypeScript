// function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(2, 56));

const addArrow = (num1: number, num2: number) => num1 + num2;

// object => function => method
const person = {
  name: "Raihan",
  age: 20,
  balance: 0,
  addMoney: function (newBalance: number) {
    return `My new balance is ${this.balance + newBalance} TK`;
  },
};
