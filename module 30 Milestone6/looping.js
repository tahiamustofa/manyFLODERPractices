//for of use in array or string not on object
//for in use on object
const numbers= [1,5,6,7,8,9];
for (let index = 0; index < numbers.length; index++) {
    const element =  numbers[index];
    // console.log(element);
}

// while
for (const element of numbers) {
    // console.log(element);
}

const nobab= 'Siraj ud doulla';

for (const element of nobab){
    // console.log(element);
}

const glass={
    name : 'glass', color: 'golden', price: 12, isCleaned:true
}
// for (const keys of  glass) {
//     // console.log(keys);
// }

for (const keys in glass) {
   const values= glass[keys];
    // console.log(keys,values);
}

const keys = Object.keys(glass);
// console.log(keys);

for (const key of keys) {
    const value = glass[key];
    // console.log(key,value);
}

array=[89,8,9,6,5]
for (let index = 0; index < array.length; index++) {
    const values = array[index];
    //    console.log(index,'and',values);
    }

    let fruits = ['watermelon','banana'];
    let fruitsCopy = [...fruits];
console.log(fruitsCopy)