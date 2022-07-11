let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');

let usersWrapper = document.getElementById('users-wrapper')
usersWrapper.innerHTML = `<h1>Site users:</h1>`

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res => res.json())
.then(users => {
    let usersList = document.createElement('ul')
    users.map(user => {
        
        let userItem = document.createElement('li')
        userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(res => res.json())
                .then(posts => {
                    let postsNumber = document.createElement('span')
                    postsNumber.textContent = `Has ${posts.length} posts`
                usersList.append(userItem,postsNumber)
                usersWrapper.append(usersList)
    })
})
})