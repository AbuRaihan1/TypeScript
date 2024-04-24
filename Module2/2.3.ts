{
  // generic type
  // প্রয়োজন অনুসারে কোনো টাইপকে ডাইনামিক ভাবে ব্যবহার করাই হলো generic type

  //   const rollNumber: number[] = [23, 52, 13];
  //   const names: string[] = ["Raihan", "Dipjol", "Manna"];
  //   const boolArray: boolean[] = [true, false, true];

  //   এখানে আমরা প্রত্যেকটা এরে তে কি টাইপ হবে সেটা ডিফাইন করে দিচ্ছি। কিন্তু আমরা যদি generic type দিয়ে করি তাহলে এটা ডাইনামিকেলি ভাবেই করতে পারব।

  type GenericArray<T> = Array<T>;

  const rollNumber: GenericArray<number> = [23, 52, 13];
  const names: GenericArray<string> = ["Raihan", "Dipjol", "Manna"];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const users: GenericArray<{ name: string; age: number }> = [
    {
      name: "Raihan",
      age: 20,
    },
    {
      name: "Dipjol",
      age: 54,
    },
  ];

  //   generic tuple

  type GenericTuple<X, Y> = [X, Y];
  const nameAndAge: GenericTuple<string, number> = ["Raihan", 20];
}
