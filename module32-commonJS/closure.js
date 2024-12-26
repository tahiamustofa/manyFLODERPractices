function kitchen( ) {
    let roast = 0;
    return function ( ) {
        roast ++;
        return roast;
    }
}

// const firstS = kitchen( );
// console.log(firstS());
// console.log(firstS());
// console.log(firstS());
// console.log(firstS());
// console.log(firstS());

function stopWatch( ) {
    let counter = 0;     
    return function() {  
        counter++;
        return counter;
        
    }
 }

 const w1= stopWatch();
//  console.log(w1());
//  console.log(w1());
//  const w2= stopWatch();
//  console.log(w2());
console.log(w1)