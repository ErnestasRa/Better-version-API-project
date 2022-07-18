import{renderListElement,toUpperCase} from "./export.js"
import  headerElement from "./header/header.js"
headerElement()
const postWrapper = document.getElementById('post-wrapper')

    function init() {
      renderMainPage()
    }

    function renderMainPage() {
      fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts&_limit=3`)
      .then(res => res.json())
      .then(data => {
          data.map(datas => {
              datas.posts.map(post => {
                      let updatedTitle = toUpperCase(post.title)
                      let postItem = document.createElement('div')
                      postItem.classList.add('post-item')
      
                      let postBody = document.createElement('p')
                      postBody.classList.add('post-body')
                      postBody.innerHTML = `<strong>${updatedTitle}</strong>`
      
                      let postCommentsTitle = document.createElement('h5')
                      postCommentsTitle.classList.add('post-comments-title')
      
                      let postCommentsBody = document.createElement('p')
                      postCommentsBody.classList.add('post-comments-body')
      
                      let postCommentsEmail = document.createElement('h6')
                      postCommentsEmail.classList.add('post-comments-email')
                      let postAuthor = document.createElement('span')
                      postAuthor.classList.add('post-author')
                      postAuthor.innerHTML = `<a href="./user.html?user_id=${datas.id}&user_name=${datas.name}"> <strong>${toUpperCase(datas.name)}</strong> </a>`
                      
                      postItem.append(postAuthor,postBody,postCommentsTitle,postCommentsBody,postCommentsEmail)
                      postWrapper.append(postItem)
                     
                      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                      .then(res => res.json())
                      .then(comments => {
                          comments.map(comment => {
                              postCommentsTitle.innerHTML = toUpperCase(comment.name)
                              postCommentsBody.innerHTML =  toUpperCase(comment.body)
                              postCommentsEmail.innerHTML = toUpperCase(comment.email)
                      })
                   })
              })
          })
      })
      let albumsElement = document.createElement('div')
      albumsElement.classList.add('albums-element')
      let postAlbumElementsTitle = document.createElement('h2')
      postAlbumElementsTitle.classList.add('post-album-elements-title')
      postAlbumElementsTitle.textContent = 'Albums:'
      
      
      fetch(`https://jsonplaceholder.typicode.com/users?_embed=albums`)
      .then(res => res.json())
      .then(data => {
          data.map(albums => {
                   let albumItem = document.createElement('div');
                    albumItem.classList.add('album-item');
                    let albumItemTitle = document.createElement('h3')
                    let albumUsername = document.createElement('h5')
                    let albumPhotoElement = document.createElement('img')
                    renderListElement({
                        content: toUpperCase(albums.name),
                        href:`./user.html?user_id=${albums.id}`,
                        parentElement: albumItemTitle,
                        class: 'album-element'
                    })
                    albums.albums.map(album => {
                      albumItemTitle.innerHTML = `${album.title}`
                      fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}?_embed=photos&_limit=1`)
                      .then (res => res.json())
                      .then(photos => {
                              photos.photos.map(photo => {
                                  albumPhotoElement.src = `${photo.thumbnailUrl}`

                              })
                          })
                      })
                      albumsElement.append(albumUsername,albumItemTitle,albumPhotoElement)
                    })
          })
          document.body.append(albumsElement)
    }


    init()