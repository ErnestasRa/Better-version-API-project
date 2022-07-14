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
            renderListElement({
                content: `${user.name} (has ${user.posts.length} posts)`,
                href:`./user.html?user_id=${user.id}`,
                parentElement: usersWrapper,
                class: 'user-element'
            })
                usersWrapper.append(usersList)
    })
})
}

