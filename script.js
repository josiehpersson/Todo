const newTodo = document.getElementById("new-todo");
const addTodoBtn = document.getElementById("new-todo-btn");
const todoList = document.getElementById("todo-list");
const todoListItems = document.querySelector('#todo-list');
//FUNKAR

const getTodo = () => {
    let todo = newTodo.value;
    createTodo(todo);
}
//FUNKAR

const createTodo = (todoItem) => {
    let listItem = document.createElement('li');
    let todo = document.createTextNode(todoItem);
    let deleteTodoBtn = document.createElement('button');
    listItem.className = 'todo-item';
    todo.className="todo-text";
    deleteTodoBtn.className = 'todo-item-delete-btn';
    deleteTodoBtn.innerText = 'X';
     listItem.appendChild(todo);
     listItem.appendChild(deleteTodoBtn);
     displayTodo(listItem);
}
//FUNKAR
const displayTodo = (todoItem) => {
let todo = todoItem;
todoList.appendChild(todo);
saveTodo(todoList);
newTodo.value = '';
}
//FUNKAR

const saveTodo = (todoItem) => {
    let todos = todoItem.innerHTML;
    localStorage.setItem('todoList', todos);
}
//FUNKAR

window.onload = () => {
    let todos = localStorage.getItem('todoList');
    if(todos === undefined || todos === null || todos === '') {
        todos.innerHTML += "No todos avaliable";
    } else todoList.innerHTML += todos;
}
//FUNKAR

todoListItems.onclick = (e) => {
if(e.target.className==='todo-item-delete-btn') {
    let removeTodo = e.target.parentNode;
    deleteTodo(removeTodo);
} 
else return
}
//FUNKAR
const deleteTodo = (removeThis) => {
    todoList.removeChild(removeThis);
    localStorage.removeItem(removeThis);
    saveTodo(todoList);
}
//FUNKAR
addTodoBtn.onclick = () => {
    getTodo();
};
