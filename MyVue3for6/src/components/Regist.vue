<script setup>
  import{ ref,reactive} from 'vue'
  // 响应式数据,保存用户输入的表单信息
  let registUser =reactive({
    username:'',
    userPwd:''
    })
  // 响应式数据,保存校验的提示信息
  let usernameMsg =ref('')
  let userPwdMsg = ref('')

  let registUserPwd =ref('') //注册密码
  let registUserPwdMsg =ref('') //注册密码的响应信息

  //校验用户名
  function checkUsername(){
    let usernameReg=/^[a-zA-Z0-9]{5,10}$/
    if(!usernameReg.test(registUser.username)){
      usernameMsg.value = '不合法'
      return false
    }
    usernameMsg.value = 'ok'
    return true
  }
  //校验密码
  function checkUserPwd(){
    let userPwdReg=/^[0-9]{6}$/
    if(!userPwdReg.test(registUser.userPwd)){
      userPwdMsg.value='不合法'
      return false
    }
    userPwdMsg.value='合法'
    return true
  }
  //校验确认密码
  function checkRegistUserPwd(){
    let userPwdReg=/^[0-9]{6}$/
    if(!userPwdReg.test(registUserPwd.value)){
      registUserPwdMsg.value = '不合法'
      return false
    }
    console.log(registUser.userPwd,registUserPwd.value)
    //比对第一次输入的密码和确认密码
    if(!(registUser.userPwd == registUserPwd.value)){
      registUserPwdMsg.value = '两次输入的密码不一致'
      return false
    }
    registUserPwdMsg.value = '一致'
    return true
  }
  //重置
  function reset(){
    registUser.username = ''
    registUser.userPwd = ''
    registUserPwd.value = ''
  }
</script>

<template>
  <div>
    <h3 class="ht">请输入注册信息</h3>
    <table class="tab" cellspacing="0px">
      <tr class="ltr">
        <td>请输入账号</td>
        <td>
          <input type="text" class="ipt" id="usernameInput" name="username" v-model="registUser.username" @blur="checkUsername()">
          <span id="usernameMsg" class="msg" v-text="usernameMsg"></span>
        </td>
      </tr>
      <tr class="ltr">
        <td>请输入密码</td>
        <td>
          <input type="password" class="ipt" id="userPwdInput" name="userPwd" v-model="registUser.userPwd" @blur="checkUserPwd()">
          <span id="userPwdMsg" class="msg" v-text="userPwdMsg"></span>
        </td>
      </tr>
      <tr class="ltr">
        <td>请输入确认密码</td>
        <td>
          <input type="password" class="ipt" id="registUserPwdInput" v-model="registUserPwd" @blur="checkRegistUserPwd">
          <span id="registUserPwdMsg" class="msg" v-text="registUserPwdMsg"></span>
        </td>
      </tr>
      <tr class="ltr">
        <td colspan="2" class="buttonContainer">
          <input type="button" class="btn1" value="注册">
          <input type="button" class="btn1" value="重置" @click="reset()">
          <router-link to="/login">
            <button class="btn1">去登录</button>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
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
.msg {
  color: gold;
}
.buttonContainer {
  text-align: center;
}
</style>
