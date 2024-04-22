"use strict";
// Basic types of ts
// string
const firstName = "my name is dipjol";
// number
const rollNumber = 11;
// boolean
const isStudent = true;
// undefined
const dontKnow = undefined;
// null
const notAssigned = null;
// array
const friends = ["Raihan", "Mizan", "Rohan"];
// friends.push(2) //error
// এখানে আমি Array Type টা string হবে এসাইন করে দিসি, টাইপে। তাই এখানে string ছাড়া অন্য কিছু ব্যবহার করা যাবেনা। string ছাড়া অন্যকিছু দিলেই এরর দিবে।
const classRools = [1, 4, 6];
// classRools.push('rool') // error
// সেইম এটাও, এখানে নাম্বার ছাড়া অন্যকিছু Array তে দিলেই এরর দিবে।
// Touple
// এখন case যদি এমন হয় যে, একটা এরে তে নাম্বার এবং স্ট্রিং ২ টাই ইউজ করতে হবে। তাহলে কিভাবে করব? এই সমস্যা সমাধানের জন্য Tuple.
// Tuple হলো, কোনো এরে তে যদি নির্দিষ্ট ভাবে কয়টা element থাকবে, এবং Array element গুলোর অর্ডার টা কিভাবে হবে সেটা pre-define করে দেওা।
let nameAge = ["Raihan", 23];
// এখানে, Type এ ২ টা Type define করা আছে। ১. string, ২. number। তাই এই Array তে শুধু মাত্র ২ টা ইলিমেন্ট ই দেওা যাবে। এবং সেটা প্রথমে string এবং ২য় টা নাম্বার ই দিতে হবে। যদি অন্যকিছু ব্যবহার করতে হয়, তাহলে সেটা আগে টাইপে লিখে দিতে হবে।
// যেমনঃ
let nameAgeStudent = ["Raihan", 23, true];
