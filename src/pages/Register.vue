<template>
  <div>
    <mu-content-block>
      <mu-sub-header>请填写注册信息</mu-sub-header><br/>
      <mu-text-field
        v-model="username"
        label="用户名" hintText="请输入用户名" labelFloat/><br/>
      <mu-text-field
        v-model="password"
        label="密码" hintText="请输入密码" type="password" labelFloat/><br/>
      <mu-raised-button label="注册" @click="register" primary/>
    </mu-content-block>
  </div>
</template>

<script>
  import api from '../api'

  export default {
    name: 'register',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      register () {
        api.user.register(this.username, this.password).then(data => {
          console.info(data)
        })
      }
    }
  }
</script>
