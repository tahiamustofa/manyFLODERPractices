// default -- if value is not provided , take this as a default 
function add(num1 = 99,num2=0,num3) {
    const result = num1 + num2 + num3;
    // console.log(num1,num2,result);

    return result;
}
const sum = add(5);
// const sum = add();

function fullname(first,last='') {
    const full = first + ' ' + last ;
    return full;
}
const nam = fullname('nuja');
// console.log(nam);

function friends(numbs=[]) {
    
}
function person(humans={}) {
    
}