// 1
let array=[1,3,5,7,9];
let even=[];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const ini = element+1;
    even.push(ini);
    
}
// console.log(even) 


const even2 = array.map(p=>p+1);
// console.log(even2); 

// 2
array=[33,50,79,78,90,101,30];
const fil = array.filter(p=>p%10 === 0)
// console.log(fil);

const fin = array.find(m=>m%10 === 0)
// console.log(fin);

// 3
const instructor =[
    {name:'Doha',position:'senior'},
    {name:'mehu',position:'junior'},
    {name:'Ayesha',position:'senior'},

]

const snr = instructor.filter(n=>n.position === 'senior')
// console.log(snr)


// 4

const people =[
    {name:'mina',age:20},
    {name:'rina',age:15},
    {name:'fina',age:22},

]

const total = people.reduce(((pre,curren)=>pre+curren.age),0)
console.log(total);

let sum=0;
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    // console.log(element)
    sum= sum + element.age;
}
console.log(sum)
// interview question 
// people.splice(0,people.length);
// people=[];
// people.length =0;
// console.log(people)





// mcq

function min(nums) { 
    return Math.min(nums)
 }
// console.log(min( [1,3,2 ]));

const cube=x=> x*x*x; 
// console.log(cube(2))

const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);
const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y)
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
// console.log(output);



