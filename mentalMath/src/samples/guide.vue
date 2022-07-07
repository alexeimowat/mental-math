<template>
  <h1>Vue 3 Todo App</h1>
  <form @submit.prevent="addNewTodo">
    <label>New Todo</label>
    <input v-model="newTodo" name="newTodo">
    <button>Add New Todo</button>
  </form>
  <button @click="markAllDone">Mark All Done</button>
  <button @click="deleteAll">Delete All</button>
  <button @click="deleteAllDone">Delete All Done</button>
  <ul>
    <li v-for="(todo, index) in todos" :key="todo.id" class="todo">
      <h3 :class="{ done: todo.done }" @click="toggleDone(todo)">{{todo.content}}</h3>
      <button @click="removeTodo(index)">Remove Todo</button>
    </li>
  </ul>
  
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const newTodo = ref('');
    const todos = ref([]);

    function addNewTodo() {
      // console.log(newTodo.value);
      todos.value.push({
        id: Date.now(),
        done: false,
        content: newTodo.value,
      });
      newTodo.value = '';
    }

    function toggleDone(todo) {
      todo.done = !todo.done;
    }

    function removeTodo(index) {
      todos.value.splice(index, 1);
    }

    function markAllDone() {
      todos.value.forEach((todo) => todo.done = true);
    }
    
    function deleteAll() {
      // let len = todos.value.length;
      // for (let i = 0; i < len; i++) {
      //   todos.value.splice(i);
      //}
      //OR
      todos.value = [];
      
    }

    function deleteAllDone() {
      let len = todos.value.length;
      for (let i = 0; i < len; i++) {
        if (todos.value[i].done === true)
          todos.value.splice(i, 1);
      }
    }

    return {
      newTodo,
      toggleDone,
      removeTodo,
      markAllDone,
      deleteAllDone,
      deleteAll,
      todos,
      addNewTodo,
    };
  }
}

</script>

<style>
body {
  font-family: sans-serif;
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 2em;
  width: 80%;
  margin: 0 auto;
}
input, textarea, button, p, div, section, article, select {
  display: 'block';
  width: 100%;
  font-family: sans-serif;
  font-size: 1em;
  margin: 0.5em;
}

.todo {
  cursor: pointer;
}

.done {
  text-decoration: line-through;
}
</style>
