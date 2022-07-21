import headerElement from "../header/header.js"
import {editPost} from "./postsController.js"
import editedPost from "./postsView.js"

init()

function init() {
  headerElement()
let editForm = document.getElementById('edit-post-form')
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

editForm.addEventListener('submit', async (e) => {
    e.preventDefault()
   let authorInputEl =  e.target.author.value
   let newPost = {
    title: `${postEditTitleInput.value}`,
    body: `${postEditBodyInput.value}`,
    author:`${authorInputEl}`,
    id: `${postId}`
  };
  let postEdited = await editPost(newPost, postId)
  
  editedPost(postEdited)
    e.target.reset()
});

}