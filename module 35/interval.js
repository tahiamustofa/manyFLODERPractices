console.log(1)
// setTimeout(()=>{console.log(2)},1000)
let n=10;
const intervalID= setInterval(() => {
    console.log(++n)  
    if (n===15) {
        clearInterval(intervalID);
    } 
}, 1000);
console.log(3)
console.log(4)
console.log(5)