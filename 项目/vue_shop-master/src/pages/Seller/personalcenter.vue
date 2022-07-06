<template>
<div>
 <!-- 页头 --> 

    <div >
    <header  class="border-b border-gray-100">
  <div
    class="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
  >
    <div class="flex items-center">
      <button type="button" class="p-2 sm:mr-4 lg:hidden">
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <a href="" class="flex">

        <span >卖家中心</span>
      </a>
    </div>

    <div class="flex items-center justify-end flex-1">
      <nav
        class="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex"
      >
        <a
          href="/about"
          class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
        >
         淘宝呗首页
        </a>

        <a
          href="/news"
          class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
        >
          卖家服务
        </a>

        <a
          href="/products"
          class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
        >
          联系客服
        </a>

        <a
          href="/contact"
          class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
        >
          我的淘宝呗
        </a>
      </nav>

      <div class="flex items-center ml-8">
        <div
          class="flex items-center border-gray-100 divide-x divide-gray-100 border-x"
        >
         

        <div>
      <el-avatar v-if="seller[0]" :src="seller[0].sel_img"></el-avatar>
    </div>       
        </div>
      </div>
    </div>
  </div>
</header>
</div> 

<div style='width:100%'>
  <!-- logo -->
  <img style="width:250px;height:220px;margin-top:-50px" src='../img/xmmj.png'>
<!-- 菜单栏 -->
<div style='margin-left:220px;margin-top:-74px'>
<header class="shadow-sm"  style="position: relative">
 
  
  <div class="border-t border-gray-100 lg:hidden">
      
    <nav
      class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium"
    >
      <a class="flex-shrink-0 pl-4 text-gray-900" href="">学习</a>
      <a class="flex-shrink-0 pl-4 text-gray-900" href="">消息</a>
      <a class="flex-shrink-0 pl-4 text-gray-900" href="">帮助</a>
      <a class="flex-shrink-0 pl-4 text-gray-900" href="">反馈</a>
 
    </nav>

  </div>

</header>
</div>
<!-- 侧栏 -->
<el-row  class="tac" style="margin-top:50px">
  <el-col :span="3" style="text-align: center">
    
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
       
      >
     <!-- @open="handleOpen"
      @close="handleClose" -->
       <router-link to="/personal/homepage">    
          <el-menu-item index="1" >        
         <i class="el-icon-s-home">     首页</i>   
          </el-menu-item>     
      </router-link>
     <router-link to="/personal/commodity">
           <el-menu-item index="2" >        
         <i class="el-icon-s-goods">     商品</i>   
          </el-menu-item>   
      </router-link>
       <router-link to="/personal/deal">
            <el-menu-item index="3" >        
         <i class="el-icon-user-solid">     交易</i>   
          </el-menu-item>   
      <router-link to='/personal/leaveword'>
             <el-menu-item index="4" >        
         <i class="el-icon-s-comment">     评论</i>   
          </el-menu-item>   
      </router-link>
     </router-link>
      <router-link to='/personal/leaveword'>
             <el-menu-item index="5" >        
         <i class="el-icon-s-shop">     店铺</i>   
          </el-menu-item>   
      </router-link>     
     <router-link to='/personal/leaveword'>
             <el-menu-item index="6" >        
         <i class="el-icon-s-promotion">     推广</i>   
          </el-menu-item>   
      </router-link>
         <router-link to='/personal/leaveword'>
             <el-menu-item index="7" >        
         <i class="el-icon-s-order">     内容</i>   
          </el-menu-item>   
      </router-link>
     <router-link to='/personal/leaveword'>
             <el-menu-item index="8" >        
         <i class="el-icon-s-custom">     用户</i>   
          </el-menu-item>   
      </router-link>
         <router-link to='/personal/leaveword'>
             <el-menu-item index="9" >        
         <i class="el-icon-phone">     客服</i>   
          </el-menu-item>   
      </router-link>    
     <router-link to='/personal/leaveword'>
             <el-menu-item index="10" >        
         <i class="el-icon-s-finance">     财务</i>   
          </el-menu-item>   
      </router-link>
    </el-menu>
  </el-col>
    <router-view></router-view>
</el-row>
<!--  -->
</div>

  

</div>


</template>
<script>
import axios from 'axios'
export default{
  data() {
    return{
      seller:[]
    }
  },
mounted() {
  console.log(localStorage.getItem("sel_id"));
  axios({
     method: "get",
     url: "http://localhost:8080/api/sel_idgetSeller",
     params: {
        id:localStorage.getItem("sel_id"),
     }
    
  }).then(res=>{

    this.seller=res.data
    console.log(this.seller);
  })
}
       
    
}


</script>

<style>
    .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
    
  }
  
</style>
