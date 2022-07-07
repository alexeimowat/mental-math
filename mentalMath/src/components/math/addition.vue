<script setup>
defineProps ({
    addend1: {
        num: Number,
        required: true
    },
    addend2: {
        num: Number,
        required: true
    }
})
</script>

<template>
    <div>
        <h1>{{addend1}} + {{addend2}}</h1>
    </div>
</template>