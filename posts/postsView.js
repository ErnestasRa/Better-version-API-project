export default async function editedPost(createdPost) {
    let { body, title, id, author } = createdPost;
  
    let editedPostDiv = document.createElement('ul')
  editedPostDiv.classList.add('edited-post')

  let postTitleElement = document.createElement('li')
  postTitleElement.innerHTML = `<strong> Post name:</strong> ${title}`

  let postBodyElement = document.createElement('li')
  postBodyElement.innerHTML = `<strong>Post content:</strong> ${body}`

  let postAuthorElement = document.createElement('li')
  postAuthorElement.innerHTML = `<strong>Post author:</strong> ${author}`
  let postIdElement = document.createElement('li')
  postIdElement.innerHTML = `<strong>Post id:</strong> ${id}`

  editedPostDiv.append(postTitleElement,postBodyElement,postAuthorElement, postIdElement)
  document.body.append(editedPostDiv)
  }


  
