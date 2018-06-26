<template>
  <div>
    <el-form ref="signupform" :model="signupform" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="signupform.userName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="signupform.passWord" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkpass">
        <el-input type="password" v-model="signupform.checkpass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="出生日期" prop="date">
				<el-date-picker v-model="signupform.date" type="date" placeholder="选择日期" style="width: 100%">
				</el-date-picker>
			</el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('signupform')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'signUp',
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
      } else {
        if (this.signupform.checkpass !== '') {
          this.$refs.signupform.validateField('checkpass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.signupform.pass) {
        callback(new Error('两次输入密码不一致！'));
      } else {
        callback();
      }
    };
    var Date = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请选择出生日期'));
      }
      callback();
    };
    return {
      signupform: {
          userName: '',
          passWord: '',
          checkpass: '',
          date: ''
      },
      rules: {
        username: [
          {validator: UserName,required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {validator: validatePass,required: true, message: '请输入密码', trigger: 'blur'}
        ],
        checkpass: [
          {validator: validatePass2,required: true, message: '请输入密码', trigger: 'blur'}
        ],
        date: [
          {validator: Date,required: true, message: '请选择出生年月', trigger: 'blur'}
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
