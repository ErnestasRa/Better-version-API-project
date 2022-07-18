
import headerElement from "../header/header.js"
import studentList from "./studentsListView.js"
import {getAllUsers} from './usersController.js'

async function init() {
  headerElement()
  let users = await getAllUsers()
  studentList(users)
}


 

init()