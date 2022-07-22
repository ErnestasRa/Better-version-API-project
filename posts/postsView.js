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
    let {title,body, email, id} = createdComment
    let newCommentDiv = document.createElement('div')
    newCommentDiv.classList.add('new-comment-div')

    let postCommentsTitle = document.createElement('h5')
    postCommentsTitle.classList.add('post-comments-title')

    let postCommentsBody = document.createElement('p')
    postCommentsBody.classList.add('post-comments-body')

    let postCommentsEmail = document.createElement('h6')
    postCommentsEmail.classList.add('post-comments-email')

    let commentId = document.createElement('span')
    commentId.classList.add('comment-id')

    let editButton = document.createElement('button')
    editButton.setAttribute("id", "edit-comment-button")
    editButton.innerHTML = `Edit comment`


    postCommentsTitle.textContent = title
    commentId.textContent = `${id}`
    postCommentsBody.textContent = body 
    postCommentsEmail.textContent = email

    newCommentDiv.append(commentId,postCommentsTitle, postCommentsBody, postCommentsEmail,editButton)
    appender.append(newCommentDiv)
  }
