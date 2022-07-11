


let navigationItems =  [
    {
        title: 'Home',
        path: 'index.html'
    },
    {
        title: 'Users',
        path: 'users.html'
    },
    {
        title: 'Albums',
        path: 'albums.html'
    },
    {
        title: 'Posts',
        path: 'posts.html'
    },
]


let pathName = document.location.pathname

let header = document.createElement('header')
let nav = document.createElement('nav')
let searchForm = document.createElement('form')
searchForm.setAttribute('action','./search.html')

navigationItems.map(navItem => {
    
    let navItemLink = document.createElement('a')
    navItemLink.textContent = navItem.title
    navItemLink.setAttribute('href', `${navItem.path}`)

    if(pathName.includes(navItem.path)){
        navItemLink.classList.add('active')
    }

    nav.append(navItemLink)
    
})

let searchInput = document.createElement('input')
searchInput.setAttribute('type', 'text')
searchInput.setAttribute('name','search-input')

let searchSubmit = document.createElement('input')
searchSubmit.setAttribute('type','submit')


searchForm.append(searchInput,searchSubmit)

header.append(nav,searchForm)
document.body.prepend(header)