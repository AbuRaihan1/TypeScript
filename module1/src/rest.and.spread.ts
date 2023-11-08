// spread operator
const vabis1: string[] = ["Sweety", "sumaiya"];
const vabis2: string[] = ["kelon", "ritu"];
vabis1.push(...vabis2);

// rest operator

const friendsList = (...friends: string[]) => {
  console.log(`hi ${friends}`);
};

friendsList("Raihan", "rohan", "mizan");
