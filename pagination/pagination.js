export function renderPaginationLinks(pageLimit,urlPage,number) {
    let urlParams = document.location.search
    let serachParams = new URLSearchParams(urlParams)
    let page = serachParams.get('page')
  
    let total = number;
    let limit = pageLimit
    let pages = Math.ceil(total/limit)

    if(pages === 1){
      return;
    }

    let paginationWrapper = document.createElement('div')
    paginationWrapper.classList.add('paginator-wrapper')
  
    for(let i = 1; i <= pages; i++) {
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
      paginatorBackButton.href = `./${urlPage}.html?page=${page - 1}&limit=${limit}` 
      paginatorBackButton.classList.add('paginator-back-button')
      paginatorBackButton.textContent = '<< Previous'
      
      paginationWrapper.prepend(firstPaginationPageItem,paginatorBackButton)
  
      let lastPaginationPageItem = document.createElement('a')
      lastPaginationPageItem.href = `./${urlPage}.html?page=${pages}&limit=${limit}`
      lastPaginationPageItem.textContent = 'Last'

      if (page < 2 ) {
        firstPaginationPageItem.style.display = 'none'
        }  
      if (page == pages) {
        lastPaginationPageItem.style.display = 'none'
        }

      let paginatorForwardButton = document.createElement('a')
      paginatorForwardButton.textContent = 'Forward >>'
      paginatorForwardButton.classList.add('paginator-forward-button')
      paginatorForwardButton.href = `./${urlPage}.html?page=${Number(page) + 1}&limit=${limit}` 
      paginationWrapper.append(paginatorForwardButton,lastPaginationPageItem)

      if(page < 2) {
        paginatorBackButton.style.display = 'none'
      } else if (page >= pages) {
        paginatorForwardButton.style.display = 'none'
      }

      let paginationSelectElement = document.createElement('select')
      let paginationOptionElement = document.createElement('option')
      paginationOptionElement.textContent = '1'
      let paginationOptionElement1 = document.createElement('option')
      paginationOptionElement1.textContent = 5
      let paginationOptionElement2 = document.createElement('option')
      paginationOptionElement2.textContent = 10
      let paginationOptionElement3 = document.createElement('option')
      paginationOptionElement3.textContent = 15

      paginationSelectElement.append(paginationOptionElement,paginationOptionElement1,paginationOptionElement2, paginationOptionElement3)

      paginationSelectElement.addEventListener('change', (e) => {
        let optionValue = e.target.value
        window.location.href = `./${urlPage}.html?page=1&limit=${optionValue}`
      })


      paginationWrapper.append(paginationSelectElement)



  }
