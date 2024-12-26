// map : loop through each element of the array and do the operation that
//  you passed in the call back function and hold the result from each 
//  operation in an array and finally returns you the array

const numbers=[4,5,2,8,10];

function doubleIt(num) {
    // console.log('number now:',num)
    return num*2;
}
const double2= n =>n*2; 

const result = numbers.map(doubleIt);
const result2 = numbers.map(double2);
const output =numbers.map(n =>n*2);


// console.log(output);

// const doubled =[];
// for (const num of numbers) {
//     const doubleEle=num*2;
// //    console.log(num); 
// doubled.push(doubleEle); 
// }
// console.log(doubled); 

const normal =[1,2,3,4,5]
for (let index = 0; index < normal.length; index++) {
    const element = normal[index];
    const element1 = normal[index]+1;
    console.log(element1, 'and' ,element);
    
}
