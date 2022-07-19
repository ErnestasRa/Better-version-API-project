import{ renderListElement } from "../functions.js"
import  headerElement from "../header/header.js"
import { searchPosts, searchAlbums, userInfo} from "./searchController.js"

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
  headerElement()
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

async function renderAllPosts(searchText) {
  let posts = await searchPosts(searchText)
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
    }


async function renderAllAlbums(searchText) {
 let albums = await searchAlbums(searchText)
      albumsListTitle.textContent = 'Albums:';
      if (albums.length > 0) {
        albums.map(album => {
        renderListElement({
          content: album.title,
          href:`./album.html?album_id=${album.id}`,
          parentElement: albumsListTitle
        })
        })
      } 
      return  albumsListTitle.textContent = 'Albums not found.';
    }


async function renderUserEmailElement(searchText) {
  let usersByEmail = await userInfo(searchText)
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
      return usersListTitle.textContent = 'User data not found :('
    } 
  }


async function renderUserNameUrl(searchText) {
  let usersByName = await userInfo(searchText)
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
     return  usersListTitle.textContent = 'User data not found :('
    }
  }


async function renderUsersUsernameUrl(searchText) {
  let users = await userInfo(searchText)
    if (users.length > 0) {
      usersListTitle.textContent = 'Users:'
      users.map(user => {
        renderListElement({
          content: user.name,
          href:`./user.html?user_id=${user.id}`,
          parentElement: usersList
          })
        
        }) 
      } else {
        return usersListTitle.textContent = 'Username not found :('
      }
    } 
  
async  function renderUserEmailOuterUrl(searchText) {
 let usersByEmail = await userInfo(searchText)
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
      return usersListTitle.textContent = 'User email not found :('
    }
  }


async function  renderUserNameOuterUrl(searchText){
  let usersByName = await userInfo(searchText)
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
      return usersListTitle.textContent = 'User name not found :('
    }
  }


async  function renderUserUsernameUrl(searchText) {
  let users = await userInfo(searchText)
    if (users.length > 0) {
      usersListTitle.textContent = 'Users:'
      users.map(user => {
        renderListElement({
          content: user.name,
          href:`./user.html?user_id=${user.id}`,
          parentElement: usersList
        })
      })

    } else {
      return usersListTitle.textContent = 'User not found'
    }
  }

init();


