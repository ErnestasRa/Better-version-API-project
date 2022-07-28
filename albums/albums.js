import { getAllAlbums, getAlbumById } from "./albumsController.js";
import  headerElement from "../header/header.js"
import {renderPaginationLinks} from "../pagination/pagination.js"

renderPaginationLinks(10, 'albums', 100)


headerElement()


let albumsWrapper = document.querySelector('#albums-wrapper');
let albumsWrapperTitle = document.createElement('h2');
document.body.prepend(albumsWrapperTitle);

function init() {
  let queryParams = document.location.search;
  let urlParams = new URLSearchParams(queryParams);
  let userId = urlParams.get('user_id');

  if (userId) {
    renderAlbumsByUserId(userId); 
  } else {
    renderAllAlbums();
  }
}

async function renderAlbumsByUserId(id) {
    let albums = await getAlbumById(id)
      albums.map(singleAlbum => {
        let albumData = {
          album: singleAlbum,
          title: `Albums of ${singleAlbum.user.name}:`,
          createdBy: '',
        }
        renderSingleAlbum(albumData);
      })
    }


async function renderAllAlbums() {
    let albums = await getAllAlbums()
      albums.map(singleAlbum => {
        renderSingleAlbum({
          album: singleAlbum,
          title: 'All albums:',
          createdBy: `<div>Album created by: <a href="./user.html?user_id=${singleAlbum.user.id}">${singleAlbum.user.name}</a></div>`,
        });
      })
    }


function renderSingleAlbum(data) {

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

init();