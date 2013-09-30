'use strict;'

window.onload = function() {
  loadItemCount();
  loadItems();

  // bind click event for new item
  document.getElementById("add-item").onclick = function() {
    var name = document.getElementById("new-item-name").value;
    var due = document.getElementById("new-item-due").value;
    todoList.add(name, due);
    loadItems();
    loadItemCount();
  };
};

function loadItemCount() {
  document.getElementById("todo-count").innerHTML = "Number of todos: " + todoList.count();
}

function loadItems() {
  listElement = document.getElementById("todo-list");
  listElement.innerHTML = "";
  todoList.items.forEach(function(item) {
    var listItem = document.createElement("li");
    listElement.appendChild(listItem)
    .innerHTML = item.name + "&nbsp;(" + item.due + ")<input type='checkbox' class='todo-check'>";
  });
}