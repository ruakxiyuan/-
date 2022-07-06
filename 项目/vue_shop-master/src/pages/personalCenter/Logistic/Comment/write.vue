<template>
  <div>
    <Navigation />
    <div class="container mx-auto px-80 pt-8" style="height: 664px">
      <div class="border h-4/5">
        <div class="border-b">
          <div class="flex justify-between py-3 px-6 bg-gray-100">
            <div  class=" font-extrabold  text-lg" style=" color: #101010">评价宝贝</div>
            <span>卖家:<svg t="1651662869339" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2243" width="24" height="24" class="icon inline-block"><path d="M245.333333 533.333333v288h512V533.333333h64v352h-640V533.333333h64zM834.624 139.050667l45.077333 150.869333a149.333333 149.333333 0 0 1-255.722666 139.52l-3.669334-4.330667L618.666667 423.04l-1.642667 2.090667a149.248 149.248 0 0 1-104.533333 54.485333l-6.016 0.32-5.141334 0.085333a149.12 149.12 0 0 1-112.021333-50.56l-3.669333-4.330666L384 423.04l-1.642667 2.090667a149.248 149.248 0 0 1-104.533333 54.485333l-6.016 0.32-5.141333 0.085333a149.333333 149.333333 0 0 1-145.301334-183.808l1.792-6.890666 45.909334-150.250667h665.557333z m-47.68 63.978666H216.426667L184.533333 307.370667a84.693333 84.693333 0 0 0-2.389333 11.456l-0.597333 5.888-0.213334 5.952a85.333333 85.333333 0 0 0 169.813334 12.16l0.512-4.352 2.624-29.12h59.434666l2.624 29.12a85.333333 85.333333 0 0 0 169.472 4.330666l0.512-4.330666 2.624-29.12h59.434667l2.624 29.12a85.333333 85.333333 0 1 0 168.32-26.346667l-1.066667-4.330667-31.317333-104.768z" fill="#1677FF" p-id="2244"></path></svg>{{seller.sel_store}}</span>
          </div>
          <div class="flex justify-between px-32 pb-7 pt-6">
            <div class="flex flex-col w-56">
              <div class=" h-40 w-48">
                <img :src="goods.goods_img" alt="" class="  w-full h-full">
              </div>
              <span class=" text-sm">{{goods.goods_name}}</span>
            </div>
            <div class="flex flex-col w-96">
              <div>
                <el-radio v-model="radio" label="好评">好评</el-radio>
                <el-radio v-model="radio" label="中评">中评</el-radio>
                <el-radio v-model="radio" label="差评">差评</el-radio>
              </div>

              <div class="pt-7">
                <el-input
                  type="textarea"
                  :rows="6"
                  placeholder="亲，写点评价吧，你的评价对其他买家有很大帮助的。"
                  v-model="textarea"
                >
                </el-input>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-12 px-32">
          <div class="flex items-center">
            <div class="bg-gray-100 py-6  px-8 mr-24">店铺动态评分</div>
            <div class="flex flex-col">
              <div class="flex mb-5">
                <span>宝贝与描述相符</span>
                <el-rate v-model="value1" show-text> </el-rate>
              </div>
              <div class="flex mb-5">
                <span>卖家的服务态度</span>
                <el-rate v-model="value2" show-text> </el-rate>
              </div>
              <div class="flex mb-5">
                <span>物流服务的质量</span>
                <el-rate v-model="value3" show-text> </el-rate>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" flex justify-center items-center pt-10">
      <button class=" px-6 py-4 text-white   rounded-lg" style=" background:rgb(51,51,51)" @click="submit">发表评论</button>
      </div>
     
    </div>
    <Tail />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      textarea: "",
      radio: "好评",
      value1: null,
      value2: null,
      value3: null,
      goods:[],
      seller:[]
    };
  },
  components: {
    Navigation: () => import("@/pages/Universal/navigation.vue"),
    Tail: () => import("@/pages/Universal/tail.vue"),
  },
   methods: {
     submit(){
       axios({
         method: "get",
          url: "http://localhost:8080/api/addComment",
          params: {
            cust_id:localStorage.getItem("id"),
            goods_id:this.goods.goods_id,
            score:this.radio,
            Comment:this.textarea,
            order_id:localStorage.getItem("order_id"),
            StoreReviews:this.value1+','+this.value2+','+this.value3
          }
       }).then(
          this.$router.push({
            name: "Details",
            query: {
              id:this.goods.goods_id
            }
          })
       )
       console.log(localStorage.getItem("order_id"),localStorage.getItem("id"),this.goods.goods_id,this.radio,this.textarea,this.value1,this.value2,this.value3);
     }
   },
  mounted() {
    axios({
       method: "get",
       url: "http://localhost:8080/api/getTab_orderdetails",
       params: {
         order_id:localStorage.getItem("order_id")
       }
    }).then(res=>{
      axios({
        method: "get",
        url: "http://localhost:8080/api/Details",
        params: { 
          
          id:res.data[0].goods_id
        }
      }).then(res1=>{
        this.goods=res1.data[0]
        console.log(res1.data[0].sel_id);
        axios({
           method: "get",
           url: "http://localhost:8080/api/iDgetTab_seller",
           params: {
             sel_id:res1.data[0].sel_id
           }
        }).then(res2=>{
          this.seller=res2.data[0]

        })
      })
    
    })

  }
};
</script>

<style></style>
