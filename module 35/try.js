// function checkAge() {
//     const err = document.getElementById('err');
//     const userAge= document.getElementById('userAge');
//     const textAge = userAge.value;
//    try {
//     // console.log(Baria);
//     const age = parseInt (textAge);
//     console.log(age);
//     if (isNaN(age))  {
//         // console.log('age not found',age,textAge);
//             throw "please enter a valid age ";
//     }
//     else if (age <18) {
//         throw "bachha notallowed ";
//     }
//     else if (age >40 ) {
//         throw "aged ppl  not   allowed ";
//     }
//      else {
//         err.innerText = '';
//     }
//    } 
//    catch (error) {
//     console.log(error)
//    err.innerText =` error:  ${error} `;
//    } 
//    finally{
//     console.log('ALL done')
//    }
   
// }
// 2 
async function toGet() {
    try {
       let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
       let dataJson = await data.json();
       console.log(dataJson); 
    } catch (error) {
        console.log(error)
    }
}

toGet();