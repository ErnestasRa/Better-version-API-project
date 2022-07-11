
const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const searchResult = urlParams.get('search-input');
const searchWrapper = document.getElementById('search-wrapper')

searchWrapper.innerHTML = `<h1>Search results:</h1>`
fetch(`https://jsonplaceholder.typicode.com/users?username=${searchResult}`)
.then(res => res.json())
.then(results => {
    results.map(result => {
       
        let searchName = document.createElement('h4')
        searchName.innerHTML = `<a href="./user.html?user_id=${result.id}">${result.username}</a>`

        searchWrapper.append(searchName)
    })
})

fetch(`https://jsonplaceholder.typicode.com/users?name=${searchResult}`)
.then(res => res.json())
.then(results => {
    results.map(result => {
       
        let searchName = document.createElement('h4')
        searchName.innerHTML = `<a href="./user.html?user_id=${result.id}">${result.name}</a>`

        searchWrapper.append(searchName)
    })
})

fetch(`https://jsonplaceholder.typicode.com/albums?title=${searchResult}`)
.then(res => res.json())
.then(results => {
    results.map(result => {
        fetch(`https://jsonplaceholder.typicode.com/users?name=${searchResult}`)
        .then(res => res.json())
        .then(users => {
            users.map(user => {
                console.log(user)
                let searchName = document.createElement('h4')
                searchName.innerHTML = `<a href="./album.html?album_id=${result.id}&album_title=${result.title}&user_id=${result.userId}&user_name=${user.name}">${result.title}</a>`
                searchWrapper.append(searchName)
       
       
        
    })
})
})
})