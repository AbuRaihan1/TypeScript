{
  // spread operator
  const mentors1 = {
    typeScript: "Raihan",
    nextJS: "Tanmoy",
    redux: "Sumit Saha",
  };

  const mentors2 = {
    html: "Ishan",
    css: "Jhankar vai",
  };

  const mentors = {
    ...mentors1,
    ...mentors2,
  };

  //   rest operator
  const greetingFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetingFriends("abul", "babul", "kabul", "ubul");
}
