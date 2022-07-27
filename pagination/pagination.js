export function renderPaginationLinks(pageLimit,urlPage,number) {
    let urlParams = document.location.search
    let serachParams = new URLSearchParams(urlParams)
    let page = serachParams.get('page')
    
    let total = number;
    let limit = pageLimit
    let currentPage = Math.ceil(total/limit)
    let paginationWrapper = document.createElement('div')
    paginationWrapper.classList.add('paginator-wrapper')
  
    for(let i = 1; i <= currentPage ;i++) {
      let paginationlink = document.createElement('a')
      paginationlink.href = `./${urlPage}.html?page=${i}&limit=${limit}`
      paginationlink.textContent = i;
      paginationWrapper.append(paginationlink)
      document.body.prepend(paginationWrapper)
        
      }
      let firstPaginationPageItem = document.createElement('a')
      firstPaginationPageItem.href = `./${urlPage}.html?page=1&limit=${limit}`
      firstPaginationPageItem.textContent = 'First'

      let paginatorBackButton = document.createElement('a')
      paginatorBackButton.href = `./${urlPage}.html?page=${currentPage - 1}&limit=${limit}` 
      paginatorBackButton.classList.add('paginator-back-button')
      paginatorBackButton.textContent = '<< Previous'
      
      paginationWrapper.prepend(firstPaginationPageItem,paginatorBackButton)
  
      let lastPaginationPageItem = document.createElement('a')
      lastPaginationPageItem.href = `./${urlPage}.html?page=${currentPage}&limit=${limit}`
      lastPaginationPageItem.textContent = 'Last'

      if (page < 2 ) {
        firstPaginationPageItem.style.display = 'none'
      } 
      if (page == currentPage) {
        lastPaginationPageItem.style.display = 'none'
      }

      let paginatorForwardButton = document.createElement('a')
      paginatorForwardButton.textContent = 'Forward >>'
      paginatorForwardButton.classList.add('paginator-forward-button')
      paginatorForwardButton.href = `./${urlPage}.html?page=${Number(currentPage) + 1}&limit=${limit}` 
  
      paginationWrapper.append(paginatorForwardButton,lastPaginationPageItem)
      if(page < 2) {
        paginatorBackButton.style.display = 'none'
      } else if (page >= currentPage) {
        paginatorForwardButton.style.display = 'none'
      }
  }
