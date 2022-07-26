import{ toUpperCase } from "../export.js"



export function renderPaginationLinks(pageLimit) {
  let urlParams = document.location.search
  let serachParams = new URLSearchParams(urlParams)
  let page = serachParams.get('page')
  
  let total = 10;
  let limit = pageLimit
  let pages = Math.ceil(total/limit)
  let paginationWrapper = document.createElement('div')
  paginationWrapper.classList.add('paginator-wrapper')

  for(let i = 1; i <= pages ;i++) {
    let paginationlink = document.createElement('a')
    paginationlink.href = `./posts.html?page=${i}&limit=${limit}`
    paginationlink.textContent = i;
    paginationWrapper.append(paginationlink)
    document.body.prepend(paginationWrapper)
    }

     
    let paginatorBackButton = document.createElement('a')
    paginatorBackButton.href = `./posts.html?page=${page - 1}&limit=${limit}` 
    paginatorBackButton.classList.add('paginator-back-button')
    paginatorBackButton.textContent = '<< Previous'
    
    paginationWrapper.prepend(paginatorBackButton)

    let paginatorForwardButton = document.createElement('a')
    paginatorForwardButton.textContent = 'Forward >>'
    paginatorForwardButton.classList.add('paginator-forward-button')
    paginatorForwardButton.href = `./posts.html?page=${Number(page) + 1}&limit=${limit}` 

    paginationWrapper.append(paginatorForwardButton)
    if(page < 2) {
      paginatorBackButton.style.display = 'none'
    } else if (page > 9) {
      paginatorForwardButton.style.display = 'none'
    }
}

async function getAllUserPosts() {
    let urlParams = document.location.search
    let serachParams = new URLSearchParams(urlParams)
    let limit = serachParams.get('limit') ? serachParams.get('limit') : 25;
    let page = serachParams.get('page') ? serachParams.get('page') : 1
    // fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts&_page=${page}&_limit=${limit}`)
    let res = await fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts&_page=${page}&_limit=${limit}`)
    let allPosts  = await res.json();
    return allPosts;
   }

async function getUserPostsById() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts&_limit=5`)
    let userByIdPosts = await res.json()
    return userByIdPosts
}

async function renderAllUserPosts() {
    let users = await getAllUserPosts()
     const postWrapper = document.getElementById('post-wrapper')
       users.map(user => {
           user.posts.map(post => {
                       let updatedTitle = toUpperCase(post.title);
                       let postItem = document.createElement('div')
                       postItem.classList.add('post-item')
               
                       let postBody = document.createElement('p')
                       postBody.classList.add('post-body')
                       
                       let postAuthor = document.createElement('span')
                       postAuthor.classList.add('post-author')
               
                       let postCommentsTitle = document.createElement('h5')
                       postCommentsTitle.classList.add('post-comments-title')
               
                       let postCommentsBody = document.createElement('p')
                       postCommentsBody.classList.add('post-comments-body')
               
                       let postCommentsEmail = document.createElement('h6')
                       postCommentsEmail.classList.add('post-comments-email')

                       postBody.innerHTML = `<strong><a href="./post.html?post_id=${post.id}&post_title=${post.title}&user_name=${user.name}&post_body=${post.body}">${updatedTitle}</a></strong>`   
                       postAuthor.innerHTML = `<a href="./user.html?user_id=${user.id}&user_name=${user.name}"> <strong>${user.name}</strong> </a>`
                       
                       let postEditButton = document.createElement('span')
                       postEditButton.innerHTML = `<a href="./edit-post.html?post_id=${post.id}&post_title=${post.title}&user_name=${user.name}&post_body=${post.body}">Edit post</a>` 



                       postItem.append(postAuthor,postBody, postEditButton,postCommentsTitle,postCommentsBody,postCommentsEmail)
                       postWrapper.append(postItem)

           })
       })
      
   }

async function renderUserByIdPosts(id){
   let users = await getUserPostsById(id)
           users.posts.map(post => {
                       let updatedTitle = post.title[0].toUpperCase() + post.title.slice(1);
                       let postItem = document.createElement('div')
                       postItem.classList.add('post-item')
               
                       let postBody = document.createElement('p')
                       postBody.classList.add('post-body')
                       
                       let postAuthor = document.createElement('span')
                       postAuthor.classList.add('post-author')
               
                       let postCommentsTitle = document.createElement('h5')
                       postCommentsTitle.classList.add('post-comments-title')
               
                       let postCommentsBody = document.createElement('p')
                       postCommentsBody.classList.add('post-comments-body')
               
                       let postCommentsEmail = document.createElement('h6')
                       postCommentsEmail.classList.add('post-comments-email')
 
                       postBody.innerHTML = `<strong><a href="./post.html?post_id=${post.id}&post_title=${post.title}&user_name=${users.name}&post_body=${post.body}">${updatedTitle}</a></strong>`   
                       postAuthor.innerHTML = `<a href="./user.html?user_id=${users.id}&user_name=${users.name}"> <strong>${users.name}</strong> </a>`
                       
                       postItem.append(postAuthor,postBody,postCommentsTitle,postCommentsBody,postCommentsEmail)
                       postWrapper.append(postItem)
 
           })
       }
      
 function renderAllPosts() {
        let queryParams = document.location.search;
        let urlParams = new URLSearchParams(queryParams);
        let userId = urlParams.get('user_id');
    
        if(userId) {
            renderUserByIdPosts(id)
    
        } else {
           
            renderAllUserPosts()
        }
    }
    
async function getPostById() {
    let queryParams = document.location.search;
    let urlParams = new URLSearchParams(queryParams);
    let postId = urlParams.get('post_id');

     let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
     let postById = await res.json()
     return postById   
}

async function getPostByIdComments() {
    let queryParams = document.location.search;
    let urlParams = new URLSearchParams(queryParams);
    let postId = urlParams.get('post_id');
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments/`)
    let postByIdComments = await res.json()
    return postByIdComments
}

async function commentsByPostId(PostId) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${PostId}`)
    let CommentsById = await res.json()
    return CommentsById
}

async function editPost(post,postId) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
  
    let createdPost = await res.json();
    return createdPost;
  }

  async function editComment(post) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/comments/`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
  
    let editedComment = await res.json();
    return editedComment;
  }

async function getCommentByCommentId(id){
  let res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
  let allComments = await res.json()
  return allComments
}


async function editedPost(post,postId) {
   let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments/`, {
    method: 'PATCH',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
       },
    })
    let eComment = await res.json()
    return eComment; 
}


export{getAllUserPosts, getUserPostsById, renderAllUserPosts,renderUserByIdPosts, renderAllPosts, getPostById,getPostByIdComments, commentsByPostId, editPost, editComment, getCommentByCommentId, editedPost}   




