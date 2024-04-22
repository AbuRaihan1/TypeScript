"use strict";
{
    // type allias
    // একি কাঠামোর বা একি ভ্যালুর যদি টাইপ গুলো বারবার থাকে, তাহলে সেখানে Allias Type ব্যবহার করা হয়। যেমন ঃ
    const student1 = {
        name: "raihan",
        age: 20,
        address: "Hazibag, Gazipur sadar, Gazipur",
    };
    const student2 = {
        name: "Mizan",
        age: 22,
        address: "Dammam, Saudi Arabia",
    };
    //এখানে আমরা একটা এলিয়াস টাইপ ক্রিয়েট করলাম। এখন স্টুডেন্ট বারবার লিখতে হবে না। এটা ডিফাইন করে দিলেই হবে। যেমন ঃ
    const sudent3 = {
        name: "Farabi",
        age: 22,
        address: "Hossein Market, Badda, Dhaka",
    };
    const sudent4 = {
        name: "Rohan",
        age: 14,
        address: "Baroghoriya, karimganj, kishoreganj",
    };
}
