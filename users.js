
import headerElement from "./header.js"
import studentList from "./studentsListView.js"
headerElement()
function usersPageInit() {

    fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
      .then(res => res.json())
      .then(usersData => {
        studentList(usersData)
      })
  }
  
  usersPageInit();