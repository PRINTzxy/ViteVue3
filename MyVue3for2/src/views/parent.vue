<script setup>
  import Son from './Son.vue'
  import {ref,reactive,toRefs} from 'vue'
  let message = ref('parent data!')
  let title = ref(42)
  function changeMessage(){
    message.value = '修改数据！'
    title.value++
  }
</script>
<template>
  <div>
    <h2>{{ message }}</h2>
    <hr>
    <!-- 使用子组件，并且传递数据！ -->
    <Son :message="message" :title="title"></Son>
    <hr>
    <button @click="changeMessage">点击更新</button>
  </div>
</template>
<style scoped>
</style>