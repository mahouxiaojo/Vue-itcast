<template>
    <div class="login">
        <el-form :model="formLabelAlign" class="container" :rules="rules">
                <!-- :rules="rules"使用了element中的表单验证 -->
            <el-form-item class="avatar">
                <div>
                    <img src="../assets/avatar.jpg" alt="">
                </div>
            </el-form-item>
            <el-form-item prop="name">
                <el-input v-model="formLabelAlign.name" placeholder="账号" prefix-icon="myicon myicon-user"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="formLabelAlign.region" placeholder="密码" prefix-icon="myicon myicon-key"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="login-btn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: '',
                    password:''
                },
                rules:{
                    // 定义表单验证的规则
                    name:[ { required: true, message: '请输入用户名', trigger: 'blur' },],
                    password:[ { required: true, message: '请输入用户名', trigger: 'blur' },]
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
    }
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    }
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
</style>