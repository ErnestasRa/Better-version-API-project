let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');
let userName = urlParams.get('user_name')

const userWrapper = document.getElementById('user-wrapper')

let userPosts = document.createElement('div')
userPosts.classList.add('user-posts')
userPosts.innerHTML = `<h2>User Posts:</h2>`

let userAlbums = document.createElement('div')
userAlbums.classList.add('user-albums')
userAlbums.innerHTML = `<h2>User Albums:</h2>`


function init() {
    renderUser()
}
function renderUser(){
    let pageName = document.createElement('h1')
    pageName.textContent = 'User page'

   fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts`)
   .then(res => res.json())
   .then(user => {
            renderStudentData(user)
            renderStudentPosts(user)    
            renderStudentAlbums()

   })
   document.body.prepend(pageName)
   
}

init()