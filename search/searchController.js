async function searchPosts(searchText) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?${searchText}`)
    let searchResult = await res.json()
    return searchResult
}

async function searchAlbums(searchText) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/albums?${searchText}`)
    let searchResult = await res.json()
    return searchResult
}

async function userInfo(searchText) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users?${searchText}`)
    let searchResult = await res.json()
    return searchResult
}

export{searchPosts, searchAlbums, userInfo}   