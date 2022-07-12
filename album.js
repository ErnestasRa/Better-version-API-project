let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let albumId = urlParams.get('album_id');
let albumTitle = urlParams.get('album_title')
let userId = urlParams.get('user_id')
let userName = urlParams.get('user_name')



function init(){
    renderAlbum()
}

function renderAlbum() {
    let albumItemWrapper = document.getElementById('album-item-wrapper')
    albumItemWrapper.innerHTML = `<h1>Album:</h1>`



    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=20`)
    .then(res => res.json())
    .then(photos => {
    let albumElement = document.createElement('div')
    albumElement.classList.add('album-element')

    let albumTitleElement = document.createElement('h4')
    albumTitleElement.innerHTML = `${albumTitle}`

    let albumAuthor = document.createElement('h5')
    albumAuthor.innerHTML = `<a href="./user.html?user_id=${userId}">${userName}</a>`

    let albumPhotosElement = document.createElement('div')
    albumPhotosElement.classList.add('album-photos-element')
    
    photos.map(photo => {
        let albumImgElement = document.createElement('img')
        albumImgElement.src = `${photo.thumbnailUrl}`
        albumPhotosElement.append(albumImgElement)
    }) 
    albumElement.append(albumTitleElement,albumAuthor,albumPhotosElement)
    albumItemWrapper.append(albumElement)
 
})
}

init()