import  headerElement from "../header/header.js"
import {getPostById,getPostByIdComments, editComment, getCommentByCommentId, } from "./postsController.js"
import {commentsView} from "./postsView.js"
headerElement()
  
let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let postId = urlParams.get('post_id')

let postWrapper = document.getElementById('post-wrapper')
postWrapper.innerHTML = `<h1>Post page:</h1>`


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
                commentsView(commentData,postCommentsWrapper)
             })
             let commentForm = document.getElementById('create-comment-form')
                commentForm.addEventListener('submit', async (e) => {
                 e.preventDefault()

                 let titleElement = e.target.title.value  
                 let bodyElement = e.target.body.value 
                 let emailElement = e.target.email.value

                let commentData = {
                    postId: Number(postId),
                    name: `${titleElement}`, 
                    body: `${bodyElement}`,
                    email: `${emailElement}`
                } 

                let newComment = await editComment(commentData)
                commentsView(newComment, postCommentsWrapper)   

                commentForm.reset()   
                
             })
             

         
         document.body.append(postCommentsWrapper)
      