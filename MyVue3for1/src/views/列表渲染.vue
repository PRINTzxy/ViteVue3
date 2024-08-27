<script setup>
    import { ref,reactive } from "vue";

    let production = ref('产品')
    let items = reactive([
        {
            id:1,
            name:'薯片'
        },
        {
            id:2,
            name:'可乐'
        }
    ])

</script>

<template>
    <div>
        <ul>
            <li v-for='item in items' :key='item.id'>
                {{ item.name }}
            </li>
        </ul>
        <ul>
            <li v-for="(item,index) in items" :key="index">
                {{ production }} - {{ index }} - {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<style>

</style>