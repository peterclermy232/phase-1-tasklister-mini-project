/*document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.getElementById("create-task-form");
  let taskDescription = document.getElementById("new-task-description");
  let newTask = document.getElementById("new-task-priority");

  let taskUl = document.getElementById("tasks");

  taskForm.addEventListener("submit", createNewTask);
});

let createNewTask = event => {
  event.preventDefault();

  let taskDescription = document.getElementById("new-task-decription");
  let newList = document.createElement("li");
  newList.innerText = taskDescription.nodeValue;

  appendNewList(newList);
  event.target.reset();
}

let appendNewList = task => {
  document.getElementById("tasks").append(task)
};
*/

document.addEventListener("DOMContentLoaded", () => {
  

  
  let newTaskForm = document.getElementById("create-task-form");
  let taskDescription = document.getElementById("new-task-description");
  let taskPriority = document.getElementById("new-task-priority");

  
  let newTaskUl = document.getElementById("tasks");

  
  newTaskForm.addEventListener("submit", createNewTask);
});

let createNewTask = event => {
  event.preventDefault();
  
  let taskDescription = document.getElementById("new-task-description");
  let newTask = document.createElement("li");
  newTask.innerText = taskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

let appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
