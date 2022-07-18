async function getAllAlbums() {
    let res = await fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos&_limit=15');
    let allAlbums  = await res.json();
    return allAlbums;
   }
   
async function getAlbumById() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums?_embed=photos&_expand=user`)
    let albumById = await res.json()
    return albumById
}

async function getAlbumPhotos() {
    let queryParams = document.location.search;
    let urlParams = new URLSearchParams(queryParams);
    let albumId = urlParams.get('album_id');
    let res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=20`)
    let albumPhotos = await res.json()
    return albumPhotos
}

export{getAllAlbums, getAlbumById, getAlbumPhotos}
