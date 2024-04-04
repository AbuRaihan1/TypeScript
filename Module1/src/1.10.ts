{
  // union type
  //  union Type হলো, জাভাস্ক্রিপ্ট এর or (||) এর অল্টারনেটীভ.

  type FrontEndDev = "Fazikaz Developer" | "Junior Developer";
  type FullStackDev = "Fakibazi Fullstack" | "Fullstack Developer";

  type Developer = FrontEndDev | FullStackDev;

  // এইযে এখানে জাভাস্ক্রিপ্ট এর or এর মতো, হয় এটা হবে না হয় অন্যটা হবে। এটিই হলো union type

  //   intersection type
  // ইনটারসেকশন টাইপ হলো, জাভাস্ক্রিপ্ট এর এন্ড অপারেটর এর অলটারনেটিভ।

  type Child = "girl child";
  type Baby = "Boy baby";

  type man = Child & Baby;
}
