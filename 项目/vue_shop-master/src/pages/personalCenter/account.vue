<template>
<div style="width:78rem;" class=" flex justify-end" >
<div class="w-full pt-10">
    <div class=" flex" v-if="!ok">   
         <svg t="1652259858571" class="icon  mx-4" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1928" width="20" height="20"><path d="M547.2 512l416-416c9.6-9.6 9.6-25.6 0-35.2s-25.6-9.6-35.2 0l-416 416-416-416c-9.6-9.6-25.6-9.6-35.2 0s-9.6 25.6 0 35.2l416 416-416 416c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l416-416 416 416c9.6 9.6 25.6 9.6 35.2 0s9.6-25.6 0-35.2L547.2 512z" p-id="1929" fill="#F27362"></path></svg>

        <span  class="  text-xl" style=" color:#F27362">修改失败,请认真填写信息</span>
    </div>
    
     
    <div class=" pt-6">
        <span class="text-sm">用户账户 *</span>
      <el-input  v-model="name" placeholder="请输入内容" style=" border:none"  class=" mt-2"></el-input>
    </div>
     <div class=" pt-6">
        <span class="text-sm" >手机号码 *</span>
      <el-input  v-model="phone" placeholder="请输入内容" style=" border:none" :maxlength=11 :minlength=11  class=" mt-2"></el-input>
    </div>
<div class=" pt-6">
        <span class="text-sm" >当前密码 *</span>
      <el-input  v-model="cust_pwd" show-password placeholder="请输入内容" style=" border:none"  class=" mt-2"></el-input>
    </div>
    <div class=" pt-6">
        <span class="text-sm" >新密码 *</span>
      <el-input  v-model="pwd" show-password placeholder="请输入内容" style=" border:none"  class=" mt-2"></el-input>
    </div>
    <div class=" pt-6">
        <span class="text-sm" >确认新密码 *</span>
      <el-input  v-model="newpwd" show-password placeholder="请输入内容" style=" border:none"  class=" mt-2"></el-input>
    </div>
    <button @click='Revise' class=' py-3 px-6 text-white mt-5' style=" background: rgb(40,40,40)">
        保存更改
    </button>
</div>

</div>
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            data:'',
            name:'',
            phone:'',
            cust_pwd:'',
            pwd:'',
            newpwd:'',
            ok:true
        }
    },
    methods: {
        Revise(){
            if(this.name!=''&&this.phone!=''&&this.cust_pwd==this.data.cust_pwd&&this.pwd!=''&&this.newpwd!=''&&this.pwd==this.newpwd){
                axios({
                    method: "get",
                    url: "http://localhost:8080/api/ReviseCust",
                    params: {
                        cust_account:this.name,
                        cust_pwd:this.newpwd,
                        cust_phone:this.phone,
                        cust_id:this.data.cust_id
                    }
                }).then((res)=>{
                 localStorage.removeItem('id')
                     this.$router.push({
                        name: "login",
                    });
                    
                })
                    this.ok=true;
            }  else{this.ok=false} 
        }
    },
     mounted() {
    axios({
      method: "get",
      url: "http://localhost:8080/api/iDgetUser",
      params: {
        id: localStorage.getItem("id"),
      },
    }).then((res) => {
        this.data=res.data[0]
        this.phone=res.data[0].cust_phone
        this.name=res.data[0].cust_account
      this.cust_pwd = res.data[0].cust_pwd;
      console.log(res.data);
    });
  },
  destroyed(){
    console.log('addr销毁');
  }
}
</script>
<style>
.el-input__inner, .el-checkbox__inner, .el-textarea__inner, .el-button {
    border-radius: 0;
}
</style>