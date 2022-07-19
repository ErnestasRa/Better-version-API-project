import {generateAllUsers} from "./createPostView.js"
import  headerElement  from "../header/header.js"

headerElement()
const formWrapper = document.getElementById('form-wrapper')
const postForm = document.getElementById('post-form')
const selectElement = document.querySelector('select')    

generateAllUsers(selectElement)
let postDiv = document.createElement('div')
postDiv.classList.add('post-div')
let postedTitle = document.createElement('h2')
postedTitle.classList.add('posted-title')
let postedBody = document.createElement('p')
postedBody.classList.add('posted-body')
let postNameElement = document.createElement('h3')
postNameElement.classList.add('post-name-element')


postForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    let postTitle = document.getElementById('post-title').value     
    let postBody = document.getElementById('post-body').value
    let selectValue = document.getElementById('post-users').value
             sendPost(postTitle,postBody,selectValue)
         })
         postDiv.append(postedTitle,postedBody,postNameElement)
         formWrapper.append(postDiv)
        
         function sendPost(postTitle,postBody,selectValue) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  title: `${postTitle}`,
                  body: `${postBody}`,
                  userId: `${selectValue}`,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then( res => res.json())
                .then(data => {
                    postedTitle.innerHTML = `${data.title}`
                    postedBody.innerHTML = `${data.body}`
                    postNameElement.innerHTML = `${data.userId}`
                })
         }  