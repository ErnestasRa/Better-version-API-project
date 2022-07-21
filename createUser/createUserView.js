import {formErrorHandler} from "../functions.js"


export async function createAddress(createdUser) {
    let {name, username, email, phone, website, id} = createdUser
    let {street, suite, city, zipcode} = createdUser.address
    
    let userDiv = document.createElement('div')
    userDiv.classList.add('user-div')
    let userElement = document.createElement('ul')
    userElement.classList.add('user-element')

    let nameElement = document.createElement('li')
    nameElement.innerHTML = `User name: <strong>${name}</strong>`
    let usernameElement = document.createElement('li')
    usernameElement.innerHTML = `Username: <strong>${username}</strong>`
    let userEmailElement = document.createElement('li')
    userEmailElement.innerHTML = `User email: <strong>${email}</strong>`
    let userAddress = document.createElement('li')
    userAddress.textContent = 'User address:'

    let userAddressElement = document.createElement('ul')
    userAddressElement.classList.add('user-address-element')
    let userAddressStreetElement = document.createElement('li')
    userAddressStreetElement.innerHTML =`Street: ${street} `
    let userAddressSuiteElement = document.createElement('li')
    userAddressSuiteElement.innerHTML =`Suite: ${suite}`
    let userAddressCityElement = document.createElement('li')
    userAddressCityElement.innerHTML =`City: ${city}`
    let userAddressZipcodeElement = document.createElement('li')
    userAddressZipcodeElement.innerHTML =`Zipcode: ${zipcode}`
    let userPhoneElement = document.createElement('li')
    userPhoneElement.innerHTML = `Phone: <strong>${phone}</strong>`
    let userWebsiteElement = document.createElement('li')
    userWebsiteElement.innerHTML = `User website: <strong>${website}</strong>`

    let userIDelement = document.createElement('li')
    userIDelement.innerHTML = `User ID: ${id}`

    userAddressElement.append(userAddressStreetElement, userAddressSuiteElement, userAddressCityElement, userAddressZipcodeElement)
    userElement.append(nameElement, usernameElement, userEmailElement, userPhoneElement, userWebsiteElement,userAddress, userAddressElement,userIDelement)
    userDiv.append(userElement)
    document.body.append(userDiv)
    
    
}