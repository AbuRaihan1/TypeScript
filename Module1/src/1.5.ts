// Reference type -> object

const user: {
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
} = {
  firstName: "MD",
  lastName: "Raihan",
};

// এখন, এখানে যদি আমার যেকোনো একটা ডাটা অপশনাল থাকে, যেমন Middle Name অপশনাল হতে পারে, কারণ অনেকের ই মিডল নেম থাকেনা, সেক্ষেত্রে অপশনাল বলে দিতে হবে। অপশনাল ডিফাইন করার জন্যে, Property Name এর পরে কোয়েসচন(?) মার্ক দিয়ে দিতে হয়।

// literel type
// যখন কোনো Property এর value ফিক্সড থাকবে, এবং সেটা টাইপ ডিফাইন এর সময় উল্লেখ করে দেওা হবে, সেটাকে বলে লিটারেল টাইপ। লিটারেল টাইপ ডিফাইন করলে এখানে আর অন্যকোনো value ব্যবহার করা যায় না।

const company: {
  name: "Programming Hero"; // literal type
  designition: string;
  location: string;
} = {
  name: "Programming Hero",
  designition: "Multiple Service",
  location: "Dhaka, Bangladesh",
};

// এখানে যেমন company অবজেক্ট টায় name টা ফিক্সড করে দেয়া, এর ভ্যালু চাইলে আর অন্যকিছু দিতেও পারবেনা। এটাকে বলে Literal Type

// অথবা যদি কোনো property চেঞ্জ করতে না দেওা হয়, তাহলে readonly ব্যবহার করা যায়। নিচের প্রোপারটি টা তে readOnly করে দিয়েছি। এটা আর চেঞ্জ করা যাবেনা। চেঞ্জ বলতে, re-assign করা যাবেনা।

const checkReadOnly: {
  readonly company: string;
} = {
  company: "My Software company",
};
// checkReadOnly.company = 'Something New' // error, cause it's readonly
