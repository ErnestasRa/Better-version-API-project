import  headerElement from "../header/header.js"
import {getPostById,getPostByIdComments} from "./postsController.js"

headerElement()


let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let postTitle = urlParams.get('post_title')
let userName = urlParams.get('user_name')
let postBody = urlParams.get('post_body')

let postWrapper = document.getElementById('post-wrapper')
postWrapper.innerHTML = `<h1>Post page:</h1>`

async function renderPost() {

     await getPostById()

    let postTitleElement = document.createElement('h2')
    postTitleElement.innerHTML = `${postTitle}`
    let postAuthorElement = document.createElement('h3')
    postAuthorElement.innerHTML = `${userName}`
    let postBodyElement = document.createElement('p')
    postBodyElement.innerHTML = `${postBody}`
    let postCommentsWrapper = document.createElement('div')
    postCommentsWrapper.classList.add('post-comments-wrapper')
    let commentsElement = document.createElement('h2')
    commentsElement.textContent = 'Post comments:'
   

     let comments = await getPostByIdComments()
            comments.map(comment => {
                let postCommentsTitle = document.createElement('h5')
                postCommentsTitle.classList.add('post-comments-title')
            
                let postCommentsBody = document.createElement('p')
                postCommentsBody.classList.add('post-comments-body')
            
                let postCommentsEmail = document.createElement('h6')
                postCommentsEmail.classList.add('post-comments-email')
                postCommentsTitle.textContent = comment.name
                postCommentsBody.textContent = comment.body 
                postCommentsEmail.textContent = comment.email
            
        postCommentsWrapper.append( postCommentsTitle,postCommentsBody,postCommentsEmail)
        postWrapper.append(postTitleElement,postBodyElement,postAuthorElement,commentsElement,postCommentsWrapper)
     })
 }    
    
function init() {
    renderPost()
}

init()


