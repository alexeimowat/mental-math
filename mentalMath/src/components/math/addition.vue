<template>
    <div>
        <form @submit.prevent="checkAnswer">
            <h1> {{num2}} + {{num1}}</h1>
            <input v-model="userAnswer" name="userAnswer" type="number" required>
            <button>Check</button>
        </form>
    </div>
    <div>
        <button @click="difficulty(0)" :class="{ selected : difficultyLevel[0].enabled }">Easy</button>
        <button @click="difficulty(1)" :class="{ selected : difficultyLevel[1].enabled }">Medium</button>
        <button @click="difficulty(2)" :class="{ selected : difficultyLevel[2].enabled }">Hard</button>
        
    </div>
    <p>Streak: {{userStreak}}</p>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        //var difficultyLevel = 10;
        var difficultyLevel = ref([{
            id: 'easy',
            level: 10,
            enabled: true
        },
        {
            id: 'medium',
            level: 50,
            enabled: false
        },
        {
            id: 'hard',
            level: 150,
            enabled: false
        }
        ]);
        var currentLevel = 0;
        var userAnswer = ref('');
        var isCorrect = false;
        var userStreak = ref(0);
        var num1 = ref(Math.floor(Math.random() * difficultyLevel.value[currentLevel].level));
        var num2 = ref(Math.floor(Math.random() * difficultyLevel.value[currentLevel].level));

        function checkAnswer() {
            console.log(userAnswer.value);
            if (num1.value + num2.value === userAnswer.value) {
                isCorrect = true;
                userStreak.value++;
                newRandomNums();
            }
            else {
                console.log("Wrong");
                userStreak.value = 0;
            }
        }

        function newRandomNums() {
            num1.value = Math.floor(Math.random() * difficultyLevel.value[currentLevel].level);
            num2.value = Math.floor(Math.random() * difficultyLevel.value[currentLevel].level);
            userAnswer.value = '';
        }

        function difficulty(newLvl) {
            difficultyLevel.value[currentLevel].enabled = !difficultyLevel.value[currentLevel].enabled;
            difficultyLevel.value[newLvl].enabled = !difficultyLevel.value[newLvl].enabled;
            currentLevel = newLvl;
        }

        return {
            num1,
            num2,
            userStreak,
            isCorrect,
            checkAnswer,
            newRandomNums,
            difficultyLevel,
            difficulty,
            userAnswer,
        };
    }
}

</script>

<style>
    .selected {
        background-color: grey;
    }
</style>