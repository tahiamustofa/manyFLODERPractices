async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    console.log(result);
  }
  f();

//   ekhane new Date().getTime() / 1000 - seconds eta kmne 2 hoi? 
  const seconds = new Date().getTime() / 1000;

setTimeout(() => {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log(`Run after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 500);

while (true) {
    if (new Date().getTime() / 1000 - seconds >= 2) {
        console.log("Good, looped for 2 seconds");
        break;
    }  
}

