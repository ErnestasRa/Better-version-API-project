let albumsElement = document.createElement('div')
let postAlbumElementsTitle = document.createElement('h2')
postAlbumElementsTitle.classList.add('post-album-elements-title')
postAlbumElementsTitle.textContent = 'Albums:'

function init() {
  renderAllAlbums()
}
init()
function renderAllAlbums() {

  fetch(`https://jsonplaceholder.typicode.com/users?_embed=albums`)
  .then( res => res.json())
  .then(users => {
    users.map(albums => {
     
     albums.albums.map(album => {
              
            let albumItem = document.createElement('div');
            albumItem.classList.add('album-item');
          
            let albumItemTitle = document.createElement('h3')
            albumItemTitle.classList.add('album-item')
            albumItemTitle.innerHTML = `<a href="./album.html?album_id=${album.id}&album_title=${album.title}&user_id=${album.userId}&user_name=${albums.name}">${album.title}</a>`

            let albumUsername = document.createElement('h5')
            albumUsername.innerHTML = `<a href="./user.html?user_id=${albums.id}">${albums.name}</a>`


            albumUsername.classList.add('album-item')
            let albumPhotoElement = document.createElement('img')
            albumPhotoElement.classList.add('album-item')

            fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=1`)
            .then(res => res.json())
            .then(photos => {
              photos.map(photo => {
                albumPhotoElement.src = `${photo.thumbnailUrl}`
              })
            })


            albumsElement.append(albumItemTitle,albumUsername,albumPhotoElement)    
     }) 
    })
    document.body.append(postAlbumElementsTitle,albumsElement)
  })

}