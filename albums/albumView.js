import{toUpperCase, renderListElement} from "../functions.js"
import {getAlbumPhotos} from "./albumsController.js"

async function renderAlbum() {
    let queryParams = document.location.search;
    let urlParams = new URLSearchParams(queryParams);
    let albumTitle = urlParams.get('album_title')
    let userId = urlParams.get('user_id')
    let userName = urlParams.get('user_name')
    let albumItemWrapper = document.getElementById('album-item-wrapper')
    albumItemWrapper.innerHTML = `<h1>Album:</h1>`
    
    let photos = await getAlbumPhotos()  

    let albumElement = document.createElement('div')
    albumElement.classList.add('album-element')

    let albumTitleElement = document.createElement('h4')
    albumTitleElement.innerHTML = `${toUpperCase(albumTitle)}`

    let albumAuthor = document.createElement('h5')
    albumAuthor.innerHTML = `<strong>Author:</strong> <a href="./user.html?user_id=${userId}&user_name="${userName}">${userName}</a>`

    let albumPhotosElement = document.createElement('div')
    albumPhotosElement.classList.add('album-photos-element')
          
    photos.map(photo => {
        renderListElement({
            content: `<img src="${photo.thumbnailUrl}">`,
            href: ``,
            parentElement: albumPhotosElement,
            class: 'album-photos'
        })
    }) 
    albumElement.append(albumTitleElement,albumAuthor,albumPhotosElement)
    albumItemWrapper.append(albumElement)
}


export default renderAlbum