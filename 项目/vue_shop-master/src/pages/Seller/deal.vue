<template>
  <div>
    <!-- 提示信息 -->
    <div
      class="
        flex
        w-100
        max-w
        mx-auto
        overflow-hidden
        bg-white
        rounded-lg
        shadow-md
        dark:bg-gray-800
      "
    >
      <div class="flex items-center justify-center w-10 bg-blue-300">
        <svg
          class="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
          />
        </svg>
      </div>

      <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
          <!-- <span class="font-semibold text-blue-500 dark:text-blue-400">Info</span> -->
          <p class="text-sm text-gray-600 dark:text-gray-200">
            [重要]如发货仓在疫情风险城市，会导致商品发货及配送时效较不稳定，平台将在商品详情页告知用户"配送可能延迟",帮助您降低由于发货及配送时效引起的消费者投诉、退款。
          </p>
        </div>
      </div>
    </div>
    <!-- 交易量导航 -->
    <nav
      style="margin-left: 220px; margin-top: 50px"
      class="bg-white shadow dark:bg-gray-800"
    >
      <!-- <div class="container px-10 py-3 mx-auto md:flex"> -->
      <div class="flex items-center justify-between">
        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-500
              dark:text-gray-200
              hover:text-gray-600
              dark:hover:text-gray-400
              focus:outline-none focus:text-gray-600
              dark:focus:text-gray-400
            "
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="w-full md:flex md:items-center md:justify-between">
        <div class="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
          <router-link
            to="/personal/deal/indent"
            
            class="
              px-2
              py-1
              text-sm
              font-medium
              text-gray-700
              transition-colors
              duration-200
              transform
              rounded
              dark:text-gray-200
              hover:bg-gray-900 hover:text-gray-100
              md:mx-2
            "
            >近三个月订单</router-link
          >
          <a
            
            class="
              px-2
              py-1
              text-sm
              font-medium
              text-gray-700
              transition-colors
              duration-200
              transform
              rounded
              dark:text-gray-200
              hover:bg-gray-900 hover:text-gray-100
              md:mx-2
            "
            >等待买家付款</a
          >
          <a
            
            class="
              px-2
              py-1
              text-sm
              font-medium
              text-gray-700
              transition-colors
              duration-200
              transform
              rounded
              dark:text-gray-200
              hover:bg-gray-900 hover:text-gray-100
              md:mx-2
            "
            >等待发货</a
          >
          <a
            
            class="
              px-2
              py-1
              text-sm
              font-medium
              text-gray-700
              transition-colors
              duration-200
              transform
              rounded
              dark:text-gray-200
              hover:bg-gray-900 hover:text-gray-100
              md:mx-2
            "
            >已发货</a
          >
          <a
            
            class="
              px-2
              py-1
              text-sm
              font-medium
              text-gray-700
              transition-colors
              duration-200
              transform
              rounded
              dark:text-gray-200
              hover:bg-gray-900 hover:text-gray-100
              md:mx-2
            "
            >退款中</a
          >
          <a
            
            class="
              px-2
              py-1
              text-sm
              font-medium
              text-gray-700
              transition-colors
              duration-200
              transform
              rounded
              dark:text-gray-200
              hover:bg-gray-900 hover:text-gray-100
              md:mx-2
            "
            >需要评价</a
          >
          <a
            
            class="
              px-2
              py-1
              text-sm
              font-medium
              text-gray-700
              transition-colors
              duration-200
              transform
              rounded
              dark:text-gray-200
              hover:bg-gray-900 hover:text-gray-100
              md:mx-2
            "
            >成功的订单</a
          >
          <a
            
            class="
              px-2
              py-1
              text-sm
              font-medium
              text-gray-700
              transition-colors
              duration-200
              transform
              rounded
              dark:text-gray-200
              hover:bg-gray-900 hover:text-gray-100
              md:mx-2
            "
            >关闭的订单</a
          >
          <a
            
            class="
              px-2
              py-1
              text-sm
              font-medium
              text-gray-700
              transition-colors
              duration-200
              transform
              rounded
              dark:text-gray-200
              hover:bg-gray-900 hover:text-gray-100
              md:mx-2
            "
            >三个月前订单</a
          >
        </div>
      </div>
      <!-- </div> -->
    </nav>

    <!--  -->
    <router-view></router-view>
  </div>
</template>
<script>

</script>
<style scoped>
</style>
