document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit',(e)=> {
    e.preventDefault()
    builtToDo(e.target.new-task-description.value)
  })
});

function builtToDo(todo){
  const ul = document.getElementById('tasks')
  const btn = document.createElement('button')
  btn.textContent
}