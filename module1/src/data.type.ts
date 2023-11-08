// basic data types in typescript

// string
let firstName: string = "Abu raihan";

// number
let roll: number = 123;

// boolean
let isAdmin: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

let unKnown; // eta any type data hisebe count hobe. karon, kono type declare kora nai.

// specifically types array
let studentsName: string[] = ["Raihan", "Rohan", "Mizan"];
// ekhane array ta string er jonne define kora, tai ei arrayr moddhe shudhu string type value rakha jabe, string chara onno kono value rakhle push o hobena. initially rakha o jabena.

// evabe 'array' er moddhe 'string' type, 'number type' and etc type value rakha jay.

// touple,
// কেউ যদি চায় যে, তার এরে তে যেকোনো নির্দিষ্ট টাইপের ভ্যালু থাকবে, এবং সেটা সিকুয়েন্স অনুযায়ি, তাহলে সেখানে touple ব্যবহার করতে হবে।

// উদাহরণ স্বরুপ, নিচে একটা ভ্যারিয়েবল নিলাম ageName। আমি চাই যে, এখানে শুধু age এবং name এর ভ্যালু থাকবে, এবং আগে থাকবে age পরে থাকবে name। এক্ষেত্রে আমরা touple type ব্যবহার করতে পারি

let ageName: [number, string] = [12, "amar"];

// এখানে যদি আগে string এবং পরে number দেওা হয়, তাহলে এরর দিবে। কারণ, অলরেডি ডিফাইন করা আগে number হবে এবং পরে string

// object type

const users: {
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
  company: "Programming Hero"; // literal type
} = {
  firstName: "Raihan",
  middleName: "Ahmed",
  lastName: "Imran",
  isMarried: true,
  company: "Programming Hero",
};

// এখন উদাহরণ স্বরুপ কারো নামের মিডেল নামটা নেই। সেক্ষেত্রে এখানে যদি নাম / middleName অথবা যেকোনো একটা ভ্যালু না দেয়, তাহলে সেখানে এরর দেখাবে।

// তাই কেও যদি চায় যে আমার কোনো ভ্যালু অপশনাল থাকবে, অইটা দিলে দিবে না দিলে নাই, তাহলে টাইপ ডিক্লেয়ার এর আগে একটা ? (কোয়েশ্চন মার্ক) দিতে হবে।  যেমনটা middleName ভেরিয়েবল এর পরে দেওা হইসে।

// literal type
// আর এখানে company যে প্রোপার্টি টা আছে, এখানে company : 'Programming Hero' লিখা। এটা ফিক্সড করা, এখানে শুধু এই ভ্যালুটাই এপ্লিকেবল হবে। অন্যকোনো ভ্যালু এখানে এপ্লিকেবল হবেনা। তবে এটাকে চাইলে অন্যভাবেও করা যায়,

const litarelType: {
  company: string;
} = {
  company: "Programming Hero",
};

// এভাবেও করা যায়, কিন্তু এই ভ্যালু টা চেঞ্জ করা যাবে। তাই  company: string; এর আগে যদি readonly লিখে দেওা হয়, তাহলেই আর সেটা চেঞ্জ করা যাবেনা।
