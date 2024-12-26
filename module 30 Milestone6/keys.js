const glass={
    name : 'glass', color: 'golden', price: 12, isCleaned:true
}
console.log(glass);
const keys = Object.keys(glass); //[ 'name', 'color', 'price', 'isCleaned' ]
// console.log(keys);

const values = Object.values(glass); //[ 'glass', 'golden', 12, true ]
// console.log(values);

const pair = Object.entries(glass);//jorai jorai dibe 
// console.log(pair);

// array of array or 2 dimensional array
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// ]

// delete glass.isCleaned;
// console.log(glass);

const {isCleaned,...rest}= glass;
// console.log(glass);
// console.log(rest);
// Object.freeze(glass);
// glass.source = 'Bangladesh';
// glass.price = 50000;
// delete glass.name;
// console.log(glass);

Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 7000;
delete glass.name;
console.log(glass);
