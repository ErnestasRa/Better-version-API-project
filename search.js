
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
        searchName.innerHTML = `<a href="./user.html?user_id=${result.id}">${result.name}</a>`

        searchWrapper.append(searchName)
    })
   
    
})