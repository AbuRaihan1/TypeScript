{
  // interface
  // interface অনেকটা Type এলিয়াস এর মতোই। তবে, Type allias ব্যবহার করা হয় প্রিমিটিভ ভ্যালুর ক্ষেত্রে। interface এ নন প্রিমিটিভ ভ্যালু ডিফাইন করা যায় না। কারণ সেখানে লিখতেই হয় object দিয়ে। যেমনঃ

  type rollNumber = number;

  type person = {
    name: string;
    age: number;
    isAdult: boolean;
  };

  interface personData {
    name: string;
    age: number;
    isAdult: boolean;
  }
  //   সকল প্রিমিটিভ এর ক্ষেত্রে টাইপ এলিয়াস ব্যবহার করব।
  //   আর নন-প্রিমিটিভ এর ক্ষেত্রে চাইলে টাইপ এলিয়াস এবং ইন্টারফেস ২ টাই ব্যবহার করা যাবে।

  //   যদি অবজেক্টের মধ্যে প্রপার্টি বাড়াতে হয়, তাহলে আমরা টাইপ এলিয়াস এবং ইনটারফেস ২ টাই ব্যবহার করতে পারি। Type allias এর ক্ষেত্রে intersection ব্যবহার করে। এবং interface এর ক্ষেত্রে extends ব্যবহার করে।  যেমন ঃ

  type User1 = {
    name: string;
    age: number;
    gender: string;
  };

  type UserWithRole1 = User1 & { role: string };
  const user1: UserWithRole1 = {
    name: "riahan",
    age: 20,
    gender: "male",
    role: "Front-end Developer",
  };

  //   এখানে Type Allias এ intersection ব্যবহার করে অবজেক্ট এ নতুন প্রপার্টী যোগ করা হয়েছে।

  interface User2 {
    name: string;
    age: number;
  }
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: UserWithRole2 = {
    name: "unknown",
    age: 423,
    role: "manager",
  };
}
