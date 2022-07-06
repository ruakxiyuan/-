<template>
  <div>
    <Navigation />
    <div v-if="seller[0]">
      <div
        class="w-full h-20 flex justify-center items-center"
        style="background-color: #282828"
      >
        <div class="flex text-center justify-center items-center">
          <!-- <img :src="seller[0].sel_img"  class=' w-24 h-16  pr-4'/> -->
          <span class="text-white font-bold text-3xl">{{
            seller[0].sel_store
          }}</span>
        </div>
      </div>
      <div class="container mx-auto xl:px-36 pt-2">
        <div class="w-full flex justify-between">
          <div class="w-1/6 border flex flex-col">
            <span
              class="text-white py-1 px-4 text-sm font-medium"
              style="background-color: #333333"
              >本店搜索</span
            >
            <div class="flex justify-between px-4 pt-2">
              <span class="w-2/6 text-sm">关键字：</span>
              <input
                placeholder="回车搜索"
                @change="inputSearch1()"
                v-model="inputSearch"
                type="text"
                class="hover:border w-4/6 border border-gray-600"
              />
            </div>
            <div class="flex flex-col">
              <div class="flex justify-between px-4 pt-2">
                <span class="w-2/6 text-sm flex justify-end">价格：</span>
                <input
                  v-model="minMoney"
                  type="text"
                  class="hover:border w-2/6 border border-gray-600"
                  placeholder="￥"
                />
                <input
                  v-model="maxMoney"
                  type="text"
                  class="hover:border w-2/6 border border-gray-600 ml-2"
                  placeholder="￥"
                />
              </div>
              <button
                @click="momenySearch"
                class="my-2 mx-4 text-white py-1"
                style="background: #333333"
              >
                价格搜索
              </button>
            </div>
          </div>
          <div class="w-5/6 pl-3">
            <div class="w-full">
              <div class="w-full h-24">
                <div
                  class="h-1/3 flex items-center pl-3"
                  style="background: #333333"
                >
                  <span class="text-white">店铺简历</span>
                </div>
                <div class="h-2/3">
                  <p class="" style="color: #333333">
                    {{ seller[0].sel_info }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-between pt-8">
          <div class="w-1/6 border flex flex-col h-full">
              
            <span
              class="text-white py-1 px-4 text-sm font-medium"
              style="background-color: #333333"
              >卖家推荐</span
            >
            <div v-for="itemss in fourGoods" :key="itemss.goods_id" class=" border-b">
                  <div class="px-4 flex py-8">
              <div class="w-2/6 border h-16  cursor-pointer" @click="goshop(itemss.goods_id)">
                  <img :src="itemss.goods_img" alt="" class="w-full  h-full">
              </div>
              <div class="w-4/6  h-16 ml-2 cursor-pointer" @click="goshop(itemss.goods_id)">
                  <p class=" text-sm w-full  overflow-hidden h-5">{{itemss.goods_name}}</p>
                  <p class=" text-red-600">￥{{itemss.goods_discount}}</p>
              </div>
            </div>
              </div>
            
          </div>

          <div class="w-5/6 border ml-3">
            <div
              class="py-1 flex items-center pl-3"
              style="background: #333333"
            >
              <span class="text-white">宝贝推荐</span>
            </div>
            <div class="pl-3 pt-2">
              <span
                @click="getAll"
                class="hover:border-b-2 cursor-pointer hover:border-blue-700"
                style="color: #2953a6"
                >所有宝贝</span
              >
            </div>

            <div class="flex flex-wrap w-full">
              <div
                class="w-1/3 px-5 py-2 cursor-pointer"
                @click="goshop(items.goods_id)"
                v-for="items in goods"
                :key="items.goods_id"
              >
                <div class="border h-72 boder">
                  <img :src="items.goods_img" alt="" class="w-full h-full" />
                </div>
                <span class="pt-2 pb-4">
                  {{ items.goods_name }}
                </span>
                <span class="text-red-500"> ￥{{ items.goods_discount }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <Tail/> -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goods: [],
      seller: [],
      inputSearch: "",
      minMoney: "",
      maxMoney: "",
      fourGoods: [],
    };
  },
  components: {
    Tail: () => import("../Universal/tail.vue"),
    Navigation: () => import("../Universal/navigation.vue"),
  },
  methods: {
    getAll() {
      axios({
        method: "get",
        url: "http://localhost:8080/api/iDgetTab_seller",
        params: {
          sel_id: this.$route.query.id,
        },
      }).then((res) => {
        this.seller = res.data;
        console.log(this.seller, "seller");
        axios({
          method: "get",
          url: "http://localhost:8080/api/getAllGoods",
          params: {
            sel_id: res.data[0].sel_id,
          },
        }).then((res1) => {
          this.goods = res1.data;
          console.log(this.goods, "goods");
        });
      });
    },
    momenySearch() {
      if (this.minMoney != "" && this.maxMoney != "") {
        axios({
          method: "get",
          url: "http://localhost:8080/api/iDgetTab_seller",
          params: {
            sel_id: this.$route.query.id,
          },
        }).then((res) => {
          axios({
            method: "get",
            url: "http://localhost:8080/api/getAllGoodsss",
            params: {
              sel_id: res.data[0].sel_id,
              minMoney: this.minMoney,
              maxMoney: this.maxMoney,
            },
          }).then((res1) => {
            this.goods = res1.data;
          });
        });
      }
    },
    inputSearch1() {
      console.log(this.inputSearch);
      axios({
        method: "get",
        url: "http://localhost:8080/api/iDgetTab_seller",
        params: {
          sel_id: this.$route.query.id,
        },
      }).then((res) => {
        axios({
          method: "get",
          url: "http://localhost:8080/api/getAllGoodss",
          params: {
            sel_id: res.data[0].sel_id,
            goods_name: this.inputSearch,
          },
        }).then((res1) => {
          this.goods = res1.data;
        });
      });
    },
    goshop(id) {
      const { href } = this.$router.resolve({
        name: "Details",
        query: {
          id: id,
        },
      });
      window.open(href, "_blank");
    },
  },
  mounted() {
    axios({
      method: "get",
      url: "http://localhost:8080/api/getGoods",
      params: {
        sel_id: this.$route.query.id,
      },
    }).then(res=>{
        this.fourGoods=res.data;
    });
    axios({
      method: "get",
      url: "http://localhost:8080/api/iDgetTab_seller",
      params: {
        sel_id: this.$route.query.id,
      },
    }).then((res) => {
      this.seller = res.data;
      console.log(this.seller, "seller");
        document.title=this.seller[0].sel_store+'的店铺'
      axios({
        method: "get",
        url: "http://localhost:8080/api/getAllGoods",
        params: {
          sel_id: res.data[0].sel_id,
        },
      }).then((res1) => {
        this.goods = res1.data;
        console.log(this.goods, "goods");
      });
    });
  },
};
</script>

<style>
</style>