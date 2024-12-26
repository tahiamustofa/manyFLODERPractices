// var: no need to use var 
// let: allow it to reassign 
// const : do not allow it to reassign

const money = 25;
const rich = money+50;
// console.log(rich); 

let count = 0;
count = count + 10;
// console.log(count);

const numbers= [1,23,56,78,45,34];
numbers[0] = 99;
numbers.push(100,500,565,898,456);
// console.log(numbers);

// object
const stu = {
    name:'Nujaima',
    class:11
}
stu.name = 'Duha';
// stu ={name:'Tahia' }
// console.log(stu);


// loop
let sum=0;
for (let index = 0; index < 10; index++) {
    // const element = array[index];
    const kuchbhi = index; 
    sum = sum + kuchbhi;
    // console.log(sum); 
}
console.log(sum);

