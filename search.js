import{ renderListElement } from "./functions.js"
import  headerElement from "./header/header.js"

headerElement()
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
  let userNameOuterUrl = `name=${searchPhrase}`
  let userEmailOuterUrl = `email=${searchPhrase}`
  let postsUrl = `title=${searchPhrase}`;
  let albumsUrl = `title=${searchPhrase}`;

  renderUserUsernameUrl(userUsernameUrl)  
  renderUserNameOuterUrl(userNameOuterUrl)  
  renderUserEmailOuterUrl(userEmailOuterUrl)  
  renderAllPosts(postsUrl);
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
          renderListElement({   
            content: post.title,
            href: `./post.html?post_id=${post.id}`,
            parentElement: postsListTitle
          })
         
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
      albumsListTitle.textContent = 'Albums:';
      if (albums.length > 0) {
        albums.map(album => {
    
        renderListElement({
          content: album.title,
          href:`./album.html?album_id=${album.id}`,
          parentElement: albumsListTitle
        })


        })
      } else {
        albumsListTitle.textContent = 'Albums not found.';
      }
    })
}

function renderUserEmailElement(searchText) {
  fetch(`https://jsonplaceholder.typicode.com/users?${searchText}`)
  .then(res => res.json())
  .then(usersByEmail => {
    if (usersByEmail.length > 0) {
      usersListTitle.textContent = 'Users:'
      usersByEmail.map(user => {
    
        renderListElement({
          content: user.name,
          href:`./user.html?user_id=${user.id}`,
          parentElement: usersList
        })
      })


    } else {
      
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
        renderListElement({
          content: user.name,
          href:`./user.html?user_id=${user.id}`,
          parentElement: usersList
        })
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
        renderListElement({
          content: user.name,
          href:`./user.html?user_id=${user.id}`,
          parentElement: usersList
        })
        
      })
    } return
  })
}

function renderUserEmailOuterUrl(searchText) {
  fetch(`https://jsonplaceholder.typicode.com/users?${searchText}`)
  .then(res => res.json())
  .then(usersByEmail => {
    if (usersByEmail.length > 0) {

      usersListTitle.textContent = 'Users:'
      usersByEmail.map(user => {
        renderListElement({
          content: user.name,
          href:`./user.html?user_id=${user.id}`,
          parentElement: usersList
        })
      })
    } return
  })
}

function  renderUserNameOuterUrl(searchText){
  fetch(`https://jsonplaceholder.typicode.com/users?${searchText}`)
  .then(res => res.json())
  .then(usersByName => {
    if (usersByName.length > 0) {
      usersListTitle.textContent = 'Users:'
      usersByName.map(user => {
        renderListElement({
          content: user.name,
          href:`./user.html?user_id=${user.id}`,
          parentElement: usersList
        })
      })
    } return 
  })
}

function renderUserUsernameUrl(searchText) {
  fetch(`https://jsonplaceholder.typicode.com/users?${searchText}`)
  .then(res => res.json())
  .then(users => {
    if (users.length > 0) {
      usersListTitle.textContent = 'Users:'
      users.map(user => {
        renderListElement({
          content: user.name,
          href:`./user.html?user_id=${user.id}`,
          parentElement: usersList
        })
      })

    } return usersListTitle.textContent = 'User not found'
    
  })
}

init();


