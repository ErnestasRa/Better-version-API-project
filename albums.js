let albumsElement = document.createElement('div')
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
                                                                
            albumsElement.append(albumItemTitle,albumUsername,albumPhotoElement)      
            })
            
        })})
        document.body.append(postAlbumElementsTitle,albumsElement)
    })})
