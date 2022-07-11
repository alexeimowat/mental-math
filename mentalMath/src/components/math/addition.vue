<template>
        <form @submit.prevent="checkAnswer">
            <div id="theExpression">
                <p class="expression">{{num1}} + {{num2}}</p>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-3">
                    <input v-model="userAnswer" name="userAnswer" class="form-control" type="number" required>

                    <!-- <input v-model="userAnswer" name="userAnswer" class="form-control" style="text-align:center;font-size: xx-large;" type="number" required> -->
                    <button class="btn btn-primary mt-3" style="display: block; width: 100%;">Check</button>

                </div>
            </div>
        </form>

        <div class="container" style="max-width: 30%;">
            <div class="row">
                <div class="col-sm" style="text-align: center;">
                    <label @click="difficulty(0)" class="btn">
                        <input type="radio" name="options" id="easy" autocomplete="off" checked> Easy
                    </label>
                </div>
                <div class="col-sm" style="text-align: center;">
                    <label @click="difficulty(1)" class="btn">
                        <input type="radio" name="options" id="medium" autocomplete="off"> Medium
                    </label>
                </div>
                <div class="col-sm" style="text-align: center;">
                    <label @click="difficulty(2)" class="btn">
                        <input type="radio" name="options" id="hard" autocomplete="off"> Hard
                    </label>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="streak">Streak: {{userStreak}} &nbsp; Best: {{allTimeBest}}&nbsp;</p>
                </div>
            </div>
        </div>
        
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        // var anExpression = ref([{
        //     id: 'add',
        //     toStr: num1 + " + " + num2,

        // }]);

        var difficultyLevel = ref([{
            id: 'easy',
            minLevel: 0,
            maxLevel: 20,
            enabled: true
        },
        {
            id: 'medium',
            minLevel: 21,
            maxLevel: 74,
            enabled: false
        },
        {
            id: 'hard',
            minLevel: 75,
            maxLevel: 200,
            enabled: false
        }
        ]);
        var currentLevel = 0;
        var userAnswer = ref('');
        
        var isCorrect = false;
        var numTimesWrong = ref(0);
        var userStreak = ref(0);
        var allTimeBest = ref(0);
        
        var num1 = ref(Math.floor(Math.random() * (difficultyLevel.value[currentLevel].maxLevel - 
            difficultyLevel.value[currentLevel].minLevel)) + difficultyLevel.value[currentLevel].minLevel);
        var num2 = ref(Math.floor(Math.random() * (difficultyLevel.value[currentLevel].maxLevel - 
            difficultyLevel.value[currentLevel].minLevel)) + difficultyLevel.value[currentLevel].minLevel);

        function checkAnswer() {
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
            num1.value = Math.floor(Math.random() * (difficultyLevel.value[currentLevel].maxLevel - 
                difficultyLevel.value[currentLevel].minLevel)) + difficultyLevel.value[currentLevel].minLevel;
            num2.value = Math.floor(Math.random() * (difficultyLevel.value[currentLevel].maxLevel - 
                difficultyLevel.value[currentLevel].minLevel)) + difficultyLevel.value[currentLevel].minLevel;
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
    .expression {
        font-size: 75px;
        font-weight: bolder;
        text-align: center;
    }

    .streak {
        text-align: right;
    }

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