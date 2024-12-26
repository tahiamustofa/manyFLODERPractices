let a = 5;

function add(n1,n2) {
    const res = n1 +n2+a;
    return res;
}
const sum = add(5,5);
// console.log(sum);
// console.log(res)

function one() {
  console.log('A') ;
  two(); 
  console.log('C') ; 
}
function two() {
    console.log('B') ; 
   
  }

  one();