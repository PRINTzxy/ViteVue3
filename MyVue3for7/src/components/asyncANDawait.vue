<script setup>
  /* console.log("----async----")
  
  async function fun1() {
    //return 10
    //throw new Error("错误")
    let promise = Promise.reject("某些错误")
    return promise
  }

  let promise = fun1()

  promise.then(
    function(value){console.log("success:"+value)}
  ).catch(
    function(value){console.log("fail:"+value)}
  ) */


  console.log("----await----")

  async function fun1() {
    return 10
  }
  async function fun2() {
    try{
      //let res = await fun1() //没有错误，控制台无打印
      let res = await Promise.reject("错误") //有错误，控制台有打印
    }catch(e){
      console.log('catch got:' + e)      
    }
  }
  fun2()
</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>
