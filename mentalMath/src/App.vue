<script>
import Addition from './components/math/addition.vue'
import Header from './components/header/header.vue'
import Subtraction from './components/math/subtraction.vue';
import Multiplication from './components/math/multiplication.vue';

export default {
  components: {
    Header,
    Subtraction,
    Addition,
    Multiplication
},
  data() {

    return {
      showAdd: true,
      showSub: false,
      showMult: false
    };
  }
}

</script>

<template>
  <Header />
  <div class="container" style="width:100%">
        <div class="row" style="text-align:center; margin-bottom: 10px; margin-top: 0;">
            <div class="col">
                <label @click="showAdd = true, showSub = false, showDiv = false, showMult = false" class="addLabel">ADDITION</label>
            </div>
            <div class="col">
                <label @click="showAdd = false, showSub = false, showDiv = false, showMult = true" class="multLabel">MULTIPLICATION</label>
            </div>
            <div class="col">
                <label @click="showAdd = false, showSub = true, showDiv = false, showMult = false" class="subLabel">SUBTRACTION</label>
                <!-- <button @click="displaySub()">Sub</button> -->
            </div>
        </div>
  </div>

  <div v-if="showAdd" class="mainContent">
    <Addition />
  </div>
  <div v-else-if="showMult" class="mainContent">
    <Multiplication />
  </div>
  <div v-else class="mainContent">
    <Subtraction />
  </div>

  <!-- <p style="color:white">{{MathModes.call(getSubStatus)}}</p> -->
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

  .addLabel {
        color: azure;
        font-style: italic;
        font-weight: bold;
    }

    .multLabel {
        color: azure;
        font-style: italic;
        font-weight: bold;
    }

    .subLabel {
        color: azure;
        font-style: italic;
        font-weight: bold;
    }

    .divLabel {
        color: azure;
        font-style: italic;
        font-weight: bold;
    }

    .addLabel:hover {
        color: #E83F95;
        cursor: pointer;
    }

    .multLabel:hover {
        color: #3F40E8;
        cursor: pointer;
    }

    .subLabel:hover {
        color: #32CAFF;
        cursor: pointer;
    }

    .divLabel:hover {
        color: #38D583;
        cursor: pointer;
    }
</style>
