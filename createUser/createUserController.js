
async function createUser(post) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
  
    let createdUser = await res.json();
    return createdUser;
  }

  export {createUser}