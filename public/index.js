fetch('/get')
.then(response => response.json())
.then(results =>{
  const todoList = document.getElementById('table1');
  results.forEach(user => {
    const todoItem = document.createElement('li')
    todoItem.innerHTML=`
    Todo-Name:${user.tname}---
    Description:${user.description}
    <button onclick="editTodo(${user.id})">✅</button>
    <button onclick="deleteTodo(${user.id})">❌</button>`;
     
    todoList.appendChild(todoItem);
    })
  })
  .catch(error=>console.log(error));



function deleteTodo(todoId){
    axios.delete(`/delete/${todoId}`)
    .then(response => {
      console.log(response);
      
  
      location.reload();
    })
    .catch(error => console.log(error));
}

function editTodo(todoId) {
    axios.get(`/get/${todoId}`)
      .then(response => {
        const todoList = document.getElementById('table2');
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
          Todo-Name: ${response.data.tname} ---
          Description: ${response.data.description}`;
        todoList.appendChild(todoItem);
  
        // axios.delete(`/delete/${todoId}`)
        //   .then(response => {
        //     console.log(response);
        //     location.reload();
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
      })
      .catch(error => {
        console.log(error);
      });
  }
  