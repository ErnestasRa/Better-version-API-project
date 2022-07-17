function renderListElement(data) {
    let itemElement = document.createElement('li');
    
    if(data.class) {
        itemElement.classList.add(data.class)
    }

    itemElement.innerHTML = `<a href="${data.href}">${data.content}</a>`;
    data.parentElement.append(itemElement);


}

function toUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1)
}   

function renderStudentAlbums() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=albums`)
    .then(res => res.json())
    .then(albums => {
      albums.albums.map(album => {  
                renderListElement({
                 content: album.title,
                 href: `./albums.html?user_id=${userId}&album_title=${album.title}&user_name=${userName}`,
                 parentElement: userAlbums,
                 class: 'user-album',
                })
      })
    })
   } 
function renderStudentPosts(data) {
    data.posts.map(post => {
    renderListElement({
            content: toUpperCase(post.title),
            href: `./post.html?post_id=${post.id}&post_title=${post.title}&user_name=${userName}&post_body=${post.body}`,
            class: 'title-element',
            parentElement: userPosts,
        })
})
}   