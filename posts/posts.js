
import  headerElement from "../header/header.js"
import {renderAllPosts} from "./postsController.js"
import {renderPaginationLinks} from "../pagination/pagination.js"



function init() {
    renderPaginationLinks(1, 'posts', 10)
    headerElement()
    renderAllPosts()
}

init()

