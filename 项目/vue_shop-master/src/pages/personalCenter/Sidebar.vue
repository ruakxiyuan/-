<template>
  <div class="container mx-auto xl:px-36  ">
    <div class="h-full xl:flex hidden md:flex ">
      <div
        class="
          h-96
          w-56
          mt-8
          inline-block
          bg-white
          dark:bg-gray-800 dark:border-gray-600
        "
      >
        <div class="flex flex-col mt-3 w-full" v-if="data">
          <img
           
            class="object-cover border h-16 w-16 mb-6"
            :src="data.cust_img"
            alt="avatar"
          />
          <div class="flex mb-2">
            <span class="text-gray-400 mr-2">Hi</span>
            <span>{{ data.cust_account }}</span>
          </div>
        </div>
        <!-- 選項 -->
        <div class="flex flex-col justify-between flex-1 mt-2">
          <nav class="flex flex-col">
            <a
              
              class="
                
                flex
                w-64
                mt-2
                text-gray-400
                transition-colors
                duration-200
                transform
              "
              
            >
              <router-link to="/personalcenter/account" :class="{'active':active1}" @click.native="active1=true,active2=false,active3=false,active4=false,active5=false" class="font-medium py-2 cursor-pointer hover:text-black"
                >帐户详细资料</router-link
              >
            </a>
            <a
             
              class=" flex w-64 mt-2"
            >
              <router-link
              :class="{'active':active2}" @click.native="active2=true,active1=false,active3=false,active4=false,active5=false"
                to="/personalcenter/logistic" class="xl:font-medium  text-gray-400 cursor-pointer py-2 text-base hover:text-black"
                >订单</router-link
              >
            </a>

            <a
              class="
                
                flex
                w-64
                mt-2
                text-gray-400
                transition-colors
                duration-200
                transform
              "
            >
              <span :class="{'active':active3}" @click="active3=true,active2=false,active1=false,active4=false,active5=false" class="font-medium py-2 hover:text-black cursor-pointer">我的收藏</span>
            </a>

              <a
              class="
               
                flex
                w-64
                mt-2
                text-gray-400
                transition-colors
                duration-200
                transform
              "
            >
              <router-link  :class="{'active':active4}" @click.native="active4=true,active2=false,active3=false,active1=false,active5=false" to="/personalcenter/addr" class="font-medium py-2 hover:text-black cursor-pointer">我的收货地址</router-link>
            </a>
            <a
              class="
              
                flex
                w-64
                mt-2
                text-gray-400
                transition-colors
                duration-200
                transform
              "
            >
              <span :class="{'active':active5}" @click="active5=true,active2=false,active3=false,active4=false,active1=false" class="font-medium py-2 hover:text-black  cursor-pointer">登出</span>
            </a>
          </nav>
        </div>
      </div>
 
      <router-view></router-view>

     
    </div>
    <!-- 手机版 -->
    <div class="flex flex-col xl:hidden md:hidden py-6">
      <div class="h-full flex justify-around py-2 pb-6 border-b-2">
        <router-link
          to="/personalcenter/logistic"
          class="flex flex-col justify-center items-center"
        >
          <svg
            t="1651808403939"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="16606"
            width="40"
            height="40"
          >
            <path
              d="M512 168c-112.416 0-204 91.968-204 206S399.584 580 512 580s204-91.968 204-206S624.416 168 512 168zM244 374C244 225.136 363.728 104 512 104s268 121.136 268 270S660.272 644 512 644s-268-121.136-268-270z"
              p-id="16607"
            ></path>
            <path
              d="M612.128 420.352a32 32 0 0 1 11.52 43.776 128.48 128.48 0 0 1-47.28 46.8 129.76 129.76 0 0 1-128.736 0 128.496 128.496 0 0 1-47.28-46.8 32 32 0 0 1 55.296-32.256 64.512 64.512 0 0 0 23.728 23.488 65.776 65.776 0 0 0 65.248 0 64.496 64.496 0 0 0 23.728-23.488 32 32 0 0 1 43.776-11.52zM600.304 583.2a32 32 0 0 1 41.808-17.328 340 340 0 0 1 110.304 73.712l-22.624 22.624 22.624-22.624a340 340 0 0 1 92.272 170.272C857.12 868.928 806.688 912 756 912h-488c-50.688 0-101.136-43.072-88.688-102.144a340.048 340.048 0 0 1 92.272-170.272l22.624 22.624-22.624-22.624c7.04-7.04 14.352-13.728 21.952-20.096l20.56 24.512-20.56-24.512a340 340 0 0 1 88.352-53.6 32 32 0 0 1 24.48 59.12 276 276 0 0 0-164.432 198.048c-1.296 6.192 0.4 11.632 4.736 16.256 4.64 4.96 12.288 8.688 21.328 8.688h488c9.04 0 16.688-3.728 21.328-8.688 4.32-4.608 6.032-10.08 4.736-16.256a275.808 275.808 0 0 0-74.896-138.224l19.952-19.952-19.952 19.952a275.84 275.84 0 0 0-89.552-59.824 32 32 0 0 1-17.312-41.808z"
              p-id="16608"
            ></path>
          </svg>
          <span class="text-xs px-2">个人设置</span>
        </router-link>
        <router-link
          to="/personalcenter/logistic"
          class="flex flex-col justify-center items-center"
        >
          <svg
            t="1651805909757"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10637"
            width="40"
            height="40"
          >
            <path
              d="M287 70.18181826h450A155.45454521 155.45454521 0 0 1 892.45454521 225.63636348v572.72727304a155.45454521 155.45454521 0 0 1-155.45454521 155.45454522H287A155.45454521 155.45454521 0 0 1 131.54545479 798.36363652V225.63636348A155.45454521 155.45454521 0 0 1 287 70.18181826z m0 65.45454522A90 90 0 0 0 197 225.63636348v572.72727304A90 90 0 0 0 287 888.36363653h450a90 90 0 0 0 90-90V225.63636348A90 90 0 0 0 737 135.63636347H287z"
              p-id="10638"
              fill="#2c2c2c"
            ></path>
            <path
              d="M327.90909131 401.54545479h368.18181738a32.72727305 32.72727305 0 1 0 0-65.4545461H327.90909131a32.72727305 32.72727305 0 1 0 0 65.4545461zM327.90909131 606.09090869h204.5454539a32.72727305 32.72727305 0 1 0 0-65.45454521H327.90909131a32.72727305 32.72727305 0 1 0 0 65.45454521z"
              p-id="10639"
              fill="#2c2c2c"
            ></path>
          </svg>
          <span class="text-xs px-2">我的订单</span>
        </router-link>
        <router-link
          to="/personalcenter/logistic"
          class="flex flex-col justify-center items-center"
        >
          <svg
            t="1651806094505"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12291"
            width="40"
            height="40"
          >
            <path
              d="M902.211 410.358a31.766 31.766 0 0 0-25.644-21.62L644.34 354.994 540.485 144.561a31.765 31.765 0 0 0-56.971 0L379.659 354.995l-232.227 33.744a31.768 31.768 0 0 0-17.606 54.183l168.042 163.8-39.669 231.288a31.765 31.765 0 0 0 46.091 33.487L512 762.298l207.71 109.199c6.915 3.65 22.854 4.496 33.454-2.418 10.086-6.579 14.681-19.151 12.637-31.069l-39.669-231.288 168.041-163.8a31.765 31.765 0 0 0 8.038-32.564zM669.827 572.885a31.766 31.766 0 0 0-9.136 28.117l31.611 184.31-165.521-87.02a31.746 31.746 0 0 0-14.782-3.648 31.755 31.755 0 0 0-14.782 3.648l-165.521 87.02 31.611-184.31a31.766 31.766 0 0 0-9.135-28.117l-133.91-130.53 185.058-26.89a31.765 31.765 0 0 0 23.918-17.377L512 230.396l82.761 167.691a31.765 31.765 0 0 0 23.917 17.377l185.059 26.89-133.91 130.531z"
              fill=""
              p-id="12292"
            ></path>
          </svg>
          <span class="text-xs px-2">我的收藏</span>
        </router-link>
        <router-link
          to="/personalcenter/logistic"
          class="flex flex-col justify-center items-center"
        >
          <svg
            t="1651806168138"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="13241"
            width="40"
            height="40"
          >
            <path
              d="M814.270402 531.62481h-11.233046c6.957301 11.953861 11.233046 25.665733 11.233046 40.492617v242.966964c0 44.730478-36.260899 80.991377-80.989329 80.991377H287.840786c-44.72843 0-80.989329-36.260899-80.989329-80.991377V572.117427c0-14.826883 4.275745-28.538756 11.233046-40.492617h-11.233046c-44.730478 0-80.989329-36.260899-80.98933-80.991377V410.140816c0-44.730478 36.258851-80.991377 80.98933-80.991377H329.274353l-32.541123-32.612795c-38.757131-38.840066-38.757131-101.817204 0-140.658294s101.595021-38.840066 140.350105 0l72.145007 72.302686c0.46382-0.032764 0.85904-0.269282 1.332075-0.269282 0.032764 0 0.060409 0.01843 0.093174 0.01843l72.623162-72.619067c38.931192-38.931192 102.048603-38.931192 140.979794 0 38.931192 38.927096 38.931192 102.046555 0 140.979794l-32.859551 32.857504h122.872382c44.72843 0 80.989329 36.260899 80.989329 80.991377v40.492617c0.001024 44.731502-36.259875 80.992401-80.988305 80.992401z m-60.741997 323.956293c11.182876 0 20.247332-9.064457 20.247332-20.247332V551.872142c0-11.182876-9.064457-20.247332-20.247332-20.247332H530.808773v323.956293h222.719632z m-506.182284-20.247332c0 11.182876 9.064457 20.247332 20.247333 20.247332h222.719631V531.62481H267.593454c-11.182876 0-20.247332 9.064457-20.247333 20.247332v283.461629z m-40.494664-465.687619c-22.364727 0-40.494665 18.129937-40.494665 40.494664v40.494665c0 22.364727 18.128914 40.494665 40.494665 40.494664h283.461628V369.646152H206.851457z m210.683859-184.065913c-25.025805-25.027853-65.603404-25.027853-90.629209 0-25.027853 25.025805-25.027853 65.601357 0 90.631257l52.941014 52.938967h110.466988v-20.624122c0-31.034988 0.163822-50.004511-18.400243-68.5696l-54.37855-54.376502z m276.68146 90.631257c25.027853-25.029901 25.027853-65.605452 0-90.631257-25.025805-25.027853-65.603404-25.027853-90.62921 0l-54.378549 54.376502c-18.643928 18.643928-18.400243 37.044171-18.400244 68.948438v20.245284h110.466988l52.941015-52.938967zM854.765066 410.140816c0-22.364727-18.128914-40.494665-40.494664-40.494664H530.808773v121.483993h283.461629c22.364727 0 40.494665-18.129937 40.494664-40.494664v-40.494665z"
              p-id="13242"
            ></path>
          </svg>
          <span class="text-xs px-2">积分商城</span>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    
        active1:false,
        active2:true,
        active3:false,
        active4:false,
        active5:false

      
    };
  },
  
  mounted() {
    axios({
      method: "get",
      url: "http://localhost:8080/api/iDgetUser",
      params: {
        id: localStorage.getItem("id"),
      },
    }).then((res) => {
      this.data = res.data[0];
      console.log(res.data);
    });
  },
};
</script>
<style scoped>
.active{
  border-bottom-width:1px;
  color:black;
  
}
</style>
