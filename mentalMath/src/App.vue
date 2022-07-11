<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Addition from './components/math/addition.vue'
import Header from './components/header.vue'
import MathModes from './components/mathModes.vue';

</script>

<template>
  <Header />
  <MathModes />
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
  <div class="mainContent">
    <Addition />
  </div>
  <!-- <main> -->
    <!-- <TheWelcome /> -->
  <!-- </main> -->

</template>

<style>
  .mainContent {
    margin: auto;
    width: 90%;
    background-color: #43454A;
    /* border: #E83F95 0.01em solid; */
    border-radius: 10px;
  }

</style>
<!-- <style>
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
</style> -->
