<template>
    <div>
        <form @submit.prevent="checkAnswer">
            <h1> {{num2}} + {{num1}}</h1>
            <input v-model="userAnswer" name="userAnswer" type="number" required>
            <button>Check</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        var userAnswer = ref('');
        var isCorrect = false;
        var num1 = ref(Math.floor(Math.random() * 10));
        var num2 = ref(Math.floor(Math.random() * 10));

        function checkAnswer() {
            console.log("Checking answer...");
            
            //newRandomNums();
        }

        function newRandomNums() {
            num1.value = Math.floor(Math.random() * 10);
            num2.value = Math.floor(Math.random() * 10);
            userAnswer.value = '';
        }

        return {
            num1,
            num2,
            isCorrect,
            checkAnswer,
            newRandomNums,
            userAnswer,
        };
    }
}

</script>