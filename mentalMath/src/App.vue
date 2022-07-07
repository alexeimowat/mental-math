<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Addition from './components/math/addition.vue'
// import Addition from './components/math/addition.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div>
      <!-- <HelloWorld msg="You did it!" /> -->
      <Addition addend1=4 addend2=5 />
    </div>
  </header>

  <!-- <main> -->
    <!-- <TheWelcome /> -->
  <!-- </main> -->
</template>

<style>
/* @import './assets/base.css'; */

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
