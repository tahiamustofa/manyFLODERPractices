function post() {
   fetch('https://jsonplaceholder.typicode.com/posts') 
   .then(res => res.json())
   .then(data => dpPost(data))
}

function dpPost(pera) {
    const postCon= document.getElementById('postCon');
    for (const post of pera){
        console.log(post);
        const postdiv = document.createElement('div');
        postdiv.classList.add('post')
        postdiv.innerHTML = `<h4>User ${post.userId} </h4>
        <h5>Post: ${post.title} </h5>
        <p>Post Description: ${post.body}</p>
        `;
        postCon.appendChild(postdiv);
    }
    
}

post();