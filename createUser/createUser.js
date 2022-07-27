import headerElement from "../header/header.js"
import {createUser} from "./createUserController.js"
import {createAddress} from "./createUserView.js"
import{fetchAllUsers} from "../users/usersController.js"


  init()

 async function init() {
    headerElement()
    const createUserForm = document.getElementById('create-user-form')
    createUserForm.addEventListener('submit', async (e) => {
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
    
        let newUser = { 
          name: `${nameInput}`,
          username: `${usernameInput}`,
          email: `${userEmailInput}`,
          address: {
            street: `${userAddressStreet}`,
            suite: `${userAddressSuite}`,
            city: `${userAddressCity}`,
            zipcode: `${userAddressZipcode}`,
          },
          phone: `${userPhoneInput}`,
          website: `${userWebsiteInput}`,
          
        }
        let editedAddress = await createUser(newUser)
        createAddress(editedAddress)
        createUserForm.reset()
      });









  }










