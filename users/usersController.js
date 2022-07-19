 async function getAllUsers() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts');
    let usersData = await res.json();
    return usersData;
   }
   
async function postsByUserId() {
   let queryParams = document.location.search;
   let urlParams = new URLSearchParams(queryParams);
   let userId = urlParams.get('user_id');
   let res = await  fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts`)
   let userPosts = await res.json()
   return userPosts
}

async function albumsByUserId() {
   let queryParams = document.location.search;
   let urlParams = new URLSearchParams(queryParams);
   let userId = urlParams.get('user_id');
   let res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=albums`)
   let userAlbums = await res.json()
   return userAlbums
}


export {getAllUsers, postsByUserId,albumsByUserId}