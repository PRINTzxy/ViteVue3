<script setup>
import { ref, reactive } from "vue";

// 响应式数据,保存用户输入的表单信息
let loginUser = reactive({
  username: '',
  userPwd: '',
});

//保存校验的提示信息
let usernameMsg = ref('');
let userPwdMsg = ref('');

//校验用户名
function checkUsername() {
  var usernameReg = /^[a-zA-Z0-9]{3,10}$/;
  if (!usernameReg.test(loginUser.username)) {
    usernameMsg.value = '用户名格式有误';
    return false;
  }
  usernameMsg.value = 'ok';
  return true;
}
//校验密码
function checkUserPwd() {
  var userPwdReg = /^[0-9]{6}$/;
  if (!userPwdReg.test(loginUser.userPwd)) {
    userPwdMsg.value = '密码格式有误';
    return false;
  }
  userPwdMsg.value = 'ok';
  return true;
}
//重置
function reset(){
  loginUser.username = ''
  loginUser.userPwd = ''
}
</script>

<template>
  <div>
    <h3 class="ht">请登录</h3>
    <table class="tab" cellspacing="0px">
      <tr class="ltr">
        <td>请输入账号</td>
        <td>
          <input type="text" class="ipt" v-model="loginUser.username" @blur="checkUsername">
          <span id="usernameMsg" v-text="usernameMsg"></span>
        </td>
      </tr>
      <tr class="ltr">
        <td>请输入密码</td>
        <td>
          <input type="password" class="ipt" v-model="loginUser.userPwd" @blur="checkUserPwd">
          <span id="userPwdMsg" v-text="userPwdMsg"></span>
        </td>
      </tr>
      <tr class="ltr">
        <td colspan="2" class="buttonContainer">
          <input type="button" class="btn1" value="登录">
          <input type="button" class="btn1" value="重置" @click="reset()">
          <router-link to="/regist">
            <button class="btn1">去注册</button>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.ht {
  text-align: center;
  color: cadetblue;
  font-family: 幼圆;
}
.tab {
  width: 500px;
  border: 5px solid cadetblue;
  margin: 0px auto;
  border-radius: 5px;
  font-family: 幼圆;
}
.ltr td {
  border: 1px solid powderblue;
}
.ipt {
  border: 0px;
  width: 50%;
}
.btn1 {
  border: 2px solid powderblue;
  border-radius: 4px;
  width: 60px;
  background-color: antiquewhite;
}
#usernameMsg,
#userPwdMsg {
  color: gold;
}
.buttonContainer {
  text-align: center;
}
</style>
