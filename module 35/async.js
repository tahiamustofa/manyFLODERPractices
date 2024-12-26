// function fun() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// }
// fun();
// setTimeout(first,4000);
//  setTimeout(()=>{
    // console.log('sey lazzy set set');
//  },4000);
// console.log(2)
// console.log(3)

// function first() {
    // console.log(1) 
// }

// console.log('I')

// const timeoutID=setTimeout(()=>{console.log('eat')},5000)
// console.log('ICE Cream')
// // clearTimeout(setTimeoutID) -for stopping 
// let n=10;
// const intervalID= setInterval(() => {
//     console.log(n++)   
// }, 1000);

// clearInterval(intervalID) -for stopping 

async function getData() {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return result.json();
}
getData().then((data)=>console.log(data))