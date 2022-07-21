<template>
    <p class="titleHeaderSub">SUBTRACTION</p>
    <form @submit.prevent="checkAnswer">
        <div id="theExpression">
            <p class="expressionSub" style="margin-bottom 0">{{num1}} - {{num2}}</p>
        </div>
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
            <div class="col-sm" :class="{ 'selectedSub': difficultyLevel.at(0).enabled, 'subBtn': !difficultyLevel.at(0).enabled }" style="text-align: center" @click="difficulty(0)">
                <label class="btn" style="color:azure" id="0">
                    <!-- <input type="radio" name="options" id="easy" autocomplete="off" checked>  -->
                    Easy
                </label>
            </div>
            <div class="col-sm" :class="{ 'selectedSub': difficultyLevel.at(1).enabled, 'subBtn': !difficultyLevel.at(1).enabled }" style="text-align: center;" @click="difficulty(1)">
                <label class="btn" style="color:azure" id="1">
                    <!-- <input type="radio" name="options" id="medium" autocomplete="off">  -->
                    Medium
                </label>
            </div>
            <div class="col-sm" :class="{ 'selectedSub': difficultyLevel.at(2).enabled, 'subBtn': !difficultyLevel.at(2).enabled }" style="text-align: center;" @click="difficulty(2)">
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
                <p class="streakSub">Streak: {{userStreak}} &nbsp; Best: {{allTimeBest}}&nbsp;</p>
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
            if (num1.value - num2.value === userAnswer.value) {
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
            // document.getElementById(currentLevel).setAttribute("class", )
            
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
    .titleHeaderSub {
        color: #32CAFF;
        font-weight: bolder;
        font-style: italic;
        font-size: x-large;
        margin: 0;
    }

    .expressionSub {
        font-size: 75px;
        font-weight: bolder;
        text-align: center;
        color: azure;
        margin-bottom: -20px;
    }

    .streakSub {
        text-align: right;
        color: azure;
        margin-bottom: 20px;
    }

    .selectedSub {
        background-color: #2FC1F4;
        border: #2FC1F4 solid 0.01em;
        color: black;
        margin: 2px;
        border-radius: 5px;
        cursor: pointer;
    }

    .selectedSub:hover {
        background-color: #32CAFF;
    }

    .wrongSub {
        /* background-color: red; */
        color:red;
        font-weight: bold;
        font-size: medium;
    }

    .difficultySubBtn {
        border: 0.01em solid azure;
    }

    .subBtn {
        background-color: #3B3B3B;
        border: 0.01em solid #484848;
        border-radius: 5px;
        cursor: pointer;
        margin: 2px;
    }

    .subBtn:hover {
        background-color: #2D2D2D;
    }

</style>