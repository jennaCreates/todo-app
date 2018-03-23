const addTaskBtn = document.querySelector('#add-Task-Btn');
const inputField = document.querySelector('#task');
const filterInput = document.querySelector('#filter');
const clearTasks = document.querySelector('.clear-tasks');
const unorderedList = document.querySelector('.collection');
const clearAllTask = document.querySelector('.collection-item');
const deleteOneItem = document.querySelectorAll('.delete-item');

let task;

listenforEvents();

function listenforEvents(){
  addTaskBtn.addEventListener('click', addTaskValue);
  clearTasks.addEventListener('click', clearAllTaskAtOnce);
  unorderedList.addEventListener('click', removeTask);
}

function addTaskValue(e){
  if (inputField.value === ''){
    alert('Please add a task');
    return;
  }

  task = inputField.value;
  console.log(task);
  inputField.value = '';
  // Make a list item out of that input
  let listItem;
  let clearBtn;
  let closeIcon;
  // Create the list item that the task will be presented on
  listItem = document.createElement('li');
  // Add the class to that list item
  listItem.className = 'collection-item';
  // Add the task to innerHTML of the li
  listItem.innerHTML = task;
  // Create anchor tag to hold the "x" icon
  clearBtn = document.createElement('a');
  // Add the class to that anchor tag
  clearBtn.className = 'delete-item secondary-content';
  // Create the icon that goes in the anchor tag
  closeIcon = document.createElement('i');
  // Add the class name to the icon
  closeIcon.className = 'fa fa-remove';
  // Adding the close icon to the anchor tag
  clearBtn.appendChild(closeIcon);
  // Adding the anchor tag to the li
  listItem.appendChild(clearBtn);
  // Adding the li to the ul
  unorderedList.appendChild(listItem);

  e.preventDefault();
}

function clearAllTaskAtOnce(){
  unorderedList.innerHTML = '';
}

clearAllTaskAtOnce();


function removeTask(e){
  // if the e.target.parentElement (the a tag contains the class delete item (which it does))
  if(e.target.parentElement.classList.contains('delete-item')){
    // console.log(e.target.parentElement);
    // Then we want to remove that parent element ( In this case is the unordered list )
    e.target.parentElement.parentElement.remove();
    // console.log(e.target.parentElement.parentElement);
  } 
  
}
