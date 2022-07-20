import headerElement from "../header/header.js"
headerElement()

const createUserForm = document.getElementById('create-user-form')
createUserForm.addEventListener('submit',(e) => {
    e.preventDefault()
    let nameInput = e.target.name.value
    let usernameInput = e.target.username.value
    let userEmailInput = e.target.useremail.value
    let userPhoneInput = e.target.userphone.value
    let userWebsiteInput = e.target.userwebsite.value
    let userAddressCity = e.target.useraddresscity.value
    let userAddressStreet = e.target.useraddressstreet.value
    let userAddressSuite = e.target.useraddresssuite.value
    let userAddressZipcode = e.target.useraddresszipcode.value

    
    fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
    "id": 1,
    "name": `${nameInput}`,
    "username": `${usernameInput}`,
    "email": `${userEmailInput}`,
    "address": {
        "street": `${userAddressStreet}`,
        "suite": `${userAddressSuite}`,
        "city": `${userAddressCity}`,
        "zipcode":`${userAddressZipcode}`,
    },
    "phone": `${userPhoneInput}`,
    "website": `${userWebsiteInput}`,
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then((json) => {
    console.log(json)
    console.log(json.address.city)
    let userDiv = document.createElement('div')
    userDiv.classList.add('user-div')
    let userElement = document.createElement('ul')
    userElement.classList.add('user-element')

    let nameElement = document.createElement('li')
    nameElement.innerHTML = `User name: <strong>${json.name}</strong>`
    let usernameElement = document.createElement('li')
    usernameElement.innerHTML = `Username: <strong>${json.username}</strong>`
    let userEmailElement = document.createElement('li')
    userEmailElement.innerHTML = `User email: <strong>${json.email}</strong>`
    let userAddress = document.createElement('li')
    userAddress.textContent = 'User address:'

    let userAddressElement = document.createElement('ul')
    userAddressElement.classList.add('user-address-element')
    let userAddressStreetElement = document.createElement('li')
    userAddressStreetElement.innerHTML =`Street: ${json.address.street}`
    let userAddressSuiteElement = document.createElement('li')
    userAddressSuiteElement.innerHTML =`Suite: ${json.address.suite}`
    let userAddressCityElement = document.createElement('li')
    userAddressCityElement.innerHTML =`City: ${json.address.city}`
    let userAddressZipcodeElement = document.createElement('li')
    userAddressZipcodeElement.innerHTML =`Zipcode: ${json.address.zipcode}`
    let userPhoneElement = document.createElement('li')
    userPhoneElement.innerHTML = `Phone: <strong>${json.phone}</strong>`
    let userWebsiteElement = document.createElement('li')
    userWebsiteElement.innerHTML = `User website: <strong>${json.website}</strong>`

    let userIDelement = document.createElement('li')
    userIDelement.innerHTML = `User ID: ${json.id}`



    
    userAddressElement.append(userAddressStreetElement, userAddressSuiteElement, userAddressCityElement, userAddressZipcodeElement)
    userElement.append(nameElement, usernameElement, userEmailElement, userPhoneElement, userWebsiteElement,userAddress, userAddressElement,userIDelement)
    userDiv.append(userElement)
    document.body.append(userDiv)
    
    e.target.reset()

  });









})
