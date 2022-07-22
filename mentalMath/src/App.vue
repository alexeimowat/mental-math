<script>
import Addition from './components/math/addition.vue'
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'
import Subtraction from './components/math/subtraction.vue';
import Multiplication from './components/math/multiplication.vue';

export default {
  components: {
    Header,
    Footer,
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
  <div class="container" style="width:89%">
        <div class="row" style="text-align:center; margin-bottom: 10px;">
            <div class="addCol col">
                <label @click="showAdd = true, showSub = false, showMult = false" class="addLabel">ADDITION</label>
            </div>
            <div class="subCol col">
                <label @click="showAdd = false, showSub = false, showMult = true" class="multLabel">MULTIPLICATION</label>
            </div>
            <div class="multCol col">
                <label @click="showAdd = false, showSub = true, showMult = false" class="subLabel">SUBTRACTION</label>
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
  
  <Footer />

  <!-- <p style="color:white">{{MathModes.call(getSubStatus)}}</p> -->
  <!-- <main> -->
    <!-- <TheWelcome /> -->
  <!-- </main> -->

</template>

<style>
  .mainContent {
    margin: auto;
    /* margin-bottom: 0; */
    width: 90%;
    background-color: #43454A;
    /* border: #E83F95 0.01em solid; */
    border-radius: 10px;
  }

  .addCol {
    /* border: solid 0.01em #43454A; */
    max-width: 60%;
  }

  .subCol {
    /* border: solid 0.01em #43454A; */
    max-width: 60%;
  }

  .multCol {
    /* border: solid 0.01em #43454A; */
    max-width: 60%;
  }

  .addLabel {
    color: azure;
    font-style: italic;
    font-weight: bold;
    /* font-size: small; */
    padding: 5px;
  }

  .multLabel {
    color: azure;
    font-style: italic;
    font-weight: bold;
    /* font-size: small; */
    padding: 5px;
  }

  .subLabel {
    color: azure;
    font-style: italic;
    font-weight: bold;
    /* font-size: small; */
    padding: 5px;
  }

  /* .divLabel {
    color: azure;
    font-style: italic;
    font-weight: bold;
  } */

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

  /* .divLabel:hover {
    color: #38D583;
    cursor: pointer;
  } */
</style>
