// get elements fom DOM
const addButton = document.getElementById('TheButton');
const todo = document.getElementById('todolist');
const output = document.getElementById('output');

// init new variables
let tasks = [];
let d = new Date();
let tid = 0;

function addTask(arg) {
  const v = document.getElementById('task');

  // if no task is entered, return blank
  if (v.value === '') {
    return
  }

  // create task with checkbox
  const node = document.createElement('span');
  const textNode = document.createTextNode(' ' + v.value + ' ');
  node.appendChild(textNode);
  let input = document.createElement('input');
  input.type = 'checkbox'
  input.name = v.value
  input.setAttribute('class', 'testklasse');

  // add task to list of tasks
  todo.prepend(document.createElement('br'))
  todo.prepend(node)
  todo.prepend(input)

  // get current time
  tid = d.getTime();

  // create object
  let object = {
    timestamp: tid,
    task: v.value
  }

  // add object to list
  tasks.push(object)
  // clear input
  v.value = '';
}

function counter() {
  // Count checkboxes and update result
  let totalt = tasks.length;
  let antallFerdig = document.querySelectorAll('input:checked').length;
  output.innerHTML = 'Done: ' + antallFerdig + '/' + totalt;
}

addButton.addEventListener('click', function(event) {
  // on submit
  addTask();
  counter();
})
