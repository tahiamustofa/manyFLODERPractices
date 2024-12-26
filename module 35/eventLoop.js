// function a() {
//     console.log('a');
//     b() ;
//     console.log('aaa');
// }
// function b() {
//     console.log('b');
//     c();
//     console.log('bbb');
// }
// function c() {
//     console.log('c');
// }

// function x() {
//     console.log('x')
//     y();
//     console.log('xxx')
// }
// function y() {
//     console.log('y')
//     z();
//     console.log('yyy')
// }
// function z() {
//     console.log('z')
    
//     console.log('ZZZ')
// }

// function kuchbhi(){
//     console.log('Set time out');
// }
// setTimeout(() => {
//     console.log('Set time out');
// }, 1000);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// // a();
// // x();

// const seconds = new Date().getTime() / 1000;
// console.log(seconds)
// setTimeout(() => {
//   // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
//   console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
// }, 500);

// while (true) {
//   if (new Date().getTime() / 1000 - seconds >= 2) {
//     console.log("Good, looped for 2 seconds");
//     break;
//   }
// }

function name() {
  return 'kkchbhfhsg';
  // console.log('X=',100)
}

// console.log(name())

console.log("A");

setTimeout(function timeout() {
  console.log('Async-1')
} ,5000)

console.log("B");
setTimeout(function timeout() {
  console.log('Async-2')
} ,10000)
console.log("C");