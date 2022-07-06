<template>
<div>
<Navigation/>
 <div
        class="w-full h-20 flex justify-center items-center border-b"
        v-if="seller[0]"
      >
        <div class="flex text-center justify-center items-center  cursor-pointer" @click="goSeller(seller[0].sel_id)">
          <!-- <img :src="seller[0].sel_img"  class=' w-24 h-16  pr-4'/> -->
          <svg t="1652414742451" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1939" width="40" height="40"><path d="M829.220317 124.424824l-7.074116-10.656711L211.680609 113.768113l-7.141654 9.141194C48.983109 321.498248 70.507332 442.416202 97.154225 496.860185c26.740014 54.537104 80.878029 89.831958 137.977491 89.831958l5.146207 0c72.043826-2.867304 119.953999-38.642089 145.190777-64.548108 22.793122 25.90602 65.699328 60.541865 132.855844 60.541865 70.02382 0 113.703645-37.70167 135.579885-63.877843 30.546713 24.907273 90.183975 65.721841 152.687518 65.721841 40.980343 0 76.085886-16.799618 104.681154-49.907667C1017.364371 411.082566 836.949348 136.066979 829.220317 124.424824zM874.641809 503.603773c-19.22383 22.49841-41.49916 33.236985-68.14503 33.236985-60.246129 0-122.821303-54.56064-136.7792-67.51979L669.717579 305.754682c0.023536-0.458441 0.258896-0.799202 0.258896-1.245364 0-13.252839-10.714016-23.967878-23.920806-23.967878-13.227256 0-23.919782 10.715039-23.919782 23.967878l-0.258896 0 0 177.851641c-13.063527 17.811668-46.172599 52.634778-103.552447 52.634778-64.784492 0-98.525967-44.292785-107.666138-58.367339l0-172.120103c0-13.252839-10.715039-23.967878-23.898293-23.967878-13.228279 0-23.943318 10.715039-23.943318 23.967878l0 171.250292c-11.725042 15.249309-52.070936 60.389392-124.465756 63.37233l-3.219321 0 0-0.047072c-31.933293 0-73.688279-19.585057-95.000678-63.232137-21.358447-43.540655-36.843116-141.948943 94.953605-314.397526l561.097208 0C845.996398 240.173035 940.480306 427.225221 874.641809 503.603773zM831.288418 613.83227c-13.277398 0-24.086581 10.761088-24.13263 24.037463l0 0.045025c0 0.048095 0 0.048095 0 0.095167 0 0 0 0.023536 0 0.059352l0 173.505659c0 26.693965-21.641903 48.312332-48.263214 48.312332L552.089555 859.887268c-0.022513 0-0.022513 0-0.046049 0L264.081049 859.887268c-26.623357 0-48.26526-21.618367-48.26526-48.312332l0-173.634596c-0.023536-13.323447-10.80816-24.108071-24.109094-24.108071-13.299911 0-24.084535 10.784624-24.131607 24.108071l0 178.452321c0 50.730405 41.026392 91.804892 91.664699 91.804892l504.492002 0c50.637284 0 91.662653-41.074487 91.662653-91.804892L855.394443 637.869732C855.325881 624.592334 844.562746 613.83227 831.288418 613.83227z" p-id="1940" fill="#2c2c2c"></path></svg>
          <span class="font-semibold text-3xl">{{
            seller[0].sel_store
          }}</span>
        </div>
      </div>
