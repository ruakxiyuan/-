<template>
  <div class="xl:px-48">
    <section class="bg-white py-8">
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" class="w-full z-30 top-0 py-1">
          <div
            class="
              w-full
              container
              mx-auto
              flex flex-wrap
              items-center
              justify-between
              mt-0
             
              py-3
            "
          >
            <el-breadcrumb separator="/" class="md:flex flex xl:pb-5 pl-4 xl:pl-0  ">
               <el-breadcrumb-item class="xl:pr-3 xl:text-xl text-base "
                ><span
                  @click="getAll"
                  class="cursor-pointer hover:text-orange-400"
                  >全部</span
                ></el-breadcrumb-item
              >
              <el-breadcrumb-item class="xl:pr-3 xl:text-xl text-base"
                ><span
                  @click="coat"
                  class="cursor-pointer hover:text-orange-400 "
                  >外套</span
                ></el-breadcrumb-item
              >
              <el-breadcrumb-item class="xl:pr-3 xl:text-xl text-base"
                ><span
                  @click="shirt"
                  class="cursor-pointer hover:text-orange-400"
                  >衬衫</span
                ></el-breadcrumb-item
              >
              <el-breadcrumb-item class="xl:pr-3 xl:text-xl text-base"
                ><span
                  @click="T_shirt"
                  class="cursor-pointer hover:text-orange-400"
                >
                  T恤</span
                ></el-breadcrumb-item
              >
              <el-breadcrumb-item class="xl:pr-3 xl:text-xl text-base"
                ><span
                  @click="skirt"
                  class="cursor-pointer hover:text-orange-400"
                  >裙子</span
                >
              </el-breadcrumb-item>
            </el-breadcrumb>

            <div class="xl:flex  xl:items-center   pr-4 xl:pr-0" id="store-nav-content" @click="search">
              <a class="pl-3  text-base  cursor-pointer inline-block flex no-underline hover:text-black">
                搜索
                <svg
                  class="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <transition name="draw">
          <div class="h-14  px-4  xl:px-0 flex justify-between   justify-center   items-center "  v-show="open">
            <div class=" w-full h-full flex  ">
         
                  <el-select class="sel text-lg mr-4 mt-2"  v-model="value"   placeholder="请选择" style="display: block; width: 100px; border:none;height:56px">
                    <el-option
                      class=' text-xl'
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                </el-select>
          
                
              <input @keyup="keySearch"  @keyup.enter='inputSearch' ref="List" type="text"   placeholder='搜索' class=" text-lg  w-full h-full border-0  outline-none " autocomplete="off"  />
            </div>
            <div  class="cursor-pointer" @click="search">
              
              <svg
                t="1651718048686"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2083"
                width="27"
                height="27"
              >
                <path
                  d="M912.526651 867.741144 555.540144 510.712681l356.986507-357.000833c11.171434-11.18576 11.171434-29.257348 0-40.443108-11.20111-11.18576-29.272697-11.18576-40.444131 0L515.096013 470.267527 158.096203 113.267716c-11.187807-11.159154-29.258371-11.159154-40.444131 0-11.186783 11.186783-11.186783 29.286 0 40.47176L474.623229 510.712681 117.623419 867.741144c-11.159154 11.172457-11.159154 29.216415 0 40.443108 11.18576 11.17348 29.284977 11.17348 40.47176 0l357.000833-357.027439 356.985484 357.027439c11.171434 11.17348 29.243021 11.17348 40.444131 0C923.698085 896.957559 923.725714 878.913601 912.526651 867.741144z"
                  p-id="2084"
                  fill="#8a8a8a"
                ></path>
              </svg>
            </div>
          </div>
          </transition>
           <transition name="draw">
             <div v-show="ok" class=' h-7 mb-6  flex  items-center'>按<span class=" text-xl">Enter</span>进行搜索</div>
             </transition>
        
        </nav>
        <el-empty description="没有类似商品" v-if="!all.length" class=" w-full"> </el-empty>
        <div
          class="
            xl:border
            w-1/2
            md:w-1/3
            xl:w-1/4
            p-3
           xl:p-9
            flex flex-col
            cursor-pointer
            hover:shadow-2xl
            
          "
          v-for="item in all"
          :key="item.goods_id"
          @click="Details(item.goods_id)"
        >
          <a class="w-full">
            <img
              class="hover:grow hover:shadow-lg h-52 xl:h-80 w-full rounded-lg"
              :src="item.goods_img"
            />
            <div class="pt-3 flex items-center justify-between">
              <p class="text-xs xl:text-base  h-12 ">{{ item.goods_name }}</p>
            </div>
            <p class="pt-1 0 text-orange-600 text-xs xl:text-2xl">
              ￥{{ item.goods_discount }}
              <del class="xl:text-lg ml-2 text-xs text-gray-300"
                >￥{{ item.goods_price }}</del
              >
            </p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      options: [{
          value: '商品',
          label: '商品'
        }, {
          value: '店铺',
          label: '店铺'
        }],
        value: '商品',
        all: "",
        open:false,
        ok:false,
    };
  },
  methods: {
    inputSearch(){
      if(this.value=='店铺'){
         sessionStorage.setItem('sel_store',this.$refs.List.value);
         const { href } = this.$router.resolve({
         name:'searchSeller',
      });
      window.open(href, "_blank");
      }else{
         axios({
        method: "get",
        url: "http://localhost:8080/api/inputSearch",
        params: {
          goods_name:this.$refs.List.value
        },
      }).then((res) => {
        this.all = res.data;
        console.log(this.all);
      });
      }
   
     
    },
    search(){
     this.$refs.List.value=''
      this.open=!this.open
      setTimeout(() => {
         this.$refs.List.focus()
         
      }, 100);
     this.keySearch()
    },
    keySearch(){
      console.log(this.$refs.List.value.length);
      if(this.$refs.List.value.length){
        this.ok=true;
      }else{
         this.ok=false;
      }
      console.log( );
    },
    coat() {
      axios({
        method: "get",
        url: "http://localhost:8080/api/coat",
        params: {
          cateDetail_id: 3,
        },
      }).then((res) => {
        this.all = res.data;
      });
    },
    shirt() {
      axios({
        method: "get",
        url: "http://localhost:8080/api/shirt",
        params: {
          cateDetail_id:16,
        },
      }).then((res) => {
        this.all = res.data;
      });
    },
    T_shirt() {
      axios({
        method: "get",
        url: "http://localhost:8080/api/T_shirt",
        params: {
          cateDetail_id:4,
        },
      }).then((res) => {
        this.all = res.data;
      });
    },
    skirt() {
      axios({
        method: "get",
        url: "http://localhost:8080/api/skirt",
        params: {
          cateDetail_id: 1,
        },
      }).then((res) => {
        this.all = res.data;
        
      });
    },
    Details(id) {
      const { href } = this.$router.resolve({
        name: "Details",
        query: {
          id: id,
        },
      });
      window.open(href, "_blank");
    },
        getAll(){
          axios.get("http://localhost:8080/api/all").then((res) => {
                this.all = res.data;
              }).then((res) => {
                console.log(this.all.length);
              });
              
      }
  },
  
  mounted() {
      this.getAll()

  },
};
</script>

<style scoped>

input::-webkit-input-placeholder {
/* placeholder颜色 */
color: #aab2bd;
/* placeholder字体大小 */
font-size: 20px;

}
.draw-enter-active, .draw-leave-active {
  transition: all 0.3s  ease-in-out;
}
.draw-enter, .draw-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}
/* .sel{
    position:absolute;
    clip:rect(2px 90px 30px 2px);
    width:90px;
    height:28px;
    line-height:28px;
    font-size:15px;
    font-weight:bold;
} */

</style>