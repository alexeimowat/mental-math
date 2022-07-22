<template>
        <p class="titleHeader">ADDITION</p>
        <form @submit.prevent="checkAnswer">
            <!-- Expression -->
            <div id="theExpression">
                <p class="expression">{{num1}} + {{num2}}</p>
            </div>
            <div v-if="numTimesWrong > 0" class="row wrong">
                <p>Incorrect, try again</p>
            </div>
            <div v-else>
                <p>&nbsp;</p>
            </div>
            <!-- User input box and verify button -->
            <div class="row d-flex justify-content-center">
                <div class="col-sm-auto">
                    <input v-model="userAnswer" name="userAnswer" class="form-control" type="number" style="text-align: center; width: 60%; margin: auto" required>
                    <button class="btn btn-primary mt-3" style="display: block; width: 60%; margin: auto;">Check</button>
                </div>
                
            </div>
        </form>

        <!-- Container for difficulty buttons -->
        <div class="container" style="max-width: 30%; margin-top: 20px;">
            <div class="row">
                <div class="col-sm" :class="{ 'selected': difficultyLevel.at(0).enabled, 'easyBtn': !difficultyLevel.at(0).enabled }" style="text-align: center" @click="difficulty(0)">
                    <label class="btn" style="color:azure" id="0">
                        Easy
                    </label>
                </div>
                <div class="col-sm" :class="{ 'selected': difficultyLevel.at(1).enabled, 'easyBtn': !difficultyLevel.at(1).enabled }" style="text-align: center;" @click="difficulty(1)">
                    <label class="btn" style="color:azure" id="1">
                        Medium
                    </label>
                </div>
                <div class="col-sm" :class="{ 'selected': difficultyLevel.at(2).enabled, 'easyBtn': !difficultyLevel.at(2).enabled }" style="text-align: center;" @click="difficulty(2)">
                    <label class="btn" style="color:azure" id="2">
                        Hard
                    </label>
                </div>
            </div>
        </div>

        <!-- User streaks -->
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
        // Object for difficulty level tracking and specification. 
        // Numbers that will be generated are as follows:
        // Easy: numbers from 0-20
        // Medium: numbers from 21-74
        // Hard: numbers from 75-100
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
        
        // Random number generator for expressions
        var num1 = ref(Math.floor(Math.random() * (difficultyLevel.value[currentLevel].maxLevel - 
            difficultyLevel.value[currentLevel].minLevel)) + difficultyLevel.value[currentLevel].minLevel);
        var num2 = ref(Math.floor(Math.random() * (difficultyLevel.value[currentLevel].maxLevel - 
            difficultyLevel.value[currentLevel].minLevel)) + difficultyLevel.value[currentLevel].minLevel);

        /* Function takes the user input and compares it to what the actual result should be
        If the answer is correct, the user streak is increased and new numbers are generated.
        If wrong, user must continue to answer the same question until getting a correct answer
        */
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

        /* Generates new numbers based on the current difficulty level.
        Also resets variables determining user answer
        */
        function newRandomNums() {
            num1.value = Math.floor(Math.random() * (difficultyLevel.value[currentLevel].maxLevel - 
                difficultyLevel.value[currentLevel].minLevel)) + difficultyLevel.value[currentLevel].minLevel;
            num2.value = Math.floor(Math.random() * (difficultyLevel.value[currentLevel].maxLevel - 
                difficultyLevel.value[currentLevel].minLevel)) + difficultyLevel.value[currentLevel].minLevel;
            
            // New numbers have been generated, so clear their answer, mark is correct as false, and 
            // number of times wrong 0
            userAnswer.value = '';
            isCorrect = false;
            numTimesWrong.value = 0;
        }

        /*  Change the difficulty level based on user selection. Once we've made this change to the object,
        generate new random numbers based on the difficulty level ranges
        */
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
    .titleHeader {
        color: #E83F95;
        font-weight: bolder;
        font-style: italic;
        font-size: x-large;
        margin: 0;
    }

    .expression {
        font-size: 75px;
        font-weight: bolder;
        text-align: center;
        color: azure;
        margin-bottom: -20px;
    }

    .streak {
        text-align: right;
        color: azure;
        margin-bottom: 20px;
    }

    .selected {
        background-color: #E83F95;
        border: #E83F95 solid 0.01em;
        color: black;
        border-radius: 5px;
        margin: 2px;
        cursor: pointer;
    }

    .selected:hover {
        background-color: #F4439D;
        
    }

    .wrong {
        /* background-color: red; */
        color:red;
        font-weight: bold;
        font-size: medium;
    }

    .difficultyBtn {
        border: 0.01em solid azure;
        /* border-radius: 5px; */
    }

    .easyBtn {
        background-color: #3B3B3B;
        border: 0.01em solid #484848;
        cursor: pointer;
        border-radius: 5px;
        margin: 2px;
    }

    .easyBtn:hover {
        background-color: #2D2D2D;
    }

</style>