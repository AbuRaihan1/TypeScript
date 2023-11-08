// learning function for typescript
// 1. normal function
function addNum(num1, num2) {
    var totalAddNum = num1 + num2;
    return totalAddNum;
}
console.log(addNum(2, 4));
// 2. arrow function
var addNumArrow = function (num1, num2) {
    return num1 + num2;
};
// with default value
var addNumArrowDefault = function (num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
};
// এখানে num2 এর ডিফল্ট ভ্যালু 10 দেয়া হইছে, যেটা এমনিতে নরমাল ফাংকশনেও দেওা যায়।
// object -> function = method
// এর মানে হচ্ছে, কোনো অবজেক্ট এর ভিতরে যদি ফাংকশন থাকে, তাহলে সেটাকে মেথড বলা হয়।
var poorUser = {
    firstName: "Abu Raihan",
    balance: 3,
    addBalance: function (balance) {
        console.log(this.balance);
        return "my current balance is ".concat(this.balance + balance);
    },
};
