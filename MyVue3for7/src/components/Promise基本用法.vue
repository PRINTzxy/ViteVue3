<script setup>
  let promise = new Promise(function(resolve, reject){
    console.log("执行代码");
    reject("执行失败")
    //resolve("执行完成")
  })
  console.log('其他代码1111执行')

  promise.then(
    function(value){console.log(`promise中执行了resolve:${value}`)},
    function(error){console.log(`promise中执行了reject:${error}`)}
  )

  console.log('其他代码2222执行');
  
  
</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>
