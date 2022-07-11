const postWrapper = document.getElementById('post-wrapper')
fetch(`https://jsonplaceholder.typicode.com/posts?_limit=30`)
.then(res => res.json())
.then(posts => {
   
    posts.map(post => {
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

        
        postItem.append(postAuthor,postBody,postCommentsTitle,postCommentsBody,postCommentsEmail)
        postWrapper.append(postItem)
       
fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
.then(res => res.json())
.then( users => {
    postBody.innerHTML = `<strong><a href="./post.html?post_id=${post.id}&post_title=${post.title}&user_name=${users.name}&post_body=${post.body}">${updatedTitle}</a></strong>`   
    postAuthor.innerHTML = `<a href="./user.html?user_id=${users.id}"> <strong>${users.name}</strong> </a>`
    

fetch(`https://jsonplaceholder.typicode.com/comments/${post.id}/?_limit=30`)
.then(res => res.json())
.then(comments => {
       postCommentsTitle.textContent = comments.name
       postCommentsBody.textContent = comments.body 
       postCommentsEmail.textContent = comments.email
       
})   
})
})       
})