<template>
<div>
  <div class="py-8 w-96 hidden xl:block md:block" style=" width: 65rem">
    <!-- <div>
    <img src="../img/微信图片_20220503103906.jpg" alt="">
</div> -->
    <div class="   flex border-b-2">
      <div class=" cursor-pointer   z-20  hover:border-b-orange-600  hover:text-orange-600 flex justify-center items-center  px-4 py-2">
        <span class=" text-lg  font-black border-r pr-3">所有订单</span>
      </div>
      <div class=" cursor-pointer  hover:border-b-orange-600  hover:text-orange-600 flex justify-center items-center  px-4 py-2">
        <span class=" text-lg  font-black border-r pr-3" >代付款</span>
      </div>
     <div class=" cursor-pointer  hover:border-b-orange-600  hover:text-orange-600 flex justify-center items-center  px-4 py-2">
        <span class=" text-lg  font-black border-r pr-3">代发货</span>
      </div>
      <div class=" cursor-pointer text-orange-600 hover:border-b-orange-600  hover:text-orange-600 flex justify-center items-center  px-4 py-2">
         <router-link to="/personalcenter/logistic/Finish" class=" text-lg font-black border-r pr-3" >代收货</router-link>
      </div>
      <div class=" cursor-pointer  hover:border-b-orange-600  hover:text-orange-600 flex justify-center items-center  px-4 py-2">
        <router-link to="/personalcenter/logistic/Comment" class=" text-lg  font-black border-r pr-3">待评论</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>

    <div class="py-3 w-96  xl:hidden md:hidden" >
    <!-- <div>
    <img src="../img/微信图片_20220503103906.jpg" alt="">
</div> -->
    <div class="flex justify-around ">
    <div class=" cursor-pointer  hover:text-orange-600 ">
         <router-link  to="/personalcenter/logistic/Finish" class="">全部</router-link>
      </div>
      <div class=" cursor-pointer  hover:text-orange-600 ">
         <router-link  to="/personalcenter/logistic/Finish" class="">待收货</router-link>
      </div>
      <div class=" cursor-pointer  hover:text-orange-600 ">
         <router-link to="/personalcenter/logistic/Finish"  class="">待发货</router-link>
      </div>
      <div class=" cursor-pointer  hover:text-orange-600 ">
         <router-link to="/personalcenter/logistic/Finish" class="">待收货</router-link>
      </div>
      <div class=" cursor-pointer  hover:text-orange-600 ">
         <router-link to="/personalcenter/logistic/Finish" class="">待评价</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {};
</script>
<style >
</style>
