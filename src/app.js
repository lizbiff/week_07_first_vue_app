import Vue from 'vue';

const app = new Vue({
  el: "#app",
  data: {
    todos: [],
    newTodo: {
      task: "",
      priority: ""
    }
  },
  methods: {
    saveNewTodo: function(){
      this.todos.push(this.newTodo);
      this.newTodo = {};
    }
  }
})
