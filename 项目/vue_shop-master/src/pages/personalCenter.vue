<template>
  <!-- <div  class=" w-full"  style=" height: 843px "> -->
    <div>
      <Navigation/>
      <div>

          
        <div  class=" w-full  " style=" height: 663px; ">
          <Sidebar />
     
        </div>


        </div>
      <Tail/>
    </div>
   
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
     Tail:()=>import('./Universal/tail.vue'),
     Navigation:()=>import('./Universal/navigation.vue'),
     Sidebar: () => import("./personalCenter/Sidebar.vue"),
    },
  data() {
    return {
      Carnum: 0,
      addr:null,
    };
  },
 
  methods: {
    ...mapMutations("Car", { getCarData: "getCarData" }),
  },

  computed: {
    ...mapState("Car", ["CarData"]),
  },
created(){
   axios({
      method: "get",
      url: "http://localhost:8080/api/getAddr",
      params: {
        id: localStorage.getItem("id"),
      }
    }).then((res)=>{
      this.addr=res.data[0].addr_id
    
    })
},
  mounted() {  
    this.getCarData()
    // console.log(this.$route.query.out_trade_no.indexOf('!')==-1,this.$route.query.out_trade_no.split('!')[0],this.$route.query.out_trade_no.split('!')[1]);     
    if (localStorage.getItem("name") != this.$route.query.out_trade_no) {
      localStorage.setItem("name", this.$route.query.out_trade_no);
      axios({
        method: "get",
        url: "http://localhost:8080/api/queryOrder",
        params: {
          out_trade_no: this.$route.query.out_trade_no,
          trade_no: this.$route.query.trade_no,
        },
      }).then((res1) => {
        if (res1.data.msg === "交易完成" && this.$route.query.out_trade_no.indexOf('!')==-1) {
          
          axios({
            method: "get",
            url: "http://localhost:8080/api/getCar",
            params: {
              id: localStorage.getItem("id"),
            },
          }).then((res2) => {
         
        
              for (var i = 0; i < res2.data.length; i++) {
       
               
                let order_id = Math.ceil(Math.random() * 1000000000);
            
              axios({
                  method: "get",
                  url: "http://localhost:8080/api/order",
                  params: {
                    order_id,
                    order_sum:res2.data[i].cart_count * this.CarData[i][0].goods_discount,
                    cust_id: localStorage.getItem("id"),
                    sel_id: res2.data[i].sel_id,
                    addr_id:localStorage.getItem("addr_id")
                  },
                })
       
                
                   axios({
                  method: "get",
                  url: "http://localhost:8080/api/orderDetails",
                  params: {
                    order_id,
                    goods_id: res2.data[i].goods_id,
                    detail_count: res2.data[i].cart_count,
                    detail_sum:
                      res2.data[i].cart_count *
                      this.CarData[i][0].goods_discount,
                  },
                });
               
               
              }
              axios({
                method: "get",
                url: "http://localhost:8080/api/delAllCar",
                params: {
                  id: localStorage.getItem("id"),
                }
              })
            });
         
        }else{
            let order_id = Math.ceil(Math.random() * 1000000000);
         
            axios({
                 method: "get",
                  url: "http://localhost:8080/api/Details",
                  params: {
                    id:parseInt(this.$route.query.out_trade_no.split('!')[0])
                  },
            }).then((res1)=>{
               axios({
                  method: "get",
                  url: "http://localhost:8080/api/order",
                  params: {
                    order_id,
                    order_sum:res1.data[0].goods_discount * this.$route.query.out_trade_no.split('!')[1],
                    cust_id: localStorage.getItem("id"),
                    sel_id:res1.data[0].sel_id,
                    addr_id:localStorage.getItem("addr_id"),
                  },
                })
    
                    axios({
                      method: "get",
                      url: "http://localhost:8080/api/orderDetails",
                      params: {
                        order_id,
                        goods_id:parseInt(this.$route.query.out_trade_no.split('!')[0]),
                        detail_count:parseInt(this.$route.query.out_trade_no.split('!')[1]),
                        detail_sum:
                          parseInt(this.$route.query.out_trade_no.split('!')[1]) *
                          res1.data[0].goods_discount,
                      },
                    });
          
            })


             
        }
      });
    }
  },
};
</script>

<style>
</style>