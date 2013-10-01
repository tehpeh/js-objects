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
  clearDone: function() {
    this.items = this.items.filter(function(item) {
      return !item.done;
    });
  },
  items: [
    {
      name: "washing", due: "now", done: false
    }
  ]
};