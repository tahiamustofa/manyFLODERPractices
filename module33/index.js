function user2() {
    fetch('https://jsonplaceholder.typicode.com/users')
.then (res => res.json())
.then (data => anotherUser(data))
}

function anotherUser(data) {
    const userList= document.getElementById('userList');
   for (const element of data) {
    console.log(element.email);
    
    const li= document.createElement('li');
    li.innerText= element.name;
    userList.appendChild(li);
   }
}

function deletePost( ) {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
}

function patchPost( ) {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    
}

function createPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json)); 
}