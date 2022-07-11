
const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const searchResult = urlParams.get('search-input');
const searchWrapper = document.getElementById('search-wrapper')

searchWrapper.innerHTML = `<h1>Search results:</h1>`
fetch(`https://jsonplaceholder.typicode.com/users?username=${searchResult}`)
  .then(res => res.json())
  .then(users => {
    if (users.length > 0) {
      users.map(user => {
        let userItem = document.createElement('h4');
        userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;

        searchWrapper.append(userItem);
      })
    } else {
      fetch(`https://jsonplaceholder.typicode.com/users?name=${searchResult}`)
        .then(res => res.json())
        .then(usersByName => {
            usersByName.map(user => {
                console.log(user.name)
                let userItem = document.createElement('h4');
                userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;
                searchWrapper.append(userItem);
            })
        })
    }
  })