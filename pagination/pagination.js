export function renderPaginationLinks(pageLimit) {
    let urlParams = document.location.search
    let serachParams = new URLSearchParams(urlParams)
    let page = serachParams.get('page')
    
    let total = 10;
    let limit = pageLimit
    let pages = Math.ceil(total/limit)
    let paginationWrapper = document.createElement('div')
    paginationWrapper.classList.add('paginator-wrapper')
  
    for(let i = 1; i <= pages ;i++) {
      let paginationlink = document.createElement('a')
      paginationlink.href = `./posts.html?page=${i}&limit=${limit}`
      paginationlink.textContent = i;
      paginationWrapper.append(paginationlink)
      document.body.prepend(paginationWrapper)
        


      }
  
      let paginatorBackButton = document.createElement('a')
      paginatorBackButton.href = `./posts.html?page=${page - 1}&limit=${limit}` 
      paginatorBackButton.classList.add('paginator-back-button')
      paginatorBackButton.textContent = '<< Previous'
      
      paginationWrapper.prepend(paginatorBackButton)
  
      let paginatorForwardButton = document.createElement('a')
      paginatorForwardButton.textContent = 'Forward >>'
      paginatorForwardButton.classList.add('paginator-forward-button')
      paginatorForwardButton.href = `./posts.html?page=${Number(page) + 1}&limit=${limit}` 
  
      paginationWrapper.append(paginatorForwardButton)
      if(page < 2) {
        paginatorBackButton.style.display = 'none'
      } else if (page > 9) {
        paginatorForwardButton.style.display = 'none'
      }
  }
