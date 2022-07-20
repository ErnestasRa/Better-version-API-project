export function renderListElement(data) {
    let itemElement = document.createElement('li');
    if(data.class) {
        itemElement.classList.add(data.class)
    }
    itemElement.innerHTML = `<a href="${data.href}">${data.content}</a>`;
    data.parentElement.append(itemElement);

}

export function renderOptionElement(data) {
  let optionElement = document.createElement('option');
  optionElement.textContent = data.content;
  optionElement.value = data.value;

  data.parentElement.append(optionElement);
}

export function toUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1)
}   

export function renderAllAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos&_limit=15')
      .then(res => res.json())
      .then(albums => {
      
        albums.map(singleAlbum => {
          renderSingleAlbum({
            album: singleAlbum,
            title: 'All albums:',
            createdBy: `<div>Album created by: <a href="./user.html?user_id=${singleAlbum.user.id}">${singleAlbum.user.name}</a></div>`,
          });
        })
      })
  }


export function renderSingleAlbum(data) {
    let albumItemWrapper = document.getElementById('album-item-wrapper')
    let albumsWrapperTitle = document.createElement('h2');
    let {album, title, createdBy} = data;
  
    let albumItem = document.createElement('div');
    albumItem.classList.add('album-item');
    
    albumsWrapperTitle.textContent = title;
  
    let randomIndex = Math.floor(Math.random() * album.photos.length);
  
    albumItem.innerHTML = `<h3><a href="./album.html?album_id=${album.id}&album_title=${album.title}&user_id=${album.userId}&user_name=${album.user.name}">${album.title}</a> (${album.photos.length})</h3>
                          ${createdBy}
                          <img src="${album.photos[randomIndex].thumbnailUrl}">`;
  
    albumsWrapper.prepend(albumItem);
  }