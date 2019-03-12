/* Initial Deliverables
- users should be able to type a task into the input field
- users should be able to click some form of a submit button
- the task string that the user provided should appear on the DOM after the submit button has been activated
*/

/* Stretch Deliverables
- A delete function that will remove tasks from your list
- A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
- As a challenge, implement a sorting functionality that displays the tasks ASC/DESC based on priority
- An additional input field (e.g. user, duration, date due)
- Ability to edit tasks
- Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
*/

let mainContent = document.querySelector("#main-content")
let createTaskForm = document.querySelector("#create-task-form")
let newTaskDescription = document.querySelector("#new-task-description")
let dateDue = document.querySelector("#date-due")
let list = document.querySelector("#list")
let tasks = document.querySelector("#tasks")

// Definitely need to prevent the form from defaulting to a new request
// Does the second argument *need* to be an anonymous funct?
createTaskForm.addEventListener("submit", function(event) {
  addTask(event);
})

function addTask(event) {
  event.preventDefault();
  var element = document.createElement('li')
  element.innerText = newTaskDescription.value
  tasks.appendChild(element).appendChild(addDueDate());

  let deleteButton = document.createElement('button')
  deleteButton.innerText = "Delete"
  element.appendChild(deleteButton)
  deleteButton.addEventListener('click', function(){
    deleteButton.parentElement.remove();
  })
}

function addDueDate(){
  let dueDate = document.createElement('p');
  dueDate.innerText = dateDue.value;
  return dueDate
}
// in addTask make a button, then add eventlistener to that button that deletes it's parent (the li)
