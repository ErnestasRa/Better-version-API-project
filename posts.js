import{ renderUserByIdPosts, renderAllUserPosts } from "./export.js"
import  headerElement from "./header/header.js"
headerElement()
function init() {
    renderAllPosts()
}

init()

function renderAllPosts() {
    let queryParams = document.location.search;
    let urlParams = new URLSearchParams(queryParams);
    let userId = urlParams.get('user_id');

    if(userId) {
        renderUserByIdPosts(userId)
    } else {
        renderAllUserPosts()
    }
}
