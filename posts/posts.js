
import  headerElement from "../header/header.js"
import{renderAllPosts} from "./postsController.js"
import {renderPaginationLinks} from "../pagination/pagination.js"



function init() {
    renderPaginationLinks(1)
    renderAllPosts()
    headerElement()
}

init()

// PAGINATION:
// 15.1. Puslapiuose, kuriuose atvaizuojami post'ai, atvaizduoti pirmus 25 post'us. Tai bus pirmas post'ų puslapis.
// 15.2.1. Post'ų sąrašo apačioje pridėti nuorodas, kurios leidžia perjungti kitą post'ų puslapį. Pvz. antras puslapis rodys post'us nuo 26 iki 50, trečias puslapis rodys nuo 51 iki 75 ir t.t.
// 15.2.2. Puslapių nuorodų turi būti tiek, kad būtų galimybė atvaizduoti visus post'us.
// 15.2.3. Galima paspausti ant visų nuorodų, išskyrus tą, kurios puslapyje šiuo metu esama.