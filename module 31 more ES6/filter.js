// const nums= [1,5,15,5,6,9];
const players= [55,65,75,51,62,72];
// const selected = players.filter(n=>n>90);
const selected = players.filter(n=>n%2 === 0);
console.log(selected)

const friends = ['Tom','Jerry','PINK','Oggy','Ozzy'];
const odd = friends.filter(friend => friend.length%2 === 0);
console.log(odd);