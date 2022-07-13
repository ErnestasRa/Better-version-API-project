let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');


const userWrapper = document.getElementById('user-wrapper')

function init() {
    renderUser()
}
function renderUser(){
    let pageName = document.createElement('h1')
    pageName.textContent = 'User page'

   fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts`)
   .then(res => res.json())
   .then(user => {
               let userItem = document.createElement('div')
               userItem.classList.add('user-item')

               let pageName = document.createElement('h1')
               pageName.textContent = 'User page'

               let userPostsTitle = document.createElement('h2')
               userPostsTitle.textContent = 'User posts:'

               let userAlbumTitle = document.createElement('h2')
               userAlbumTitle.textContent = 'User albums:'
       
               let ulElement = document.createElement('ul')
       
               let userName = document.createElement('li')
               userName.classList.add('user-name')
               userName.innerHTML = `<strong>Name:</strong> ${user.name} (${user.username})`
       
               let userEmail = document.createElement('li')
               userEmail.classList.add('user-email')
               userEmail.innerHTML = `<strong>Email:</strong> ${user.email}`
       
               let userPhone = document.createElement('li')
               userPhone.classList.add('user-phone')
               userPhone.innerHTML = `<strong>User phone:</strong> ${user.phone}`
       
               let usersWebsite = document.createElement('li')
               usersWebsite.classList.add('users-website')
               usersWebsite.innerHTML = `<strong>Users website:</strong> ${user.website}`
       
               let usersCompany = document.createElement('li')
               usersCompany.classList.add('users-company')
               usersCompany.innerHTML = `users.company.name`
       
               let userAddress = document.createElement('li')
               userAddress.classList.add('user-address')
               userAddress.innerHTML = `<strong>User address: </strong>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
               let userAddressLocation = document.createElement('li')
               userAddressLocation.classList.add('user-address-location')
               userAddressLocation.innerHTML = `<a href="https://www.google.com/maps/search/google+maps/@${user.address.geo.lat},${user.address.geo.lnt}">User Location map</a>`
       
               let userPosts = document.createElement('div')
               userPosts.classList.add('user-posts')
               userPosts.innerHTML = `<h2>User Posts:</h2>`
       
               let userAlbums = document.createElement('div')
               userAlbums.classList.add('user-albums')
               userAlbums.innerHTML = `<h2>User Albums:</h2>`
       
       document.body.prepend(pageName)
       ulElement.append(userName,userEmail,userAddress,userAddressLocation,userPhone,usersWebsite,userPosts,userAlbums)
       userItem.append(ulElement)
       userWrapper.append(userItem)

       user.posts.map(post => {
          let titleElement = document.createElement('h3')
           titleElement.innerHTML = `<a href="./post.html?post_id=${post.id}&post_title=${post.title}&user_name=${user.name}&post_body=${post.body}">${post.title}</a>`
           userPosts.append(titleElement)
       })

       fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=albums`)
       .then(res => res.json())
       .then(albums => {
         albums.albums.map(album => {
                   let albumElementTitle = document.createElement('h4')
                   albumElementTitle.innerHTML = `<a href="./album.html?album_id=${album.id}&album_title=${album.title}&user_name=${user.name}&user_id=${userId}">${album.title}</a>`
                   userAlbums.append(albumElementTitle)    
         })
       })

   })
}



init()