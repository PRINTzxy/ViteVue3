<script setup>
  let promise = new Promise(
    function(resolve, reject){
      console.log('执行代码')
      // 故意响应一个异常对象
      throw new Error('错误信息')
        
    }
  )


  console.log('执行代码1111')

  promise.then(
    function(resolveValue){console.log(`promise中执行了resolve:${resolveValue}`)}
    //function(rejectValue){console.log(`promise中执行了reject:${rejectValue}`)}
  ).catch(
    function(error){console.log(error)}
  )
  console.log('执行代码2222')
  
</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>
