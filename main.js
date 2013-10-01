'use strict;'

window.onload = function() {
  loadItemCount();
  loadItems();
  bindCheckBoxes();

  // bind click event for clear done button
  document.getElementById("clear-done").onclick = function() {
    todoList.clearDone();
    loadItemCount();
    loadItems();
    bindCheckBoxes();
  };

  // bind click event for new item button
  document.getElementById("add-item").onclick = function() {
    var name = document.getElementById("new-item-name").value;
    var due = document.getElementById("new-item-due").value;
    todoList.add(name, due);
    loadItems();
    loadItemCount();
    bindCheckBoxes();
  };
};

function bindCheckBoxes() {
  var todos = document.getElementsByClassName('todo-check');
  for(var i = 0; i < todos.length; i++) {
    todos.item(i).onclick = function(event) {
      if (event.target.checked == true) {
        todoList.items[event.target.attributes['data-item'].value].done = true;
      } else {
        todoList.items[event.target.attributes['data-item'].value].done = false;
      }
    };
  }
}

function loadItemCount() {
  document.getElementById("todo-count").innerHTML = "Number of todos: " + todoList.count();
}

function loadItems() {
  listElement = document.getElementById("todo-list");
  listElement.innerHTML = "";
  todoList.items.forEach(function(item, index) {
    if (item.done == true) {
      var checked = "checked='true'";
    }
    else {
      var checked = "";
    }
    var listItem = document.createElement("li");
    listItem.className = "list-item";
    listElement.appendChild(listItem).innerHTML = item.name + "&nbsp;(" + item.due + ")<input type='checkbox' data-item='"+ index +"' class='todo-check' " + checked + ">";
  });
}