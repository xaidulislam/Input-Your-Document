/*
 * Title: DOM
 * Description: same like befor
 * Author: Saidul Islam
 * Date: 23/8/2021
 */

//veriabols
let newTask = document.querySelector("#new_task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete_task ul");

let creatTask = function (task) {
  let listItem = document.createElement("li");
  let checkbox = document.createElement("input");
  let label = document.createElement("label");

  label.textContent = task;
  checkbox.type = "checkbox";
  listItem.className = "items";

  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem = creatTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
  //bind the new li item
  bindIncompleteTask(listItem, completeTask);
};

let completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  let checkbox = listItem.querySelector('input[type="checkbox"]');
  checkbox.remove();
  completeUl.appendChild(listItem);
  bindCompleteTask(listItem, deleteTask);
};

let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindIncompleteTask = function (taskItem, checkboxClick) {
  let checkbox = taskItem.querySelector('input[type="checkbox"]');
  checkbox.onchange = checkboxClick;
};
let bindCompleteTask = function (taskItem, deleteButtonClick) {
  let deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonClick;
};
for (let i = 0; i < todoUl.children.length; i++) {
  bindIncompleteTask(todoUl.children[i], completeTask);
}
for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteTask(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
