import  headerElement from "../header/header.js"
import {getPostById,getPostByIdComments, editComment, getCommentByCommentId} from "./postsController.js"
import {commentsView} from "./postsView.js"
headerElement()


let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let postTitle = urlParams.get('post_title')
let userName = urlParams.get('user_name')
let postBody = urlParams.get('post_body')
let postId = urlParams.get('post_id')


let postWrapper = document.getElementById('post-wrapper')
postWrapper.innerHTML = `<h1>Post page:</h1>`
let createCommentForm = document.getElementById('create-comment-form')



    
     await getPostById()
        let postCommentsWrapper = document.createElement('div')
        postCommentsWrapper.classList.add('post-comments-wrapper')
        let commentsElement = document.createElement('h2')
        commentsElement.textContent = 'Post comments:'

     let comments = await getPostByIdComments()
            comments.map(comment => {
                let commentData = {
                    title: comment.name,
                    body: comment.body,
                    email: comment.email
                }
                commentsView(commentData,postCommentsWrapper)
     })
    
     createCommentForm.addEventListener('submit', async (e) => {
        e.preventDefault()
       let commentTitle =  e.target.title.value
       let commentBody = e.target.body.value
       let commentEmail = e.target.email.value
   
        let commentData = {
            title: `${commentTitle}`,
            body: `${commentBody}`,
            email: `${commentEmail}`,
            postId: `${postId}`
        }
        let editedComment = await editComment(commentData)

        if(commentTitle.length > 0 && commentBody.length > 0 && commentEmail.length > 0) {
            commentsView(editedComment, postCommentsWrapper)       
            } else
            return console.log('no empty fields brother!')
            e.target.reset()    
        });
        
        let editCommentButton = document.querySelectorAll('.edit-comment-button')
        console.log(editCommentButton)
        // editCommentButton.addEventListener('click', async (e) => {
        //     e.preventDefault()
        //     console.log(e.target.parentElement.childNodes[0].textContent)
        // })
        
        document.body.append(postCommentsWrapper)








     
