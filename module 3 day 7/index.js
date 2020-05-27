 async function getUsers (){
 const respond = await fetch('https://jsonplaceholder.typicode.com/users')

const userData = await respond.json();
return userData;

}
window.onload = getUsers()

 async function presentUsers(){
     const users = await getUsers()
     console.log(users)
     let userContainer1 = document.querySelector('.user')
     let userList = document.createElement('table')
        userContainer1.innerHTML +=`
         <table>
         <th>Name</th>
         <th>Username</th>
         <th>Email</th>
        </table>
         `
         userContainer1.appendChild(userList)
        users.forEach(user => {
         let userContainer = document.querySelector('.user')
         let userList = document.createElement('table')
         userList.classList.add('userInfo')
         
         userContainer.innerHTML += `
        <table>
         <tr>
        
         <td>${user.name}  </td>
         
         <td>${user.username}  </td>
         
         <td>${user.email}  </td>
         </tr>
    
         `
        userContainer.appendChild(userList)
         
     });
 }
 window.onload = presentUsers()

 
 //dropdownContainer.innerHTML = '';
 
 
 

  function dropdown(){

    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(respond => respond.json())
    .then(data =>{
        //data.forEach(user => {
            
            let dropdownContainer = document.querySelector('.dropdown')
            let defaultOption = document.createElement('select')
            defaultOption.name.value = ' users'
            defaultOption.innerHTML +=  `
             
            <option value="name">${data[0].name}</option>
           <option value="username">${data[0].username}</option>
           <option value="email">${data[0].email}</option>
           `
    
            dropdownContainer.appendChild(defaultOption)
            

            
            
        
        //})
        
    

    })
 }
 window.onload = dropdown()
// filter 

let searchInput = document.querySelector('#search')
//console.log(searchInput);
if (searchInput.value === ""){
    alert('you must type something')
}else{
     (searchInput.value)
}