// 1 var,let ,const 
// if (condition) {
// //    var er baire jai , let and const jaina 
// }

//2 default perameter

//3 template string 
const a = 56;
const numbers =[9, 89, 78, 67];
const person ={
    name:'joha moni'
}
const message = `hi I am ${person.name} my num is a : ${a} ans array is 
${numbers[3]}`
// console.log(message);

// 4 arrow function
const square = x => x*x;
const sum =(a,b)=> a+b;

//  5 destructuring and spread operator
const {name,z,...rest} = {x:5, y:9, z:8, name:'mehu pakhi', age:0 }
// console.log(rest);
 const [first,se2nd,...others] = ['ayish', 'musab','keyvan','aliza','ayesha','uma','mahir']
//  console.log(others);
console.log(first)

// 6
Object.keys,
Object.values,
Object.entries
// 7 for of used in array and string
// 8 for in used in object