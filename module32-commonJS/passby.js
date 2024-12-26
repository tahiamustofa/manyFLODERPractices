//premetive types e reference er jonno change hoina 
let num1= 5;
let num2= 7;

function multiply (a,b){
    a=27;
const result = a * b;
return result;
}
console.log(num1); 
console.log(multiply (num1, num2));
console.log(num1); 
 
//objects and arrays are pass by reference 
let student1 = {name:'jalil', partner:'barsha'}
let student2 = {name:'raj', partner:'anika'}

function mkmovie(couple1,couple2) {
    couple1.name = 'ananta';
    couple2.partner = 'muntaha';
}
console.log(student1,student2);
mkmovie(student1,student2);
console.log(student1,student2);

