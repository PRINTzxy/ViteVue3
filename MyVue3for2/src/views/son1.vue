<script setup>
    //import Son from './Son.vue'
    import {ref,defineEmits} from 'vue'
    //1.定义要发送给父组件的方法，可以1或者多个
    let emites = defineEmits(['add','sub']);
    let data = ref(1);
    function sendMsgToParent(){
        //2.出发父组件对应的方法，调用defineEmites对应的属性
        emites('add','add data!'+data.value)
        emites('sub','sub data!'+data.value)
        data.value ++;
    }
</script>
<template>
    <div>
      <button @click="sendMsgToParent">发送消息给父组件</button>
    </div>
</template>