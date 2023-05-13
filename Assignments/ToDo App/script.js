const taskinput = document.getElementById("new-task");
const addButton = document.getElementsByTagName("button")[0];
const IncompleteTask = document.getElementById("incomplete-tasks");
const completedTask = document.getElementById("completed-tasks");
//New task
var createnewTask = function (task) {
  var listitem = document.createElement("li");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editbutton = document.createElement("button");
  var deletebutton = document.createElement("button");
  label.innerText = task;
  //each element needs appending
  checkbox.type = "checkbox";
  editInput.type = "text";
  editbutton.innerText = "Edit";
  editbutton.className = "edit";
  deletebutton.innerText = "Delete";
  deletebutton.className = "delete";
  listitem.appendChild(checkbox);
  listitem.appendChild(label);
  listitem.appendChild(editInput);
  listitem.appendChild(editbutton);
  listitem.appendChild(deletebutton);
  return listitem;
};

var addTask = function () {
  var listItem = createnewTask(taskinput.value);
  IncompleteTask.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskinput.value = "";
};
var editTask = function () {
  var listitem = this.parentNode;
  var editInput = listitem.querySelector("input[type=text]");
  var label = listitem.querySelector("label");
  var containsClass = listitem.classList.contains("editMode");

  //If class of the parent is .editmode
  if (containsClass) {
    //switch to .editmode
    //label becomes the inputs value.
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }
  //toggle .editmode on the parent.
  listitem.classList.toggle("editMode");

};

var clearEdit = function () {
  console.log("clicked inside clearedit: ");
  var editInput = listitem.querySelector("input[type=text]");
};

var deleteTask = function () {
  var listitem = this.parentNode;
  var ul = listitem.parentNode;
  ul.removeChild(listitem);
};

var taskCompleted = function () {
  var listitem = this.parentNode;
  completedTask.appendChild(listitem);
  bindTaskEvents(listitem, taskIncomplete);
};

var taskIncomplete = function () {
  var listitem = this.parentNode;
  IncompleteTask.appendChild(listitem);
  bindTaskEvents(listitem, taskCompleted);
};
addButton.onclick = addTask;

var bindTaskEvents = function (tasklistitems, eventHandler) {
  var checkbox = tasklistitems.querySelector("input[type=checkbox]");
  var editbutton = tasklistitems.querySelector("button.edit");
  var deletebutton = tasklistitems.querySelector("button.delete");
  editbutton.onclick = editTask;
  deletebutton.onclick = deleteTask;
  checkbox.onchange = eventHandler;
};
//cycle over incompleteTaskHolder ul list items
//for each list item
for (var i = 0; i < IncompleteTask.children.length; i++) {
  bindTaskEvents(IncompleteTask.children[i], taskCompleted);
}
//cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTask.children.length; i++) {
  bindTaskEvents(completedTask.children[i], taskCompleted);
}
