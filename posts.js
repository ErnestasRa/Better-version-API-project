const postWrapper = document.getElementById('post-wrapper')

function init() {
    renderAllPosts()
}


init()

function renderAllPosts() {
    let queryParams = document.location.search;
    let urlParams = new URLSearchParams(queryParams);
    let userId = urlParams.get('user_id');

    if(userId) {
        renderUserByIdPosts(userId)
    } else {
        renderAllUserPosts()
    }
}
function renderAllUserPosts() {
    fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts`)
    .then(res => res.json())
    .then(users => {
        users.map(user => {
            user.posts.map(post => {
                        let updatedTitle = post.title[0].toUpperCase() + post.title.slice(1);
                        let postItem = document.createElement('div')
                        postItem.classList.add('post-item')
                
                        let postBody = document.createElement('p')
                        postBody.classList.add('post-body')
                        
                        let postAuthor = document.createElement('span')
                        postAuthor.classList.add('post-author')
                
                        let postCommentsTitle = document.createElement('h5')
                        postCommentsTitle.classList.add('post-comments-title')
                
                        let postCommentsBody = document.createElement('p')
                        postCommentsBody.classList.add('post-comments-body')
                
                        let postCommentsEmail = document.createElement('h6')
                        postCommentsEmail.classList.add('post-comments-email')

                        postBody.innerHTML = `<strong><a href="./post.html?post_id=${post.id}&post_title=${post.title}&user_name=${user.name}&post_body=${post.body}">${updatedTitle}</a></strong>`   
                        postAuthor.innerHTML = `<a href="./user.html?user_id=${user.id}&user_name=${user.name}"> <strong>${user.name}</strong> </a>`
                        
                        postItem.append(postAuthor,postBody,postCommentsTitle,postCommentsBody,postCommentsEmail)
                        postWrapper.append(postItem)

            })
        })
       
    })
}
function renderUserByIdPosts(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts`)
    .then(res => res.json())
    .then(users => {
            users.posts.map(post => {
                        let updatedTitle = post.title[0].toUpperCase() + post.title.slice(1);
                        let postItem = document.createElement('div')
                        postItem.classList.add('post-item')
                
                        let postBody = document.createElement('p')
                        postBody.classList.add('post-body')
                        
                        let postAuthor = document.createElement('span')
                        postAuthor.classList.add('post-author')
                
                        let postCommentsTitle = document.createElement('h5')
                        postCommentsTitle.classList.add('post-comments-title')
                
                        let postCommentsBody = document.createElement('p')
                        postCommentsBody.classList.add('post-comments-body')
                
                        let postCommentsEmail = document.createElement('h6')
                        postCommentsEmail.classList.add('post-comments-email')

                        postBody.innerHTML = `<strong><a href="./post.html?post_id=${post.id}&post_title=${post.title}&user_name=${users.name}&post_body=${post.body}">${updatedTitle}</a></strong>`   
                        postAuthor.innerHTML = `<a href="./user.html?user_id=${users.id}&user_name=${users.name}"> <strong>${users.name}</strong> </a>`
                        
                        postItem.append(postAuthor,postBody,postCommentsTitle,postCommentsBody,postCommentsEmail)
                        postWrapper.append(postItem)

            })
        })
       
    }

