document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit',(e)=> {
    e.preventDefault()
    builtToDo(e.target.new-task-description.value)
  })
});

function builtToDo()