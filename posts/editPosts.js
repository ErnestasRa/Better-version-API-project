import headerElement from "../header/header.js"
headerElement()
const editForm = document.getElementById('edit-post-form')
let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let postTitle = urlParams.get('post_title')
let userName = urlParams.get('user_name')
let postBody = urlParams.get('post_body')
let postId = urlParams.get('post_id')

let postEditTitleInput = document.getElementById('post-title')
let postEditBodyInput = document.getElementById('post-content')
let postEditAuthorInput = document.getElementById('post-author')

postEditTitleInput.value = postTitle
postEditBodyInput.value = postBody
postEditAuthorInput.value = userName


editForm.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
     method: 'PUT',
     body: JSON.stringify({
    id: `${postId}`,
    title: `${postEditTitleInput.value}`,
    body: `${postEditBodyInput.value}`,
    author: `${userName}`,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    let editedPostDiv = document.createElement('ul')
    editedPostDiv.classList.add('edited-post')

    let postTitleElement = document.createElement('li')
    postTitleElement.innerHTML = `<strong> Post name:</strong> ${json.title}`

    let postBodyElement = document.createElement('li')
    postBodyElement.innerHTML = `<strong>Post content:</strong> ${json.body}`

    let postAuthorElement = document.createElement('li')
    postAuthorElement.innerHTML = `<strong>Post author:</strong> ${json.author}`

    let postIdElement = document.createElement('li')
    postIdElement.innerHTML = `<strong>Post id:</strong> ${postId}`

    editedPostDiv.append(postTitleElement,postBodyElement,postAuthorElement, postIdElement)
    document.body.append(editedPostDiv)
  });
  e.target.reset()

})



