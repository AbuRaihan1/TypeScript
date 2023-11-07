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