<div class="bg-white py-6 sm:py-8 lg:py-12 " >
  <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
    <div class="grid md:grid-cols-2 gap-8">
      <!-- images - start -->
      <div class="grid lg:grid-cols-5 gap-4">
        <div class="flex lg:flex-col order-last lg:order-none gap-4">
          <div class="bg-gray-100 rounded-lg overflow-hidden " v-for="(item, index) in imgs" :key="index">
            <img :src="item" @click="toggle(item)" class=" cursor-pointer w-full h-full"/>
         
          </div>
        </div>

        <div class="lg:col-span-4 bg-gray-100 rounded-lg overflow-hidden relative ">
          <img :src="imgs[0]" class=" w-screen h-full" ref="ss"/>

      

          <a  class="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 border text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 absolute right-4 top-4 px-3.5 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>
        </div>
      </div>
      <!-- images - end -->

      <!-- content - start -->
      <div class="md:py-8">
        <!-- name - start -->
        <div class="mb-2 md:mb-3">
          
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">{{data.goods_name}}</h2>
        </div>
        <!-- name - end -->

        <!-- rating - start -->
        <div class="flex items-center gap-3 mb-6 md:mb-10">
          <div class="h-7 flex items-center bg-indigo-500 text-white rounded-full gap-1 px-2">
            <span class="text-sm">4.2</span>

            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <span class="text-gray-500 text-sm transition duration-100">56 个评分</span>
        </div>
        <!-- rating - end -->

      
        <!-- color - end -->

        <!-- size - start -->
        <div class="mb-8 md:mb-10">
          <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">尺寸</span>

          <div class="flex flex-wrap gap-3" >
            <button v-for="item in size"    :style="{'background':item=='S'?'rgb(99 ,102 ,241)':'white'}"  id="size" :key="item.goods_id" type="button" class=" peer-checked:bg-black  w-12  h-8 flex justify-center items-center bg-white  active:bg-gray-200 text-gray-800 text-sm font-semibold hover:bg-indigo-500 text-center border rounded-md transition duration-100">
              
              {{item}}
              </button>
          </div>
        </div>
        <!-- size - end -->
<!-- bg-indigo-500 text-white border-indigo-500 -->
        <!-- price - start -->
        <div class="mb-4">
          <div class="flex items-end gap-2">
            <span class="text-gray-800 text-xl md:text-2xl font-bold">￥{{data.goods_discount}}</span>
            <span class="text-red-500 line-through mb-0.5">￥{{data.goods_price}}</span>
          </div>

          <span class="text-gray-500 text-sm">包括 增值税加运费</span>
        </div>
        <!-- price - end -->

        <!-- shipping notice - start -->
        <div class="flex  text-gray-500 gap-2 mb-2  flex-col">
        
            <el-input-number v-model="quantity"  :min="1" :max="10" label="描述文字"></el-input-number>

            <div class="flex text-justify my-2"> 
       <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              
                <span class="text-sm">2-4 天发货</span>
            </div>
         
        </div>
        <!-- shipping notice - end -->

        <!-- buttons - start -->
        <div class="flex gap-2.5">
          <a  class="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 cursor-pointer" @click='addCar'>添加到购物车</a>

          <a class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 cursor-pointer" @click='BuyItNow'>立即购买</a>
        </div>
        <!-- buttons - end -->
      </div>
      <!-- content - end -->
    </div>
  </div>
  <section>
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <h2 class="text-xl font-bold sm:text-2xl">顾客  评论</h2>

    <!-- <div class="flex items-center mt-4">
      <p class="text-3xl font-medium">
        3.8
        <span class="sr-only"> Average review score </span>
      </p>

      <div class="ml-4">
        <div class="flex -ml-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>

        <p class="mt-0.5 text-xs text-gray-500">Based on 48 reviews</p>
      </div>
    </div> -->

    <div class="grid grid-cols-1 mt-8 lg:grid-cols-2 gap-x-16 gap-y-12">
      <blockquote v-for="item,i in comment" :key='item.order_id'>
        <header class="sm:items-center sm:flex">
          <div class="flex -ml-1">
           <el-rate
            v-model="item.StoreReviews.split(',')[0]"
            disabled
            show-score
            text-color="white"
            >
          </el-rate>
          </div>

        </header>

        <p class="mt-2 text-gray-700">{{item.Comment}}</p>

        <footer class="mt-4 flex  items-center ">
          <img :src="user[i].cust_img"  class=" h-10 w-10 rounded-full mr-2" alt="">
          <p class="text-xs text-gray-500">{{user[i].cust_account}} - {{item.time}}</p>
        </footer>
      </blockquote>

      <!-- <blockquote>
        <header class="sm:items-center sm:flex">
          <div class="flex -ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <p class="mt-2 font-medium sm:ml-4 sm:mt-0">The best thing money can buy!</p>
        </header>

        <p class="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?</p>

        <footer class="mt-4">
          <p class="text-xs text-gray-500">John Doe - 12th January, 2024</p>
        </footer>
      </blockquote>

      <blockquote>
        <header class="sm:items-center sm:flex">
          <div class="flex -ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <p class="mt-2 font-medium sm:ml-4 sm:mt-0">The best thing money can buy!</p>
        </header>

        <p class="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?</p>

        <footer class="mt-4">
          <p class="text-xs text-gray-500">John Doe - 12th January, 2024</p>
        </footer>
      </blockquote>

      <blockquote>
        <header class="sm:items-center sm:flex">
          <div class="flex -ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <p class="mt-2 font-medium sm:ml-4 sm:mt-0">The best thing money can buy!</p>
        </header>

        <p class="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?</p>

        <footer class="mt-4">
          <p class="text-xs text-gray-500">John Doe - 12th January, 2024</p>
        </footer>
      </blockquote> -->
    </div>
  </div>
