function load() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data =>console.log(data))
}

function user() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))    
}
function displayUser(data) {
    console.log(data)
}
