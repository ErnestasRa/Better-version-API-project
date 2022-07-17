import {toUpperCase, renderSingleAlbum, renderAllAlbums} from "./export.js"


let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');

function init() {
 if(userId){
  renderAlbumsByUserId(userId)
 }else {
  renderAllAlbums()
 }
}



function renderAlbumsByUserId(id) {  
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums?_embed=photos&_expand=user`)
      .then(res => res.json())
      .then(albums => {
        
        albums.map(singleAlbum => {
          let albumData = {
            album: singleAlbum,
            title: `Albums of ${toUpperCase(singleAlbum.user.name)}:`,
            createdBy: `${singleAlbum.user.name}`,
          }
  
          renderSingleAlbum(albumData);
        })
      })
  }
  
init()

// function renderSingleAlbum(data) {

//   let {album, title, createdBy} = data;

//   let albumItem = document.createElement('div');
//   albumItem.classList.add('album-item');
  
//   postAlbumElementsTitle.textContent = title;

//   let randomIndex = Math.floor(Math.random() * album.photos.length);

//   albumItem.innerHTML = `<h3><a href="./album.html?album_id=${album.id}&album_title=${album.title}&user_id=${album.userId}&user_name=${album.user.name}">${toUpperCase(album.title)}</a> (${album.photos.length})</h3>
//                         ${createdBy}
//                         <img src="${album.photos[randomIndex].thumbnailUrl}">`;

//                         albumsElement.prepend(albumItem); 
//                         postAlbumElementsTitle.innerHTML = `album of ${createdBy}`
//                         document.body.append(albumsElement)
// }