<template>
<div >
  <Navigation/>
  <div class="bg-white xl:pb-28 sm:py-8 lg:py-12 md:flex   md:justify-between  xl:px-32">
      <div class=" xl:px-8  w-full md:w-2/3   " >
      <div class="mb-6 sm:mb-10 lg:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-2xl font-bold  mb-4 md:mb-6  px-6 xl:px-0">购物车</h2>
      </div>

      <div class="flex  flex-col sm:border-b sm:divide-y mb-5 sm:mb-8" >
        <!-- product - start -->
        <div class="px-6 xl:px-0 py-5 sm:py-8 " v-for=" item,i in CarData" :key="item[0].goods_id" >
          <div class="xl:flex  xl:gap-4 lg:xl:gap-6 sm:py-2.5">
          
            <div class="sm:-my-2.5 hidden xl:block  cursor-pointer" @click='goshop(item[0].goods_id) '>
              <a  class="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
                <img :src="item[0].goods_img" loading="lazy" alt="Photo by Thái An" class="w-full h-full object-cover object-center " />
              </a>
            </div>
        
            <div class="xl:flex flex-col justify-between flex-1   hidden " >
              <div class="  flex  cursor-pointer flex-col" @click='goshop(item[0].goods_id) '>
                <a  class=" text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">{{item[0].goods_name}}</a>

                <span class=" text-gray-500">尺码: S</span>
              </div>

              <div >
                <span class="block text-gray-800 md:text-lg font-bold mb-1">￥{{item[0].goods_discount}}</span>

                <span class="flex items-center text-gray-500 text-sm xl:gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  有货
                </span>
              </div>
              
            </div>
            <!-- 手机 -->
            <div class=' xl:hidden flex' >
                
            <div class="sm:-my-2.5 ">
              <a  class="group sm:w-40 h-40 sm:h-56 block w-40 bg-gray-100 rounded-lg overflow-hidden relative">
                <img :src="item[0].goods_img" loading="lazy" alt="Photo by Thái An" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
              </a>
            </div>
        
            <div class=" pl-9 flex flex-col justify-between  ">
              <div class="  flex  flex-col">
                <a  class=" text-gray-800 hover:text-gray-500 lg:text-xl font-bold transition duration-100 mb-1 text-sm">{{item[0].goods_name}}</a>

                <span class=" text-gray-500">Size: S</span>
              </div>

              <div>
                <span class="block text-gray-800 md:text-lg font-bold mb-1">￥{{item[0].goods_discount}}</span>

                <span class="flex items-center text-gray-500 text-sm xl:gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  有货
                </span>
              </div>
              
            </div>
            </div>
            <div  v-if="Carnum[0] && Carnum.length ==CarData.length" class="w-full md:py-6 pb-4 sm:w-auto  justify-between items-center border-b sm:border-none pt-4 sm:pt-0  flex">
              <div class="flex  items-start xl:gap-2 items-center   justify-center">
                <el-input-number  @change="handleChange(Carnum[i].cart_count,item[0].goods_id)"  v-model="Carnum[i].cart_count"  :min="1"  label="描述文字"></el-input-number>


                <button @click="delCar(item[0].goods_id,)"  class="   px-4 text-indigo-500  hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">删除</button>
              </div>

              <div class="pt-3 sm:pt-2 ml-4 md:ml-8 lg:ml-16">
                <span class="block text-gray-800 md:text-lg font-bold">￥{{(item[0].goods_discount*Carnum[i].cart_count).toFixed(2)}}</span>
              </div>
            </div>
          </div>
        </div>


        <!-- product - end -->
      </div>

      <!-- totals - start -->
  
      <!-- totals - end -->
    </div> 

      <div class=" xl:w-1/3 xl:pr-20 px-6 xl:px-0">

        <p class=" text-2xl">购物车总数</p>
          <div class=" w-full   border-y-2  border-x xl:mt-20 text-sm  "  style=" background:rgb(250,250,250)">
            <div class=" flex  justify-between border-b-2 py-4 px-4">
              <p >小计</p>
              <p>￥{{total.toFixed(2)}}</p>
            </div>
            <div class="  py-4 px-4">
              <p  class=" mb-3">运费</p>
              <div class="  flex justify-between mb-2">
              
                <label @click="freight1" ><input type="radio" ref="r1" checked=true name="ss" class=" mr-1">标准</label>
                <p>￥10.00</p>
              </div>
              <div class="  flex justify-between">
              <label @click="freight1" ><input type="radio" ref="r2"  name="ss" class=" mr-1">顺丰</label>
                <p>￥20.00</p>
              </div>
            </div>
            <div class="py-4 px-4 border-b-2">
              <p>运送至<span  class=" text-base"> 新疆维吾尔族自治区伊犁哈萨克自治州特克斯县。</span> </p>
            </div>
                <div class="py-4 px-4 flex justify-between text-lg">
                  <p>全部的</p>
                  <p>￥{{(total+freight).toFixed(2)}}</p>
                  </div>
      </div>
            <div @click="go" class="my-4  py-4  cursor-pointer text-center text-white " style=" background:rgb(41,41,41)">
                进行结算
            </div>
      </div>
    <el-backtop></el-backtop>
  </div>
  <Tail/>
</div>
  
</template>

<script>
import axios from 'axios'
import {mapMutations,mapState} from 'vuex'
export default {
  components: {
     Tail:()=>import('../Universal/tail.vue'),
     Navigation:()=>import('../Universal/navigation.vue'),
    },
data(){
  return {
    num: 1,
    Carnum:[],
    freight:10
  }
},
computed: {
    ...mapState("Car", ["CarData", "total"]),
  },
  methods: {
   
    goshop(id){
     
      const { href } = this.$router.resolve({
        name: "Details",
        query: {
          id: id,
        },
      });
      window.open(href, "_blank");
 
      
    },
    freight1(){
   
          this.$refs.r1.checked ? this.freight=10 :this.freight=20
      },
      go() {
        this.$router.push({
          name:'cartBuyNow'
        })
      },
//     go(){
      
//       axios({
//         method: "post",
//          url: "http://localhost:8080/api/go",
//          params: {
//            money:this.total+this.freight
//          }

//       }).then((res)=>{

     
//          window.location.href=res.data.result
//       })
     
// },
     delCar(goods_id) {
      axios({
        method: "get",
        url: "http://localhost:8080/api/delCar",
        params: {
          goods_id,
          cart_count:localStorage.getItem("id"),
        },
      }).then(()=>{
        this.getTotal()
        this.getCarData()
        this.getQuantity()
            axios({
        method: "get",
        url: "http://localhost:8080/api/getCar",
        params: {
          id: localStorage.getItem("id"),
        },
      }).then((res) => {
        this.Carnum=res.data 
 
    
      });
      })
    },
    handleChange(e,img){
      axios({
        method: "get",
        url: "http://localhost:8080/api/commodityAddAndReduce",
        params:{
          num:e,
          id: localStorage.getItem("id"),
          img
        }
      }).then(()=>{
        this.getTotal()
        this.getQuantity()
      })

    },
    ...mapMutations("Car",{getCarData:'getCarData',getTotal:'getTotal',getQuantity:'getQuantity'})
  },
  mounted() {
   axios({
        method: "get",
        url: "http://localhost:8080/api/getCar",
        params: {
          id: localStorage.getItem("id"),
        },
      }).then((res) => {
        this.Carnum=res.data 
      console.log(this.Carnum,this.CarData,'ooo');
    
      });

 
   
      
    
  }
}
</script>

<style>

</style>