<template>
    <div class="container" style="width:100%">
        <div class="row" style="text-align:center; margin-bottom: 10px; margin-top: 0;">
            <div class="col">
                <label class="addLabel">ADDITION</label>
            </div>
            <div class="col">
                <label class="multLabel">MULTIPLICATION</label>
            </div>
            <div class="col">
                <label @click="subClick" class="subLabel">SUBTRACTION</label>
            </div>
            <div class="col">
                <label class="divLabel">DIVISION</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        var sub = "sub has been clicked!";
        var subBool = false;

        function subClick() {
            subBool = !subBool;
            console.log(subBool);
        }

        function getSubStatus() {
            return subBool;
        }

        return {
            sub,
            subClick,
            subBool,
        };
    }
}
</script>

<style>
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