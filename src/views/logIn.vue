<template>
  <div>
    <el-form ref="loginform" :model="loginform" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginform.userName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginform.passWord" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginform')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'logIn',
  data () {
    var UserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      };
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
      callback();

    };
    return {
     loginform: {
        userName: '',
        passWord: ''
     },
     rules: {
      username: [
        {validator: UserName, required: true, message: '请输入账号', trigger: 'blur'},
      ],
      password: [
        {validator: validatePass, required: true, message: '请输入密码', trigger: 'blur'},
      ]
    },
    checked: true
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
