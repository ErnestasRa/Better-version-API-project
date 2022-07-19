async function userNames() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    let allUsers = await res.json();
    return allUsers
}




export {userNames}