</section>
</div>
<Tail/>
</div>
  

</template>

<script> 

import axios from "axios"
import {mapMutations} from "vuex"
export default {
   components: {
     Tail:()=>import('../Universal/tail.vue'),
     Navigation:()=>import('../Universal/navigation.vue'),
    },
    data(){
        return{
          value:2,
            data:'',
            imgs:'',
            id:this.$route.query.id,
            id2:'',
            quantity:1,
            size:'',
            seller:[],
            comment:[],
            user:[]
        }
    },
    mounted(){
      axios({
           method: "get",
          url: "http://localhost:8080/api/goods_idGetcomment",
          params: {
            goods_id:this.$route.query.id,
          }
      }).then(res=>{
        this.comment=res.data
        console.log(res.data,'1');
        for(let i=0;i<res.data.length; i++){
            axios({
              method: "get",
              url: "http://localhost:8080/api/iDgetUser",
              params: {
                id:res.data[i].cust_id
              }
          }).then(res=>{
            this.user.push(res.data[0])
            console.log(this.user,'user');
          })
        }
        
        console.log(res.data,'goods');
      })
      axios({
        method: "get",
        url: "http://localhost:8080/api/goods_idGetSeller",
        params: {
          goods_id:this.$route.query.id,
        }
      }).then(res=>{
        console.log(res.data[0].sel_id,'sel_id');
        axios({
          method: "get",
          url: "http://localhost:8080/api/iDgetTab_seller",
          params: {
            sel_id:res.data[0].sel_id
          }
        }).then(res1=>{
          this.seller =res1.data
          console.log(res1.data[0].sel_store);
        })
      })
     
        axios({
            method: "get",
            url: "http://localhost:8080/api/Details",
            params: {
             id:this.id
            },
      }).then((res)=>{
          
          this.data=res.data[0]
          document.title=res.data[0].goods_name
          this.imgs=res.data[0].goods_img.split(',')
        
         
      })
        if(this.id2==''){
            this.id2=this.$route.query.id
        }
       axios({
         method: "get",
           url: "http://localhost:8080/api/getSize",
            params: {
             id:this.id
            },
       }).then((res)=>{
                this.size=res.data[0].goods_size.split(',')

       })

    },
    methods: { 
      goSeller(id){
         
      const { href } = this.$router.resolve({
        name: "StoreDetails",
        query: {
          id: id,
        },
      });
      window.open(href, "_blank");
    },
    
     BuyItNow(){
       sessionStorage.setItem('data',JSON.stringify(this.data))
        sessionStorage.setItem('quantity',this.quantity)
        this.$router.push({
          name:'now',
         
        })
      },
     ...mapMutations("Car",{getCarData:'getCarData',getQuantity:'getQuantity'}),
        toggle(src){
           this.$refs.ss.setAttribute('src',src)
        },
        addCar(){
          // console.log(`商品id${this.data.goods_id}数量${this.quantity}顾客id${this.data}`);
            // console.log(this.data,parseInt(localStorage.getItem('id')) );
           axios({
             url: 'http://localhost:8080/api/addCar',
             method: "get",
             params: {
               quantity:this.quantity,
               goods_id:this.data.goods_id,
               cart_count:this.quantity,
               cust_id:parseInt(localStorage.getItem('id')),
               sel_id:this.data.sel_id

             }
           }).then(()=>{
             this.getQuantity()
             this.getCarData(this.data.goods_id)
             
           })
           

        }
    }
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
				input[type=number]::-webkit-outer-spin-button {
				    -webkit-appearance: none;
				    margin: 0;
				}
</style>