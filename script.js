const postWrapper = document.getElementById('post-wrapper')
fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15`)
.then(res => res.json())
.then(posts => {
   
    posts.map(post => {
        let updatedTitle = post.title[0].toUpperCase() + post.title.slice(1);
        let postItem = document.createElement('div')
        postItem.classList.add('post-item')

        let postBody = document.createElement('p')
        postBody.classList.add('post-body')
        postBody.innerHTML = `<strong>${updatedTitle}</strong>`

        let postAuthor = document.createElement('span')
        postAuthor.classList.add('post-author')

        let postCommentsTitle = document.createElement('h5')
        postCommentsTitle.classList.add('post-comments-title')

        let postCommentsBody = document.createElement('p')
        postCommentsBody.classList.add('post-comments-body')

        let postCommentsEmail = document.createElement('h6')
        postCommentsEmail.classList.add('post-comments-email')

        albumsElement.append(postAlbumElementsTitle)
        postItem.append(postAuthor,postBody,postCommentsTitle,postCommentsBody,postCommentsEmail)
        postWrapper.append(postItem)
       
fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
.then(res => res.json())
.then( users => {
    
    postAuthor.innerHTML = `<a href="./user.html?user_id=${users.id}"> <strong>${users.name}</strong> </a>`
    

fetch(`https://jsonplaceholder.typicode.com/comments/${post.id}/?_limit=30`)
.then(res => res.json())
.then(comments => {
       postCommentsTitle.textContent = comments.name
       postCommentsBody.textContent = comments.body 
       postCommentsEmail.textContent = comments.email
})})})})      

    

 
let albumsElement = document.createElement('div')
albumsElement.classList.add('albums-element')
let postAlbumElementsTitle = document.createElement('h2')
postAlbumElementsTitle.classList.add('post-album-elements-title')
postAlbumElementsTitle.textContent = 'Albums:'

fetch('https://jsonplaceholder.typicode.com/albums?_limit=30')
  .then(res => res.json())
  .then(albums => {

    albums.map(album => {
      let albumItem = document.createElement('div');
      albumItem.classList.add('album-item');
    
      let albumItemTitle = document.createElement('h3')
      let albumUsername = document.createElement('h5')
      
      let albumPhotoElement = document.createElement('img')

      fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
        .then(res => res.json())
        .then(user => {
          
          fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=1`)
            .then(res => res.json())
            .then(photos => {
              photos.map(photo => {
                                    albumPhotoElement.src = `${photo.thumbnailUrl}`
                                     albumItemTitle.innerHTML = `<a href="./album.html?album_id=${album.id}&album_title=${album.title}&user_id=${album.userId}&user_name=${user.name}">${album.title}</a>`
                                     albumUsername.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`
                                                                
            albumItem.append(albumItemTitle,albumUsername,albumPhotoElement)      
            albumsElement.append(albumItem)
            })
            
        })})
        document.body.append(postAlbumElementsTitle,albumsElement)
    })})
