<template>
<div>
    <!-- 订单信息 -->
    <header class="shadow-sm" style="margin-left: 235px;">
  <div style=" border-radius: 20px" class="max-w-screen-xl p-4 bg-blue-200 ">
  
    

      <nav   class=" flex  text-center  items-center justify-center">
        <el-checkbox v-model="checked" style=" flex-grow:4" >宝贝</el-checkbox>
        <a style='' class="text-gray-500 flex-grow" href="">单价</a>
        <a   class="text-gray-500  ml-8 flex-grow" href="">数量</a>
        <a  class="text-gray-500 ml-8 flex-grow " >售后</a>
        <a class="text-gray-500  ml-8 flex-grow" href="">实收款</a>
        <a class="text-gray-500  ml-8 flex-grow" href="">交易状态</a>
        <a class="text-gray-500  ml-8 flex-grow" href="">评价</a>
      </nav>

    
  
  </div>
</header>
<!-- 多选框 -->
<div>
     

</div>
<div class=" w-3/4  " style="  margin-left: 235px;"  v-if="orderdetails[0] && order[0] && Details[0]">
  <div class='flex boder-b py-8  border-b' v-for="items,i in order" :key="items.order_id">
      <div class=' flex items-center' style=" flex-grow:1">
        <!-- <img src="" alt=""> -->
        <div class=" h-28 w-36 bg-black mr-4">
           <img v-if="Details[0]" :src="Details[i].goods_img" alt="" class=" w-full h-full">
        </div>
        <span class=" w-32 text-sm">{{Details[i].goods_name}}</span>
      </div>
      <div class=' flex-grow'>
        <span>￥{{Details[i].goods_discount}}</span>
      </div>
      <div class=' flex-grow'>
        {{orderdetails[i].detail_count}}
      </div>
      <div class=' flex-grow'>
        無
      </div>
      <div class=' flex-grow'>
        {{order[i].order_sum}}
      </div>
      <div class=' flex-grow'>
        無
      </div>
      <div class=' flex-grow'>
        無
      </div>
  </div>
</div>
</div>
</template>
<script> 
import axios from "axios";
      export default {
    data() {
      return {
        checked: false,
        order:[],
        orderdetails:[],
        Details:[]
      };
    },
  mounted() {
    axios({
      method: "get",
      url: "http://localhost:8080/api/sel_idGetTab_order",
      params: {
        sel_id: localStorage.getItem("sel_id"),
      },
    }).then((res) => {
      this.order = res.data
      for(let i=0;i<res.data.length; i++){
      axios({
              method: "get",
              url: "http://localhost:8080/api/getTab_orderdetails",
              params: {
                order_id: res.data[i].order_id,
              },
            }).then((res1) => {
              this.orderdetails.push(res1.data[0])
              for(let i=0;i<res1.data.length;i++){
                axios({
                method: "get",
                url: "http://localhost:8080/api/Details",
                params:{
                  id:res1.data[i].goods_id
                  }
                
              }).then((res2) => {
                this.Details.push(res2.data[0])
                console.log(this.order,1,this.orderdetails,2,this.Details,3);
              })
              }
             
              
            });
      }
   
     
    });
  }

  };
</script>
<style scoped>

</style>
