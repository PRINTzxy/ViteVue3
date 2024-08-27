<script setup>
    import Header  from './views/Header.vue'
    import Navigator  from './views/Navigator.vue'
    import Content  from './views/Content.vue'
    import {ref} from "vue"
    //import Parent  from './views/parent.vue'

    //import Parent1  from './views/parent1.vue'

    //定义接受navigator传递参数
    var navigator_menu = ref('ceshi');
    const receiver = (data) =>{
      navigator_menu.value = data;
    }
</script>

<template>
  <div>
      <hr>
      {{ navigator_menu }}
      <hr>

    <Header class="header"></Header>
    <Navigator @sendMenu="receiver" class="navigator"></Navigator>
    <Content class="content" :message="navigator_menu"></Content> <!-- 向子组件传递数据-->
    
    <!-- <Parent></Parent> -->

    <!-- <Parent1></Parent1> -->
  </div>

</template>

<style scoped>
    .header{
       height: 80px;
       width: 1000;
       border: 2px solid red;
    }
    .navigator{
      width: 15%;
      height: 800px;
      display: inline-block;
      border: 1px blue solid;
      float: left;
    }
    .content{
      width: 83%;
      height: 800px;
      display: inline-block;
      border: 1px goldenrod solid;
      float: right;
    } 
</style>
