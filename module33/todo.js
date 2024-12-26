// function todos() {
//    fetch('https://jsonplaceholder.typicode.com/todos') 
//    .then(res => res.json())
//    .then(data => disTodos(data))
// }

// function disTodos(todos) {
//     console.log(todos);
//     const divContainer= document.getElementById('div-container');
//     for (const element of todos) {
//         // console.log(element);
//         const todoDiv = document.createElement('div');
//         todoDiv.classList.add('tDOOO');
//         todoDiv.innerHTML = ` <h4> userId: ${element.userId} </h4> 
//         <h5> id: ${element.id} </h5> 
//      <p> title: ${element.title} </p> 
//      <p>Is completed: ${element.completed === true ? 'completed' : 'not Completed'} </p> `;
//           divContainer.appendChild(todoDiv);   
//     }
// }
// todos();


//mcq

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 
  
