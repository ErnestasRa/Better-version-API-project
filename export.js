export let test = 'labas'
export let test2= 'sveikas'


export function renderListElement(data) {
    let itemElement = document.createElement('li');
    if(data.class) {
        itemElement.classList.add(data.class)
    }
    itemElement.innerHTML = `<a href="${data.href}">${data.content}</a>`;
    data.parentElement.append(itemElement);
}
export function toUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1)
}   
export function renderSingleAlbum(data) {
    let postAlbumElementsTitle = document.createElement('h2')
    postAlbumElementsTitle.classList.add('post-album-elements-title')
    let albumsElement = document.createElement('div')    

    let {album, title, createdBy} = data;
  
    let albumItem = document.createElement('div');
    albumItem.classList.add('album-item');
    
    postAlbumElementsTitle.textContent = title;
  
    let randomIndex = Math.floor(Math.random() * album.photos.length);
  
    albumItem.innerHTML = `<h3><a href="./album.html?album_id=${album.id}&album_title=${album.title}&user_id=${album.userId}&user_name=${album.user.name}">${toUpperCase(album.title)}</a> (${album.photos.length})</h3>
                          ${createdBy}
                          <img src="${album.photos[randomIndex].thumbnailUrl}">`;
  
                          albumsElement.prepend(albumItem); 
                          postAlbumElementsTitle.innerHTML = `album of ${createdBy}`
                          document.body.append(albumsElement)
  }
 export function renderAllAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos&_limit=15')
      .then(res => res.json())
      .then(albums => {
        albums.map(singleAlbum => {
          renderSingleAlbum({
            album: singleAlbum,
            title: 'All albums:',
            createdBy: `<div>Album created by: <a href="./user.html?user_id=${singleAlbum.user.id}">${toUpperCase(singleAlbum.user.name)}</a></div>`,
          });
        })
      })
    }
export function renderUserByIdPosts(id){
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
export  function renderAllUserPosts() {
    fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts`)
    .then(res => res.json())
    .then(users => {
      const postWrapper = document.getElementById('post-wrapper')
        users.map(user => {
            user.posts.map(post => {
                        let updatedTitle = toUpperCase(post.title);
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
