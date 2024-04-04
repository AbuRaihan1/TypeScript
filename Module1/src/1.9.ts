{
  // type allias
  // একি কাঠামোর বা একি ভ্যালুর যদি টাইপ গুলো বারবার থাকে, তাহলে সেখানে Allias Type ব্যবহার করা হয়। যেমন ঃ

  const student1: {
    name: string;
    age: number;
    address: string;
  } = {
    name: "raihan",
    age: 20,
    address: "Hazibag, Gazipur sadar, Gazipur",
  };

  const student2: {
    name: string;
    age: number;
    address: string;
  } = {
    name: "Mizan",
    age: 22,
    address: "Dammam, Saudi Arabia",
  };

  //   উপরের অব্জেক্ট দুটোতে, একি টাইপ এর ভ্যালু ২ বার ব্যবহার করা হয়েছে। এখন আরো যদি সেইম অবজেক্ট থাকে, তাহলে একই ভাবে যেনো এগুলো রিপিট না করতে হয়, সেজন্যই টাইপ এলিয়ায়। এখন আমরা টাইপ এলিয়াস এর ব্যবহার দেখবো।

  type Student = {
    name: string;
    age: number;
    address: string;
  };

  //এখানে আমরা একটা এলিয়াস টাইপ ক্রিয়েট করলাম। এখন স্টুডেন্ট বারবার লিখতে হবে না। এটা ডিফাইন করে দিলেই হবে। যেমন ঃ

  const sudent3: Student = {
    name: "Farabi",
    age: 22,
    address: "Hossein Market, Badda, Dhaka",
  };

  const sudent4: Student = {
    name: "Rohan",
    age: 14,
    address: "Baroghoriya, karimganj, kishoreganj",
  };
}
