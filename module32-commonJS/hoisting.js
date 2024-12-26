print5();
// console.log(print10);
print10();

for (let index = 0; index < 5; index++) {
    
 console.log(index);
    
}
// console.log('outside',index)

function print5() {
  console.log('print5',5)  
}

var print10 = function (){
    console.log('print10',10)  
}