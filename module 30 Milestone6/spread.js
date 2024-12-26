const max = Math.max(1,9,99,599,6,89,777,5);
// console.log(max);

const maxArray = [1,9,99,499,6,89,77,5];
const maxXarray = Math.max(...maxArray);

// console.log(...maxArray);
// console.log(maxXarray);

// use spread operator to copy
 const friends = [1,56,7,87,65];
 const bondhu = friends;
//  friends.push(100);
//  console.log(bondhu)

 const dosto = [...friends]
 console.log(dosto);
 friends.push(1006);
//  console.log(friends);
//  console.log(dosto);

const sonka = [...friends,7]
friends.push(60);
// console.log(sonka);











