 function headerElement() {
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
    
    
    navigationItems.map(navItem => {
        
        let navItemLink = document.createElement('a')
        navItemLink.textContent = navItem.title
        navItemLink.setAttribute('href', `${navItem.path}`)
    
        if(pathName.includes(navItem.path)){
            navItemLink.classList.add('active')
        }
    
        nav.append(navItemLink)
        
    })
    header.append(nav)
    if(!pathName.includes('search.html')) {
    
        let searchForm = document.createElement('form')
        searchForm.setAttribute('action','./search.html')
    
        let searchInput = document.createElement('input')
        searchInput.setAttribute('type', 'text')
        searchInput.setAttribute('name','search-input')
    
        let searchSubmit = document.createElement('input')
        searchSubmit.setAttribute('type','submit')
        searchInput.innerHTML = 'Search'
    
        
        searchForm.append(searchInput,searchSubmit)
        header.append(searchForm)
    }
    
    document.body.prepend(header)   
}
export default headerElement