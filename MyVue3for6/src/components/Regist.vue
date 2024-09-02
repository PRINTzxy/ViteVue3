<script setup>
  import{ ref,reactive} from 'vue'

  import request from '../utils/request.js'
  import {useRouter} from 'vue-router'

  const router = useRouter()


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
  async function checkUsername(){
    let usernameReg=/^[a-zA-Z0-9]{5,10}$/
    if(!usernameReg.test(registUser.username)){
      usernameMsg.value = '不合法'
      return false
    }
    //异步发送请求，判断用户名是否被占用
    let {data} = await request.post(`user/checkUsernameUsed?username=${registUser.username}`)
    if(data.code != 200){
      usernameMsg.value = '用户名被占用'
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

  //注册所有输入框的判断
  async function regist() {
    //校验所有输入框是否合法
    let flag1 = await checkUsername()
    let flag2 = await checkUserPwd()
    let flag3 = await checkRegistUserPwd()
    if (flag1 && flag2 && flag3){
      let {data} = await request.post('user/regist',registUser)
      if (data.code == 200){
        alert('注册成功，快去登录')
        router.push('/login')
      }else{
        alert("抱歉,用户名被抢注了")
      }
    }else{
      alert("校验不通过,请再次检查数据")
    }
    
  }

  //重置
  function reset(){
    registUser.username = ''
    registUser.userPwd = ''
    registUserPwd.value = ''
    usernameMsg.value = ''
    userPwdMsg.value = ''
    registUserPwdMsg.value = ''
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
          <input type="button" class="btn1" value="注册" @click="regist()">
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
