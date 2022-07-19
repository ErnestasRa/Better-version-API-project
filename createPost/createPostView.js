import { userNames } from "./createPostController.js"


async function generateAllUsers(selectElement) {
    let allUsers = await userNames()
    allUsers.map(user => {

        let optionElement = document.createElement('option')
        optionElement.innerHTML = `${user.name} (${user.id})`
        selectElement.append(optionElement)
    })  
}

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




export {generateAllUsers}