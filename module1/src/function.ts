// learning function for typescript

// 1. normal function
function addNum(num1: number, num2: number) {
  const totalAddNum = num1 + num2;
  return totalAddNum;
}

console.log(addNum(2, 4));

// 2. arrow function

const addNumArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

// with default value
const addNumArrowDefault = (num1: number, num2: number = 10): number => {
  return num1 + num2;
};
// এখানে num2 এর ডিফল্ট ভ্যালু 10 দেয়া হইছে, যেটা এমনিতে নরমাল ফাংকশনেও দেওা যায়।

// object -> function = method
// এর মানে হচ্ছে, কোনো অবজেক্ট এর ভিতরে যদি ফাংকশন থাকে, তাহলে সেটাকে মেথড বলা হয়।

const poorUser = {
  firstName: "Abu Raihan",
  balance: 3,
  addBalance(balance: number) {
    console.log(this.balance);
    return `my current balance is ${this.balance + balance}`;
  },
};
