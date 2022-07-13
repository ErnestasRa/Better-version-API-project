let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');

let usersWrapper = document.getElementById('users-wrapper')
usersWrapper.innerHTML = `<h1>Site users:</h1>`

function init() {
    allSiteUsers()
}

init()


function allSiteUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts`)
    .then(res => res.json())
    .then(users => {
    let usersList = document.createElement('ul')
    users.map(user => {
        let postsNumber = document.createElement('span')
        postsNumber.classList.add('user-item')
        postsNumber.textContent = `Has ${user.posts.length} posts`
        let userItem = document.createElement('li')
        userItem.classList.add('user-item')
        userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`
        
                usersList.append(userItem,postsNumber)
                usersWrapper.append(usersList)
    })
})
}

