<script>
defineProps ({
    addend: {
        num: Number,
        required: true
    }
})
</script>

<template>
    <div>
        <h1>{{addend}} + {{addend}}</h1>
    </div>
</template>