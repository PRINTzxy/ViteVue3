<script setup>

    import { ref } from "vue";

    let counter = ref(0);
    let increase=()=>{
        counter.value++;
        console.log(counter.value);
    }
    let decrease=()=>{
        counter.value--;
        console.log(counter.value);
    }
</script>
<template>
    <div>
        <button @click="increase()">+</button>
        {{ counter }}
        <button @click="decrease()">-</button>
    </div>
</template>
<style>

</style>