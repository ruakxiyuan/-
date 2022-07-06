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
          <p class="text-sm text-gray-600 dark:text-gray-200">
            [重要]手机评价管理全新上线，随时随地轻松管理评价！支持批量评价、回复、投诉等功能,<a
              href=""
              style='color:lightblue'
              >查看详情</a
            >。
          </p>
        </div>
      </div>
    </div>
    <!-- 导航菜单 -->
    <div style="margin-left: 250px;margin-top:50px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="来自买家的评价" name="first"></el-tab-pane>         
        <el-tab-pane label="待卖家评价" name="second"> </el-tab-pane>
        <el-tab-pane label="待买家评价" name="third"> </el-tab-pane>
        <el-tab-pane label="给买家的评价" name="fourth"></el-tab-pane>
          <!--  -->
          
      </el-tabs>
      
     
    </div>

  </div>
</template>
<script>
</script>
<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
 
}
</style>
