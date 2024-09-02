<script setup>
  //普通函数，顺序执行
  console.log('普通函数')
  
  let fun1 = () => {
    console.log('fun1 invoked')
  
  }

  fun1()

  console.log('other code processon');

  //回调函数，表示未来才会执行的一些功能，后续代码不会等待该函数执行完毕就开始执行了
   console.log('回调函数')

   setTimeout(function () {
    console.log('setTimeout invoked') //两秒后才会执行
   },2000)
   console.log('other code processon')
   
</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>
