<template>
    <p class="titleHeaderMult">MULTIPLICATION</p>
    <form @submit.prevent="checkAnswer">
        <!-- Expression -->
        <div id="theExpressionMult">
            <p class="expressionMult" style="margin-bottom 0">{{num1}} x {{num2}}</p>
        </div>
        <!-- <div id="theExpressionMult" v-else>
            <p class="expressionMult" style="margin-bottom 0">What is {{percents.at(percentsIndex)}}% of {{num2}}</p>
        </div> -->
        <div v-if="numTimesWrong > 0" class="row wrongSub">
            <p>Incorrect, try again</p>
            <!-- <span style="text-align:center">Incorrect, try again</span> -->
        </div>
        <div v-else>
            <p>&nbsp;</p>
        </div>

        <div class="row d-flex justify-content-center">
            <div class="col-sm-auto">
                <input v-model="userAnswer" name="userAnswer" class="form-control" type="number" style="text-align: center; width: 80%; margin: auto" required>

                <!-- <input v-model="userAnswer" name="userAnswer" class="form-control" style="text-align:center;font-size: xx-large;" type="number" required> -->
                <button class="btn btn-primary mt-3" style="display: block; width: 80%; margin: auto;">Check</button>

            </div>
        </div>
    </form>

    <div class="container" style="max-width: 30%; margin-top: 20px;">
        <div class="row">
            <div class="col-sm" :class="{ 'selectedMult': difficultyLevel.at(0).enabled, 'multBtn': !difficultyLevel.at(0).enabled }" style="text-align: center" @click="difficulty(0)">
                <label class="btn" style="color:azure" id="0">
                    <!-- <input type="radio" name="options" id="easy" autocomplete="off" checked>  -->
                    Easy
                </label>
            </div>
            <div class="col-sm" :class="{ 'selectedMult': difficultyLevel.at(1).enabled, 'multBtn': !difficultyLevel.at(1).enabled }" style="text-align: center;" @click="difficulty(1)">
                <label class="btn" style="color:azure" id="1">
                    <!-- <input type="radio" name="options" id="medium" autocomplete="off">  -->
                    Medium
                </label>
            </div>
            <div class="col-sm" :class="{ 'selectedMult': difficultyLevel.at(2).enabled, 'multBtn': !difficultyLevel.at(2).enabled }" style="text-align: center;" @click="difficulty(2)">
                <label class="btn" style="color:azure" id="2">
                    <!-- <input type="radio" name="options" id="hard" autocomplete="off">  -->
                    Hard
                </label>
            </div>
            
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col">
                <p class="streakMult">Streak: {{userStreak}} &nbsp; Best: {{allTimeBest}}&nbsp;</p>
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
            maxLevel: 10,
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

        /* Function takes the user input and compares it to what the actual result should be
        If the answer is correct, the user streak is increased and new numbers are generated.
        If wrong, user must continue to answer the same question until getting a correct answer
        */
        function checkAnswer() {
            // if (!difficultyLevel.value[3].enabled) {
            if (num1.value * num2.value === userAnswer.value) {
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
            // percents,
            // percentsIndex
        };
    }
}

</script>

<style>
    .titleHeaderMult {
        color: #3F40E8;
        font-weight: bolder;
        font-style: italic;
        font-size: x-large;
        margin: 0;
    }

    .expressionMult {
        font-size: 75px;
        font-weight: bolder;
        text-align: center;
        color: azure;
        margin-bottom: -20px;
    }

    .streakMult {
        text-align: right;
        color: azure;
        margin-bottom: 20px;
    }

    .selectedMult {
        background-color: #3F40E8;
        border: #3F40E8 solid 0.01em;
        color: black;
        margin: 2px;
        border-radius: 5px;
        cursor: pointer;
    }

    .selectedMult:hover {
        background-color: #4445FA;
    }

    .wrongMult {
        /* background-color: red; */
        color:red;
        font-weight: bold;
        font-size: medium;
    }

    .difficultyMultBtn {
        border: 0.01em solid azure;
    }

    .multBtn {
        background-color: #3B3B3B;
        border: 0.01em solid #484848;
        cursor: pointer;
        margin: 2px;
        border-radius: 5px;
    }

    .multBtn:hover {
        background-color: #2D2D2D;
    }

</style>