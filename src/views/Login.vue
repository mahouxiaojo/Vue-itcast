<template>
    <div class="login">
        <el-form ref="form" :model="formLabelAlign" class="container" :rules="rules">
                <!-- :rules="rules"使用了element中的表单验证 -->
            <el-form-item class="avatar">
                <div>
                    <img src="../assets/avatar.jpg" alt="">
                </div>
            </el-form-item>
            <el-form-item prop="username">
                <el-input v-model="formLabelAlign.username" placeholder="账号" prefix-icon="myicon myicon-user"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="formLabelAlign.password" placeholder="密码" prefix-icon="myicon myicon-key" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="login-btn" @click="loginSubmit('form')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {checkUser} from '@/api/index'
    // 在这里引入登录验证
    export default {
        data() {
            return {
                formLabelAlign: {
                    username:'',
                    password:''
                },
                rules:{
                    // 定义表单验证的规则
                    username:[ { required: true, message: '请输入用户名', trigger: 'blur' },],
                    password:[ { required: true, message: '请输入密码', trigger: 'blur' },]
                }
            }
        },
        methods: {
            loginSubmit(formName){
                // 这里的validate 使用的element-ui的方法
                this.$refs[formName].validate(valide =>{
                    // 判断是否满足校验条件 只有校验通过才执行函数
                    if(valide){
                        // console.log(this.formLabelAlign);
                        // 把data中 用户输入的数据 发送给后台
                        checkUser(this.formLabelAlign).then(res=>{
                            // console.log(res)
                            // 如果成功跳转到首页
                            if(res.meta.status == 200){
                                // 提示登录成功，这里引用的是element中的组件提示
                                this.$message({
                                    message: '登录成功',
                                    type: 'success'
                                })
                                // 然后跳转到首页
                                this.$router.push({name:'Home'})
                            }else{
                                this.$message.error('登录失败,用户名或密码错误');
                            }
                        })
                    }else{
                        console.log("校验不通过")
                    }
                })
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