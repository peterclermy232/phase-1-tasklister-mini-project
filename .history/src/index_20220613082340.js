document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit',(e)=> {
    e.preventDefault()
    builtToDo(e.target.create-task-form.value)
  })
});

function builtToDo(todo)