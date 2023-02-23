function loadPost(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resource => resource.json())
    .then(json => displayData(json))

}

function displayData(posts){

    const container = document.getElementById('user-list')

    for(const post of posts){

        const li = document.createElement('li')

        li.innerHTML = `
        
        
        <h1>User - ${post.userId} </h1>
        <h2>Post - ${post.title}</h2>
        <h3>Post Description - ${post.body}</h3>
        
        `;

        container.appendChild(li)

    }

}

loadPost()