function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postContainer = document.getElementById('posts-container')
    for(const post of posts){
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.innerHTML= `
        <h4> user- ${post.userId}</h4>
        <h5>post : ${post.title}</h5>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(postDiv)
    
    
    }
}

loadPosts()