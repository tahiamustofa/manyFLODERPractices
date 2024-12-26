function sum(a,b,c) {
    // console.log(arguments[4]);
    // console.log(typeof arguments);
   const args = [...arguments]; 
//    console.log(args);
    const result = a+b+c;
    return result;
}

const total = sum(5,10,10,90,140,20,30,40,50);
// console.log(total);
// console.log(typeof sum);
// console.log(sum.length);

