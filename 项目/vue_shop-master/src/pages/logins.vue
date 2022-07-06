<template>
<div>
    <Navigation/>
<div class="w-full" style="height:80vh;background:rgb(245,245,245)">
    <div class="container mx-auto px-56 flex justify-center items-center">
		<div class=" w-5/12 mt-28">
			<el-form
      	v-if="ok"
       
        status-icon
    
      onsubmit="return false;"
        class="demo-ruleForm"
	
      >
		<h1 class='text-center  text-2xl'>登入</h1>
	  <el-form-item    label=""  show-password   >
		  <span>账号*</span>
	 	 <el-input   v-model="ruleForm.user" placeholder=""></el-input>
		</el-form-item>
        <el-form-item label=""   >
			<span>密码*</span>
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
		
        <!-- <el-form-item label=""  show-password >
			<span>确认密码*</span>
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item> -->
		<div class=" flex  justify-between my-2.5">
			 <el-checkbox v-model="checked" fill='#D7D7D7' >记住密码</el-checkbox>
			 <span class=" text-sm">忘记密码</span>
		</div>
		 <button @click="Dologin" class=' py-4 text-center w-full text-white'  style=" background:rgb(40,40,40)">登入</button>
		  <el-divider ><span >或者</span></el-divider>
		  <button class=' py-3 text-center w-full border-2'  style="" @click="ok=!ok">创建一个账号</button>

	  </el-form>
	  <el-form
      
        status-icon
 

        class="demo-ruleForm"
		v-if="!ok"
      >
		<h1 class='text-center  text-2xl'>注册</h1>
	  <el-form-item    label="" show-password   >
		  <span>账号*</span>
	 	 <el-input   v-model="ruleForm2.user" placeholder=""></el-input>
		</el-form-item>
        <el-form-item label=""  >
			<span>密码*</span>
          <el-input
            type="password"
            v-model="ruleForm2.pass"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
	 <el-form-item    label=""   show-password >
		  <span>手机号*</span>
	 	 <el-input   v-model.number="ruleForm2.phone" placeholder=""></el-input>
		</el-form-item>
 
		 <button @click="register" class=' py-3 text-center w-full text-white'  style=" background:rgb(40,40,40)" >注册</button>
		  <el-divider ><span >或者</span></el-divider>
		  <button class=' py-3 text-center w-full border-2 '  style="" @click="ok=!ok" >登入</button>

	  </el-form>
		</div>
      
      <!-- <el-input placeholder="请输入密码" v-model="input" show-password></el-input> -->
    </div>
  </div>
     <Tail/>
</div>
  
</template>

<script> 
import axios from 'axios'
import {mapMutations} from 'vuex'
export default {
    components: {
     Tail:()=>import('./Universal/tail.vue'),
     Navigation:()=>import('./Universal/navigation.vue'),
    },
  data() {

  //   var validatePass = (rule, value, callback) => {
  //     if (value === "") {
  //       callback(new Error("请输入密码"));
  //     } else {
  //       if (this.ruleForm.checkPass !== "") {
  //         this.$refs.ruleForm.validateField("checkPass");
  //       }
  //       callback();
  //     }
  //   };
	//  var validatePass1 = (rule, value, callback) => {
  //     if (value === "") {
  //       callback(new Error("请输入密码"));
  //     } 
  //   };
  //   var validatePass2 = (rule, value, callback) => {
  //     if (value === "") {
  //       callback(new Error("请再次输入密码"));
  //     } else if (value !== this.ruleForm.pass) {
  //       callback(new Error("两次输入密码不一致!"));
  //     } else {
  //       callback();
  //     }
  //   };
	//  var validateuser = (rule, value, callback) => {
  //     if (value === "") {
  //       callback(new Error("请输入账号"));
  //     } else {
  //       if (this.ruleForm.user !== "") {
  //         this.$refs.ruleForm.validateField("user");
  //       }
  //       callback();
  //     }
  //   };
	// var validateuser1 = (rule, value, callback) => {
  //     if (value === "") {
  //       callback(new Error("请输入账号"));
  //     } else {
  //       if (this.ruleForm2.user !== "") {
  //         this.$refs.ruleForm2.validateField("user");
  //       }
  //       callback();
  //     }
  //   };
	// var validatePhone = (rule, value, callback) => {
  //     if (value === "") {
  //       callback(new Error("请输入手机号"));
  //     } else {
  //       if (this.ruleForm2.phone !== "") {
  //         this.$refs.ruleForm2.validateField("phone");
  //       }
  //       callback();
  //     }
  //   };
	
    return {
		ok:true,
		 checked: true,
      ruleForm: {
        pass: "",
        checkPass: "",
		    user:""
      },
	  ruleForm2: {
        pass: "",
		user:"",
		phone:""
      },
    //   rules: {
    //     pass: [{ validator: validatePass, trigger: "blur" }],
    //     checkPass: [{ validator: validatePass2, trigger: "blur" }],
		//  user: [{ validator: validateuser, trigger: "blur" }],
    //   },
	  // rules2: {
    //     pass: [{ validator: validatePass1, trigger: "blur" }],
		//  user: [{ validator: validateuser1, trigger: "blur" }],
		//  phone: [
    //         { required: true, type: "number",message: '请输入活动名称', trigger: 'blur' },
    //         { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    //       ],
    //   },
    };
  },
  methods: {
        ...mapMutations('User',{getUser:'getUser'}),
    Dologin() {
      if(this.ruleForm.pass!=''&&this.ruleForm.user!=''){
        axios({
            method: "get",
            url: "http://localhost:8080/api/dologin",
            params: {
              cust_account:this.ruleForm.user,
              cust_pwd:this.ruleForm.pass
           
            },
      }).then((res)=>{
        console.log(res);
        if(res.data.length>0){
          this.$router.replace({
            path:'/'
          })
          localStorage.setItem("id",res.data[0].cust_id)
          this.getUser(res.data[0])
          
        }else{
          this.$message.error('账号或密码错误');
        
        }
        
       
      })
      }else{this.$message.error('账号或密码不能为空')}
       
    
    },
	   register(){
       console.log(this.ruleForm2.pass);
      if(this.ruleForm2.pass!=''&&this.ruleForm2.user!=''&&this.ruleForm2.phone!=''){
         axios({
            method: "get",
            url: "http://localhost:8080/api/register",
            params: {
              newAccount:this.ruleForm2.user,
              newPwd:this.ruleForm2.pass,
              newphone:this.ruleForm2.phone
           
            },
      }).then((res) => {
       if(res.data){
          this.$message({
          showClose: true,
          message: '注册成功',
          type: 'success'
        });
       }else{
         this.$message.error('用户名也存在')
       } 
      })
      }else{
        this.$message.error('请完整填写信息')
      }
        
    },
  }
};
</script>

<style>
.el-input__inner, .el-checkbox__inner, .el-textarea__inner, .el-button {
    border-radius: 0;
}
</style>