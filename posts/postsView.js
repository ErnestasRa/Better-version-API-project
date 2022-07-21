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


 export async function commentsView(createdComment,appender) {
    let {title,body, email} = createdComment
    let newCommentDiv = document.createElement('div')
    newCommentDiv.classList.add('new-comment-div')

    let postCommentsTitle = document.createElement('h5')
    postCommentsTitle.classList.add('post-comments-title')

    let postCommentsBody = document.createElement('p')
    postCommentsBody.classList.add('post-comments-body')

    let postCommentsEmail = document.createElement('h6')
    postCommentsEmail.classList.add('post-comments-email')

    let editCommentButton = document.createElement('button')
    editCommentButton.setAttribute("id","edit-comment-button")
    editCommentButton.innerHTML = `Edit me`


    postCommentsTitle.textContent = title
    postCommentsBody.textContent = body 
    postCommentsEmail.textContent = email

    newCommentDiv.append(postCommentsTitle, postCommentsBody, postCommentsEmail, editCommentButton)
    appender.append(newCommentDiv)
  }
