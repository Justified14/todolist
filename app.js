let addForm = document.querySelector(".add");
let list = document.querySelector(".todos");


addForm.addEventListener ("submit", (a) => {
    a.preventDefault();
    let todo = addForm.add.value.trim();
  
    if (todo.length != 0) {
      generateTemplate(todo);
      addForm.reset();
    } else {
      alert("Please enter a task");
    }
  });

let generateTemplate = (todo) => {
  let NewTask =
    `<li class="list-group-item d-flex justify-content-between align-items-center"><span>${todo}</span><i class="bi bi-trash delete"></i></li>`;
    list.innerHTML += NewTask
};

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
}) 
