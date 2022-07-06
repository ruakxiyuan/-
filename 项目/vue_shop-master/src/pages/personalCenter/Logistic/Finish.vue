<template>
  <div class='' v-if="goods.length!=0 && goods.length == tab_order.length">
    <div class=" w-full hidden xl:block md:block overflow-auto " style="height:534px">
      <div
     
        class="
          border-2
          text-sm text-center
          bg-gray-100
          h-10
          mt-4
          flex
          justify-center
          items-center
        "
      >
        <div class="" style="flex-grow: 6">
          <span> 宝贝 </span>
        </div>
        <div class="flex-grow">
          <span> 单价 </span>
        </div>
        <div class="flex-grow">
          <span> 数量 </span>
        </div>
        <div class="flex-grow">
          <span> 商品操作 </span>
        </div>
        <div class="flex-grow" style="flex-grow: 2">
          <span> 实付款 </span>
        </div>
        <div class="flex-grow">
          <span> 交易状态 </span>
        </div>
        <div class="flex-grow">
          <span> 交易操作 </span>
        </div>
      </div>
      <div
        v-for="(item, i) in tab_order"
        v-if="tab_order[i].order_done==null"
        :key="item.order_id"
  
        style="border: 1px solid rgb(218, 243, 255)"
      >
        <div
          class="text-sm p-2 py-6 items-center h-10 mt-4 flex"
          style="background: rgb(234, 248, 255)"
        >
          <div class="" style="flex-grow: 1">
            <span class="text-base font-semibold mr-2">
              {{ tab_order[i].order_time }}
            </span>
            <span> 订单号:{{ tab_order[i].order_id }} </span>
          </div>
          <div class="flex-grow" style="flex-grow: 2" v-if="seller[0]">
            <svg
              t="1651662869339"
              class="icon inline-block"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2243"
              width="24"
              height="24"
            >
              <path
                d="M245.333333 533.333333v288h512V533.333333h64v352h-640V533.333333h64zM834.624 139.050667l45.077333 150.869333a149.333333 149.333333 0 0 1-255.722666 139.52l-3.669334-4.330667L618.666667 423.04l-1.642667 2.090667a149.248 149.248 0 0 1-104.533333 54.485333l-6.016 0.32-5.141334 0.085333a149.12 149.12 0 0 1-112.021333-50.56l-3.669333-4.330666L384 423.04l-1.642667 2.090667a149.248 149.248 0 0 1-104.533333 54.485333l-6.016 0.32-5.141333 0.085333a149.333333 149.333333 0 0 1-145.301334-183.808l1.792-6.890666 45.909334-150.250667h665.557333z m-47.68 63.978666H216.426667L184.533333 307.370667a84.693333 84.693333 0 0 0-2.389333 11.456l-0.597333 5.888-0.213334 5.952a85.333333 85.333333 0 0 0 169.813334 12.16l0.512-4.352 2.624-29.12h59.434666l2.624 29.12a85.333333 85.333333 0 0 0 169.472 4.330666l0.512-4.330666 2.624-29.12h59.434667l2.624 29.12a85.333333 85.333333 0 1 0 168.32-26.346667l-1.066667-4.330667-31.317333-104.768z"
                fill="#1677FF"
                p-id="2244"
              ></path>
            </svg>
            <span > {{seller[i].sel_store}} </span>
          </div>
        </div>

        <div class="p-6 flex text-center justify-center items-center">
          <div class="" style="flex-grow: 1">
            <div class="flex">
              <span>
                <div class="w-28 h-28 mr-2">
                  <img
                    :src="goods[i].goods_img"
                    alt=""
                    class="w-full h-full rounded"
                  />
                </div>
              </span>
              <span class="w-52 text-sm">
                {{ goods[i].goods_name }}
              </span>
            </div>
          </div>
          <div class="flex-grow">
            <del class="block text-orange-600">
              ￥{{ goods[i].goods_price }}
            </del>
            <span> ￥{{ goods[i].goods_discount }} </span>
          </div>
          <div class="flex-grow">
            <span>
              {{ orderdetails[i].detail_count }}
            </span>
          </div>
          <div class="flex-grow" style="border-right: 1px solid black">
            <span> 投诉卖家 </span>
          </div>
          <div
            class="flex-grow h-full inline-block"
            style="flex-grow: 3; border-right: 1px solid black"
          >
            <span class="text-xl">
              ￥{{ orderdetails[i].detail_sum.toFixed(2) }}
            </span>
          </div>
          <div></div>
          <div
            class="flex-grow"
            style="flex-grow: 2; border-right: 1px solid black"
          >
           <el-popover
    placement="bottom-start"
    title='物流'
    width="250"
    trigger="hover"
    class=' text-red-600'
    content="快件已在湘潭株易路口分部签收 签收人：本人。如有疑问请电联：13507322659, 投诉电话：15507325957, 您的快递已经妥投。风里来雨里去, 只为客官您满意。上有老下有小, 赏个好评好不好？【请在评价快递员处帮忙点亮五颗星星哦~】

