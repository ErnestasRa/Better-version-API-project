
const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const searchResult = urlParams.get('search-input');
const searchWrapper = document.getElementById('search-wrapper')

searchWrapper.innerHTML = `<h1>Search results:</h1>`
fetch(`https://jsonplaceholder.typicode.com/users?username_like=${searchResult}`)
  .then(res => res.json())
  .then(users => {
    if (users.length > 0) {
      users.map(user => {
        let userItem = document.createElement('h4');
        userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;
        searchWrapper.append(userItem);
      })
    } else if (users.length > 0) {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchResult}`)
        .then(res => res.json())
        .then(usersByName => {
            usersByName.map(user => {   
                let userItem = document.createElement('h4');
                userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;
                searchWrapper.append(userItem);
            })
        })
    } else if(users.length > 0) {
      fetch(`https://jsonplaceholder.typicode.com/users?email_like=${searchResult}`)
      .then(res => res.json())
      .then(usersByEmail => {
        usersByEmail.map(user => {
          let userItem = document.createElement('h4');
          userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;
          searchWrapper.append(userItem);
        })
      })
    }else {
      
    }
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${searchResult}`)
    .then(res => res.json())
    .then(posts => {
      posts.map(post => {
        console.log(users.name)
        let postItem = document.createElement('h4')
        postItem.innerHTML = `<a href="./post.html?post_id=${post.id}&post_title=${post.title}&user_name=${users.name}&post_body=${post.body}">${post.title}</a>`
        searchWrapper.append(postItem)
      })
    })
  })
 