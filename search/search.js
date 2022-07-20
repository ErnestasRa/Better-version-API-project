
import  headerElement from "../header/header.js"
import {renderAllPosts,renderUserUsernameUrl,renderUserNameOuterUrl,renderUserEmailOuterUrl,renderUsersUsernameUrl,renderUserNameUrl,renderUserEmailElement,renderAllAlbums} from "./searchView.js"


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


init();