2022-05-10 12:23:46">
    <span class="text-red-500 cursor-pointer" slot="reference"> 查看物流 </span>
 
  </el-popover>
            
          </div>
          <div class="flex-grow">
            <span 
            @click='completeorder(orderdetails[i].order_id)'
              class="
                w-10
                h-4
                bg-blue-400
                text-white
                p-2
                rounded
                cursor-pointer
                font-medium
                hover:bg-blue-600
              "
            >
              确认收货
             
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 手机版 -->
    <div class="w-full xl:hidden md:hidden">
      <div
        v-for="(item, i) in tab_order"
        :key="item.order_id"
        class="p-2"
        style="border: 1px solid rgb(218, 243, 255)  "
      >
        <div class="text-sm py-6 items-center h-10 mt-4 flex">
          <div v-if="seller[0]">
            <svg
              t="1651662869339"
              class="icon inline-block"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2243"
              width="24"
              height="24"
            >
              <path
                d="M245.333333 533.333333v288h512V533.333333h64v352h-640V533.333333h64zM834.624 139.050667l45.077333 150.869333a149.333333 149.333333 0 0 1-255.722666 139.52l-3.669334-4.330667L618.666667 423.04l-1.642667 2.090667a149.248 149.248 0 0 1-104.533333 54.485333l-6.016 0.32-5.141334 0.085333a149.12 149.12 0 0 1-112.021333-50.56l-3.669333-4.330666L384 423.04l-1.642667 2.090667a149.248 149.248 0 0 1-104.533333 54.485333l-6.016 0.32-5.141333 0.085333a149.333333 149.333333 0 0 1-145.301334-183.808l1.792-6.890666 45.909334-150.250667h665.557333z m-47.68 63.978666H216.426667L184.533333 307.370667a84.693333 84.693333 0 0 0-2.389333 11.456l-0.597333 5.888-0.213334 5.952a85.333333 85.333333 0 0 0 169.813334 12.16l0.512-4.352 2.624-29.12h59.434666l2.624 29.12a85.333333 85.333333 0 0 0 169.472 4.330666l0.512-4.330666 2.624-29.12h59.434667l2.624 29.12a85.333333 85.333333 0 1 0 168.32-26.346667l-1.066667-4.330667-31.317333-104.768z"
                fill="#1677FF"
                p-id="2244"
              ></path>
            </svg>
            <span > {{seller[i].sel_store}}</span>
          </div>
        </div>
        <div class=" flex">
          <div class=" w-2/5 h-28">
               <img :src="goods[i].goods_img" alt=""  class=" w-full h-full rounded"/>
          </div>
          <div  class="w-1/2  px-3 text-xs"> 
              <span >
                {{goods[i].goods_name}}
              </span>
          </div>
          <div class=" w-1/5 flex flex-col">
                <span>
                  ￥{{goods[i].goods_discount.toFixed(2) }}
                </span>
                <span class=' text-sm text-gray-500'>
                  x{{orderdetails[i].detail_count}}
                </span>
          </div>
        </div>
        <div class='flex justify-end'>
           <div class="px-1">
             <span class=' h-11 w-36 border rounded-full    text-sm   p-2'>
               查看物流
             </span>
          </div>
          <div class="px-1">
             <span class=' h-11 w-36 border rounded-full  border-orange-500  text-sm  text-orange-500 p-2'>
               确认收货
             </span>
          </div>
           
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
      tab_order: [],
      orderdetails: [],
      goods: [],
      seller:[]
    };
  },
  methods: {

    completeorder(id){
      axios({
        method: "get",
        url: "http://localhost:8080/api/completeorder",
        params: {
          order_id:id
        }
      }).then(res=>{
        this.$router.push({
         name:'Comment'
        })

      })

    },
    getOrder(){
       axios({
      method: "get",
      url: "http://localhost:8080/api/getTab_order",
      params: {
        id: localStorage.getItem("id"),
      },
    }).then((res) => {
      this.tab_order = res.data;

      for (var i = 0; i < res.data.length; i++) {
        axios({
          method: "get",
          url: "http://localhost:8080/api/getTab_orderdetails",
          params: {
            order_id: res.data[i].order_id,
          },
        }).then((res1) => {
          this.orderdetails.push(res1.data[0]);
          for (var i = 0; i < res1.data.length; i++) {
            axios({
              method: "get",
              url: "http://localhost:8080/api/Details",
              params: {
                id: res1.data[i].goods_id,
              },
            }).then((res2) => {
              for (var i = 0; i <res2.data.length; i++) {
                axios({
                  method: "get",
                  url: "http://localhost:8080/api/sel_idgetSeller",
                  params: {
                    id:res2.data[i].sel_id
                  }
                }).then(res3=>{
                  this.seller.push(res3.data[0])
                })
              }
              this.goods.push(res2.data[0]);
            });
          }
          console.log(this.tab_order);
        });
      }
    });
    }
  },
  mounted() {
    this.getOrder()
  },
};
</script>

<style>
</style>