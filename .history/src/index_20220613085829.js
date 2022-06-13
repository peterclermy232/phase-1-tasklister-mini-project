document.addEventListener("DOMContentLoaded", () => {
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
  newList.innerHTML = taskDescription.nodeValue;

  appendNew
}
