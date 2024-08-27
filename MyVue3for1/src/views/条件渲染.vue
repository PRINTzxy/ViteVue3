<script setup>
    import { ref } from "vue";

    let anysome = ref(true)

</script>

<template>
    <div>
        <div>
            <h1 v-if="anysome" style="color:red"> Vue is anysome!</h1>
            <h1 v-else style="color:green">Oh no 😢</h1>
            <button @click="anysome = !anysome">切换</button>
        </div>
        <div>
            <!-- 不同之处在于 `v-show` 会在 DOM 渲染中保留该元素；`v-show` 仅切换了该元素上名为 `display` 的 CSS 属性 -->
            <h1 v-show="anysome">Vue is awesome!</h1>
            <h1 v-if="anysome" style="color:orange"> Vue is anysome!</h1>
            <h1 v-else style="color:blue">Oh no 😢</h1>
            <button @click="anysome = !anysome">切换</button>
        </div>
    </div>
</template>

<style>

</style>