const actor = {name: 'doha',
    age:4,
    phone:'09786753453',
    money:777777765544000
}
const {age:johar_boyos,phone}= actor; //destructuring
// const phone = actor.phone;
// const age = actor.age;
// const name =actor.name;

// console.log(johar_boyos)
// console.log(phone)
// console.log(name)

// array destructuring

const numbers = [6,58];
const [first,sec2nd ] = numbers;
const [x,y] = [21,333];

// console.log(first);
// console.log(sec2nd);

function dblthem(a,b) {
    return [a*2 ,b*2];
}
// console.log(dblthem(6,9))
const [protom,ditiyo] = dblthem(6,9);
console.log(protom,ditiyo);