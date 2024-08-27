<script setup>
    import { ref,reactive } from "vue";

    let user = reactive({
        username:"",
        password:"",
        hobbies:[],
        gender:'男',
        province:0
    })

let login=()=>{
   //异步提交userInfo
}

let clearx=()=>{
     user.username='';
     user.password='';
     user.hobbies=[];
     user.gender='';
     user.province=0;
}

</script>

<template>
    <div>
        {{ user }}
        <br>
        <form action="">
            <input type="text" name="username" placeholder="请输入账号！" v-model="user.username"><br>
            <input type="password" name="password" placeholder="请输入密码！" v-model="user.password"><br>
            爱好:
            <input type="checkbox" name="hobbies" value="吃" v-model="user.hobbies">吃
            <input type="checkbox" name="hobbies" value="喝" v-model="user.hobbies" >喝
            <input type="checkbox" name="hobbies" value="玩" v-model="user.hobbies">玩
            <br>
            <br>
            性别:
            <input type="radio" name="gender" value="男" v-model="user.gender" checked> 男
            <input type="radio" name="gender" value="女" v-model="user.gender"> 女
            <br>
            地址:
            <select name="province" v-model="user.province">
                <option value="1">上海</option>
                <option value="2">北京</option>
            </select>
            <br>
            <button @click="login()">登录</button>
            <button @click="clearx()">重置</button>
        </form>
    </div>
</template>

<style>

</style>