let searchResults = document.querySelector('#search-wrapper');
let usersList = document.createElement('ul');
let usersListTitle = document.createElement('h3');

let postsList = document.createElement('ul');
let postsListTitle = document.createElement('h3');

let albumsList = document.createElement('ul');
let albumsListTitle = document.createElement('h3');

searchResults.append(usersList, postsList, albumsList);
usersList.before(usersListTitle);
postsList.before(postsListTitle);
albumsList.before(albumsListTitle);

function init() {
  outerSearchForm();
  innerSearchForm();
}


function outerSearchForm() {
  let queryParams = document.location.search;
  let urlParams = new URLSearchParams(queryParams);
  let searchPhrase = urlParams.get('search-input');

  let userUsernameUrl = `username=${searchPhrase}`
  renderUserUsernameUrl(userUsernameUrl)  

  let userNameOuterUrl = `name=${searchPhrase}`
  renderUserNameOuterUrl(userNameOuterUrl)  

  let userEmailOuterUrl = `email=${searchPhrase}`
  renderUserEmailOuterUrl(userEmailOuterUrl)  

  let postsUrl = `title=${searchPhrase}`;
  renderAllPosts(postsUrl);
  
  let albumsUrl = `title=${searchPhrase}`;
  renderAllAlbums(albumsUrl);
}

function innerSearchForm() {
  let searchPageForm = document.querySelector('#first-form');
  
  searchPageForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    usersList.innerHTML = '';
    postsList.innerHTML = '';
    albumsList.innerHTML = '';
  
    let searchInput = event.target.elements['search-input'].value;

    let usersUsernameUrl = `username_like=${searchInput}`
    renderUsersUsernameUrl(usersUsernameUrl)  

    let usersNameUrl = `name_like=${searchInput}`
    renderUserNameUrl(usersNameUrl)  
    
    let usersEmailUrl = `email_like=${searchInput}`
    renderUserEmailElement(usersEmailUrl)  

    let postsUrl = `title_like=${searchInput}`;
    renderAllPosts(postsUrl);

    let albumsUrl = `title_like=${searchInput}`;
    renderAllAlbums(albumsUrl);
  })
}

function renderAllPosts(searchText) {
  fetch(`https://jsonplaceholder.typicode.com/posts?${searchText}`)
    .then(res => res.json())
    .then(posts => {
      if (posts.length > 0) {
        postsListTitle.textContent = 'Posts:';
        posts.map(post => {
          let postItem = document.createElement('li');
          postItem.innerHTML = `<a href="./post.html?post_id=${post.id}">${post.title}</a>`;
          postsList.append(postItem);
        })
      } else {
        postsListTitle.textContent = 'Posts not found.';
      }
    })
}

function renderAllAlbums(searchText) {
  fetch(`https://jsonplaceholder.typicode.com/albums?${searchText}`)
    .then(res => res.json())
    .then(albums => {
      if (albums.length > 0) {
        renderListElement(albums);
      } else {
        albumsListTitle.textContent = 'Albums not found.';
      }
    })
}

function renderListElement(list) {
  albumsListTitle.textContent = 'Albums:';
  list.map(album => {
    let albumItem = document.createElement('li');
    albumItem.innerHTML = `<a href="./album.html?album_id=${album.id}">${album.title}</a>`;
    albumsList.append(albumItem);
  })
}

function renderUserEmailElement(searchText) {
  fetch(`https://jsonplaceholder.typicode.com/users?${searchText}`)
  .then(res => res.json())
  .then(usersByEmail => {
    if (usersByEmail.length > 0) {
      usersListTitle.textContent = 'Users:'
      usersByEmail.map(user => {
        let userItem = document.createElement('li');
        userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;
        usersList.append(userItem);
      })


    } else {
      usersListTitle.textContent = 'Users not found.'
    }
  })
}

function renderUserNameUrl(searchText) {
  fetch(`https://jsonplaceholder.typicode.com/users?${searchText}`)
  .then(res => res.json())
  .then(usersByName => {
    if (usersByName.length > 0) {
      usersListTitle.textContent = 'Users:'
      usersByName.map(user => {
        let userItem = document.createElement('li');
        userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;
        usersList.append(userItem);
      })


    } else {
      usersListTitle.textContent = 'User not found'
    }
  })
}

function renderUsersUsernameUrl(searchText) {
  fetch(`https://jsonplaceholder.typicode.com/users?${searchText}`)
  .then(res => res.json())
  .then(users => {
    if (users.length > 0) {
      usersListTitle.textContent = 'Users:'
      users.map(user => {
        let userItem = document.createElement('li');
        userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;
        usersList.append(userItem);
      })
    } else {
      usersListTitle.textContent = 'User email not found'
    }
  })
}

function renderUserEmailOuterUrl(searchText) {
  fetch(`https://jsonplaceholder.typicode.com/users?${searchText}`)
  .then(res => res.json())
  .then(usersByEmail => {
    if (usersByEmail.length > 0) {


      usersListTitle.textContent = 'Users:'
      usersByEmail.map(user => {
        let userItem = document.createElement('li');
        userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;
        usersList.append(userItem);
      })


    } else {
      usersListTitle.textContent = 'User not found.'
    }
  })
}

function  renderUserNameOuterUrl(searchText){
  fetch(`https://jsonplaceholder.typicode.com/users?${searchText}`)
  .then(res => res.json())
  .then(usersByName => {
    if (usersByName.length > 0) {
      usersListTitle.textContent = 'Users:'
      usersByName.map(user => {
        let userItem = document.createElement('li');
        userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;
        usersList.append(userItem);
      })


    } else {

    } 
  })
}

function renderUserUsernameUrl(searchText) {
  fetch(`https://jsonplaceholder.typicode.com/users?${searchText}`)
  .then(res => res.json())
  .then(users => {
    if (users.length > 0) {
      usersListTitle.textContent = 'Users:'
      users.map(user => {
        let userItem = document.createElement('li');
        userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`;

        usersList.append(userItem);
      })

    } else {

    }
    
  })
}

init();


