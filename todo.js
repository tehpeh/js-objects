var todoList = {
  add: function(name, due) {
    this.items.push(
      {
        name: name,
        due: due,
        done: false
      }
    );
  },
  count: function() {
    return this.items.length;
  },
  items: [
    {
      name: "washing", due: "now", done: false
    }
  ]
};