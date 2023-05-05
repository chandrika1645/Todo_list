const todoList = [
    {name:'make dinner',dueDate:'2022-12-25'},
    {name:'Homework',dueDate:'2022-12-25'}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';
    todoList.forEach(function(todoObject,index){
        const {name,dueDate} = todoObject;

        const html = `<div>${name}</div>
                      <div>${dueDate}</div>   
                      <button class="delete-button" onclick=" todoList.splice(${index},1);
                        renderTodoList();
                       ">
                        Delete
                      </button>
                      `;
        todoListHTML += html;
    });  
    
    document.querySelector('.js-todoList').innerHTML = todoListHTML;
}


function addTodo(){
    const inputElement = document.querySelector('.name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.date-input');
    const dueDate = dateInputElement.value;

    todoList.push({name,dueDate});
    

    inputElement.value = '';

    renderTodoList();
}
