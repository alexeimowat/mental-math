<template>
    <div>
        <form @submit.prevent="checkAnswer">
            <h1> {{num2}} + {{num1}}</h1>
            <input v-model="userAnswer" name="userAnswer" :class="{ wrong : numTimesWrong > 0 }" type="number" required>
            <button >Check</button>
        </form>
    </div>
    <div>
        <button @click="difficulty(0)" :class="{ selected : difficultyLevel[0].enabled }">Easy</button>
        <button @click="difficulty(1)" :class="{ selected : difficultyLevel[1].enabled }">Medium</button>
        <button @click="difficulty(2)" :class="{ selected : difficultyLevel[2].enabled }">Hard</button>
        
    </div>
    <p>Streak: {{userStreak}}</p>
    <p>Best: {{allTimeBest}}</p>
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
            level: 200,
            enabled: false
        }
        ]);
        var currentLevel = 0;
        var userAnswer = ref('');
        //var isCorrect = false;
        var isCorrect = false;
        var numTimesWrong = ref(0);
        var userStreak = ref(0);
        var allTimeBest = ref(0);
        var num1 = ref(Math.floor(Math.random() * difficultyLevel.value[currentLevel].level));
        var num2 = ref(Math.floor(Math.random() * difficultyLevel.value[currentLevel].level));

        function checkAnswer() {
            console.log(userAnswer.value);
            if (num1.value + num2.value === userAnswer.value) {
                isCorrect = true;
                userStreak.value++;
                if (userStreak.value > allTimeBest.value) {
                    allTimeBest.value = userStreak.value;
                }
                newRandomNums();
            }
            else {
                numTimesWrong.value++;
                userStreak.value = 0;
            }
        }

        function newRandomNums() {
            num1.value = Math.floor(Math.random() * difficultyLevel.value[currentLevel].level);
            num2.value = Math.floor(Math.random() * difficultyLevel.value[currentLevel].level);
            userAnswer.value = '';
            isCorrect = false;
            numTimesWrong.value = 0;
        }

        function difficulty(newLvl) {
            difficultyLevel.value[currentLevel].enabled = !difficultyLevel.value[currentLevel].enabled;
            difficultyLevel.value[newLvl].enabled = !difficultyLevel.value[newLvl].enabled;
            currentLevel = newLvl;
            newRandomNums();
        }

        return {
            num1,
            num2,
            userStreak,
            allTimeBest,
            isCorrect,
            checkAnswer,
            newRandomNums,
            difficultyLevel,
            difficulty,
            userAnswer,
            numTimesWrong,
        };
    }
}

</script>

<style>
    .selected {
        background-color: #79A2E0;
        border: #79A2E0;
        color: white;
    }

    .wrong {
        /* background-color: red; */
        border-color: red;
    }
</style>