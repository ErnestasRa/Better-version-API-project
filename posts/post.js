import  headerElement from "../header/header.js"
import {getPostById,getPostByIdComments, editComment, getCommentByCommentId, PutComment} from "./postsController.js"
import {commentsView} from "./postsView.js"
headerElement()
  
let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let postId = urlParams.get('post_id')

let commentTitleInput = document.getElementById('comment-title')
let commentBodyInput = document.getElementById('comment-content')
let commentEmailInput = document.getElementById('comment-email')
let finishEditButton = document.getElementById('finish-edit')


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
                    email: comment.email,
                    id: comment.id,
                }
                
                document.body.append(postCommentsWrapper)
                let editButtons = document.querySelectorAll('#edit-comment-button')
             
                editButtons.forEach(button => {
                    button.addEventListener('click', async (e) => {
                        let commentId = e.target.parentElement.childNodes[0].textContent
                        let commentWithId = await getCommentByCommentId(commentId)
                       
                        commentTitleInput.value = commentWithId.name
                        commentBodyInput.value = commentWithId.body
                        commentEmailInput.value = commentWithId.email

                    })

                })
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
        console.log(commentData.postId)
    let editedComment = await editComment(commentData)
       
        if(commentTitle.length > 0 && commentBody.length > 0 && commentEmail.length > 0) {
            commentsView(editedComment, postCommentsWrapper)       
            } else
            return console.log('no empty fields!')
            e.target.reset()    
        });
        
        finishEditButton.addEventListener('click', (e) => {
            console.log('labas')
        })
       


     
