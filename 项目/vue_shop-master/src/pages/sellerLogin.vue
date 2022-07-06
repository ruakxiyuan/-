<template>
<div>
  <Navigation/>
  <section class="user " style=" height:668px">
    <div class="user_options-container">
      <div class="user_options-text">
        <div class="user_options-unregistered">
          <h2 class="user_unregistered-title">没有帐户？</h2>
          <p class="user_unregistered-text">
            Banjo tote bag bicycle rights, High Life sartorial cray craft beer
            whatever street art fap.
          </p>
          <button class="user_unregistered-signup" id="signup-button">
            注册
          </button>
        </div>

        <div class="user_options-registered">
          <h2 class="user_registered-title">Have an account?</h2>
          <p class="user_registered-text">
            Banjo tote bag bicycle rights, High Life sartorial cray craft beer
            whatever street art fap.
          </p>
          <button class="user_registered-login" id="login-button">登录</button>
        </div>
      </div>

      <div class="user_options-forms" id="user_options-forms">
        <div class="user_forms-login">
          <h2 class="forms_title  ">登录</h2>
          <form class="forms_form" onsubmit="return false;">
            <fieldset class="forms_fieldset">
              <div class="forms_field">
                <input
                  type="text"
                  placeholder="user"
                  class="forms_field-input"
                  required
                  autofocus
                  v-model="cust_account"
                />
              </div>
              <div class="forms_field">
                <input
                  type="password"
                  placeholder="Password"
                  class="forms_field-input"
                  required
                  v-model="cust_pwd"
                />
              </div>
            </fieldset>
            <div class="forms_buttons">
              <button type="button" class="forms_buttons-forgot">
                Forgot password?
              </button>
              <input
               style=""
                type="submit"
                value="登录"
                class="forms_buttons-action bg-slate-400"
                @click="Dologin"
              />
            </div>
          </form>
        </div>
        <div class="user_forms-signup">
          <h2 class="forms_title">注册</h2>
          <form class="forms_form">
            <fieldset class="forms_fieldset">
              <div class="forms_field">
                <input
                  type="text"
                  placeholder="账号"
                  class="forms_field-input"
                  required
                  v-model="newAccount"
                />
              </div>
              <div class="forms_field">
                 <input
                  type="password"
                  placeholder="密码"
                  class="forms_field-input"
                  required
                  v-model="newPwd"
                />
              </div>
              <div class="forms_field">
               <input
                  type="text"
                  placeholder="手机号"
                  class="forms_field-input"
                  required
                  minlength="11"
                  maxlength="11"
                  v-model="newphone"
                />
              </div>
            </fieldset>
            <div class="forms_buttons">
              <input
                type="submit"
                value="注册"
                class="forms_buttons-action"
                @click='register'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Tail/>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
components: {
     Tail:()=>import('./Universal/tail.vue'),
     Navigation:()=>import('./Universal/navigation.vue'),
    },
  data(){
    return{
      cust_account:'',
      cust_pwd:'',
      newAccount:'',
      newPwd:'',
      newphone:'',
     
    }
  },
  methods: {
    Dologin() {
      if(this.cust_account!=''&&this.cust_pwd!=''){
        axios({
            method: "get",
            url: "http://localhost:8080/api/sellerDologin",
            params: {
              sel_account:this.cust_account,
              sel_pwd:this.cust_pwd
           
            },
      }).then((res)=>{

        if(res.data.length>0){
     
              localStorage.setItem("sel_id",res.data[0].sel_id)
          const { href } = this.$router.resolve({
        name: 'homepage',
        // query: {
        //    sel_id:res.data[0].sel_id
        // }
       
      });
      window.open(href, "_blank");
       
          
        }else{
          this.$message.error('账号或密码错误');
        
        }
        
       
      })
      }else{this.$message.error('账号或密码不能为空')}
       
    
    },
    register(){
    console.log('注册');
        
    },
  },
  mounted() {
    
    const signupButton = document.getElementById("signup-button");
    const loginButton = document.getElementById("login-button");
    const userForms = document.getElementById("user_options-forms");

    signupButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceRight");
        userForms.classList.add("bounceLeft");
      },
      false
    );

    loginButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceLeft");
        userForms.classList.add("bounceRight");
      },
      false
    );

  },

};
</script>

<style scoped>
@import "../assets/css/login.css";
</style>
