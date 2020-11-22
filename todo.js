/* 
$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();
    var listItem = $("#text").val();
    if (listItem === "") {
      alert(" Please write something.");
    }
    //Value shown as a test
    else {
      console.log(listItem);
      $("ol").append(
        "<li>" + listItem + "</li> <button class='delete'><i class='fas fa-trash-alt'></i></button>"
      );
      // Clear the input
      $("#text").val("");
    }

    // How to delete a task (It only deletes the button AHHH!!!)
    $("button.delete").click(function() {
      event.preventDefault();
      console.log("clicked");
      $(this).remove();
    });
    $('li').click(function(){
        event.preventDefault();
        console.log('LINE ITEM CLICKED')
        $(this).addClass('completed')
    })
  });
  $('#reset').click(function(){
      event.preventDefault();
      console.log('Reset!')
      $('li').remove();
      $('button.delete').remove();
  })
}); */

// Create the ability to take in input
// Create an array to push the To do list
// Create the Clear All Button functionality
// Create the Add/Enter Functionality
// Create an edit capability
// Create a delete capability



// Selectors

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listners

// listening for todoButton to be clicked and intiates the function addTodo. 
todoButton.addEventListener('click', addTodo);
// Delete event listener and intiates the function to delete the LI
todoList.addEventListener('click', deleteCheck)

// Functions

//Appending the added LI in a div container.
function addTodo(event){
  // Prevents the form from submitting
  event.preventDefault();
  // Todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // Create Li
  const newTodo = document.createElement('li')
  // Bellow Grabs the value of the input in the form.
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // Check Mark Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML="<i class='fas fa-check'></i>"
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  // Check Trash Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML="<i class='fas fa-trash'></i>"
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  // Append to list
  todoList.appendChild(todoDiv)
  // Ckear todoInput value
  todoInput.value="";
}

function deleteCheck(e){
  // to see what you're clicking on
  console.log(e.target)
  const item = e.target;
  //Delete todo
  if(item.classList[0]==="trash-btn"){
    const todo = item.parentElement;
    todo.remove();
  }

// Check Mark
if(item.classList[0]==="complete-btn"){
  const todo = item.parentElement;
  todo.classList.toggle('completed')
}

}