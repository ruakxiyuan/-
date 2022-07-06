
<template>
  <div>
        <div class="h-20">
      <nav
        id="header"
        class="w-full h-20 z-50 top-0 py-1 bg-white"
        style="position: fixed; border-bottom: 1px solid rgb(232, 232, 223)"
      >
        <div
          class="
            w-full
            container
            mx-auto
            flex flex-wrap
            items-center
            justify-between
            mt-0
            xl:px-36
            py-3
          "
        >
          <label for="menu-toggle" class="cursor-pointer md:hidden block ml-6">
            <svg
              class="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>关于</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input class="hidden" type="checkbox" id="menu-toggle" />

          <div
            class="
              hidden
              md:flex md:items-center md:w-auto
              w-full
              order-3
              md:order-1
            "
            id="menu"
          >
            <nav>
              <ul
                class="
                  md:flex
                  items-center
                  justify-between
                  text-base text-gray-700
                  pt-4
                  md:pt-0
                "
              >
                <!-- <li>
                  <a
                    class="
                      inline-block
                      no-underline
                      
                      bg-gray-700
                        xl:bg-white
                      xl:text-slate-600
                      text-white
                      md:bg-white
                      md:text-slate-600
                       w-20
                      py-2
                      px-4
                    "
                    >关于</a
                  >
                </li>
                <li>
                  <a
                    class="
                      inline-block
                      no-underline
                      bg-gray-700
                        xl:bg-white
                      xl:text-slate-600
                       lg:bg-white
                      text-white
                      md:bg-white
                      md:text-slate-600
                      w-20
                      py-2
                      px-4
                    "
                    >店铺</a
                  >
                </li> -->
                <li @click="seller">
                  <a
                    class="
                      inline-block
                      no-underline
                      bg-gray-700
                      xl:bg-white xl:text-slate-600
                      lg:bg-white
                      text-white
                      md:bg-white md:text-slate-600
                      w-28
                      cursor-pointer
                      py-2
                    
                    "
                    >卖家中心
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="order-1 md:order-2">
            <router-link
              class="
                flex
                items-center
                tracking-wide
                no-underline
                hover:no-underline
                font-bold
                text-gray-800 text-xl
              "
              to="/"
            >
              <svg
                class="fill-current text-gray-800 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"
                />
              </svg>
              淘宝呗
            </router-link>
          </div>

          <div class="order-2 md:order-3 flex items-center" id="nav-content">
            <div class="relative inline-block px-5">
              <!-- Dropdown toggle button -->
              <button
                type="button"
                aria-label="切换个人资料下拉菜单"
                class="flex items-center focus:outline-none"
                v-if="user1"
              >
                <div
                  class="
                    w-8
                    h-8
                    overflow-hidden
                    border-2 border-gray-400
                    rounded-full
                  "
                >
                  <img
                    @click="show = !show"
                    :src="user1.cust_img"
                    alt="头像"
                    class="object-cover w-full h-full"
                  />
                </div>
                <h3
                  class="
                    mx-2
                    text-sm
                    font-medium
                    text-gray-700
                    dark:text-gray-200
                    md:hidden
                  "
                >
                  <font style="vertical-align: inherit">
                    <font style="vertical-align: inherit">{{
                      user1.cust_account
                    }}</font>
                  </font>
                </h3>
              </button>
              <el-collapse-transition>
                <!-- Dropdown menu -->
                <div
                  v-show="show"
                  class="
                    cursor-pointer
                    absolute
                    right-0
                    z-20
                    w-56
                    py-2
                    mt-2
                    overflow-hidden
                    bg-white
                    rounded-md
                    shadow-xl
                    dark:bg-gray-800
                  "
                >
                  <a
                    class="
                      flex
                      items-center
                      p-3
                      -mt-2
                      text-sm text-gray-600
                      transition-colors
                      duration-200
                      transform
                      dark:text-gray-300
                      hover:bg-gray-100
                      dark:hover:bg-gray-700 dark:hover:text-white
                    "
                  >
                    <img
                      class="
                        flex-shrink-0
                        object-cover
                        mx-1
                        rounded-full
                        w-11
                        h-11
                      "
                      :src="user1.cust_img"
                      alt="jane avatar"
                    />
                    <div class="mx-1">
                      <h1
                        class="
                          text-sm
                          font-semibold
                          text-gray-700
                          dark:text-gray-200
                        "
                      >
                        {{ user1.cust_account }}
                      </h1>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        <svg
                          t="1651031939912"
                          class="icon inline-block"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="5584"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M705.74 604.873333a53.4 53.4 0 0 0-75.426667 0l-37.713333 37.713334c-21.333333 21.333333-90.413333 0.1-150.846667-60.34S360.046667 452.76 381.413333 431.4l0.046667-0.046667 37.666667-37.666666a53.4 53.4 0 0 0 0-75.426667l-165.94-165.933333a53.393333 53.393333 0 0 0-75.42 0l-37.713334 37.713333c-27.866667 27.866667-44.84 64.52-50.46 108.946667-5.213333 41.206667-0.406667 87.42 14.28 137.333333C133.333333 536.586667 199.773333 642 290.9 733.1S487.42 890.666667 587.653333 920.126667c36.926667 10.86 71.813333 16.32 104.146667 16.32a264.333333 264.333333 0 0 0 33.213333-2.04c44.426667-5.62 81.08-22.593333 108.946667-50.46l37.713333-37.713334a53.393333 53.393333 0 0 0 0-75.42z m135.76 211.193334l-37.706667 37.713333c-42.58 42.573333-115.06 51.6-204.1 25.413333-93.506667-27.5-192.453333-90.1-278.62-176.266666s-148.766667-185.113333-176.266666-278.62c-26.186667-89.033333-17.16-161.52 25.413333-204.1l37.713333-37.706667a10.666667 10.666667 0 0 1 15.086667 0l165.933333 165.933333a10.666667 10.666667 0 0 1 0 15.086667l-37.713333 37.706667C329.113333 423.333333 324.666667 458.82 338.766667 501.073333c12.426667 37.273333 38.286667 76.813333 72.813333 111.333334s74.073333 60.386667 111.333333 72.813333c16.213333 5.406667 31.42 8.08 45.26 8.08 22.233333 0 40.946667-6.913333 54.586667-20.553333l37.706667-37.713334a10.666667 10.666667 0 0 1 15.086666 0l165.933334 165.933334a10.666667 10.666667 0 0 1 0.013333 15.1z m83.226667-640.666667c-8.8-17.84-21.333333-33.8-37.246667-47.44C855.406667 100.473333 812.98 85.333333 768 85.333333s-87.406667 15.14-119.48 42.626667c-15.913333 13.64-28.446667 29.6-37.246667 47.44A132.833333 132.833333 0 0 0 597.333333 234.666667a135.093333 135.093333 0 0 0 19.46 69.38A152.84 152.84 0 0 0 646.933333 340c-9.486667 7.946667-21.953333 16.093333-38.666666 25.4A21.333333 21.333333 0 0 0 618.666667 405.333333c47.86 0 88.553333-8.2 118.393333-23.786666A196.346667 196.346667 0 0 0 768 384c44.98 0 87.406667-15.14 119.48-42.626667 15.913333-13.64 28.446667-29.6 37.246667-47.44a132.96 132.96 0 0 0 0-118.533333zM768 341.333333a152.566667 152.566667 0 0 1-30.4-3.046666 21.373333 21.373333 0 0 0-15.246667 2.62c-6.806667 4.086667-16.14 8.5-28.666666 12.273333q1.153333-1.42 2.24-2.86a21.333333 21.333333 0 0 0-5.52-30.886667C658.373333 299 640 268.1 640 234.666667c0-58.813333 57.42-106.666667 128-106.666667s128 47.853333 128 106.666667-57.42 106.666667-128 106.666666z"
                            fill="#5C5C66"
                            p-id="5585"
                          ></path></svg
                        >{{ user1.cust_phone }}
                      </p>
                    </div>
                  </a>

                  <hr class="border-gray-200 dark:border-gray-700" />

                  <router-link
                    to="/personalcenter/logistic"
                    class="
                      flex
                      items-center
                      p-3
                      text-sm text-gray-600
                      capitalize
                      transition-colors
                      duration-200
                      transform
                      dark:text-gray-300
                      hover:bg-gray-100
                      dark:hover:bg-gray-700 dark:hover:text-white
                    "
                  >
                    <svg
                      class="w-5 h-5 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span class="mx-1"> 个人中心 </span>
                  </router-link>

                  <a
                    class="
                      flex
                      items-center
                      p-3
                      text-sm text-gray-600
                      capitalize
                      transition-colors
                      duration-200
                      transform
                      dark:text-gray-300
                      hover:bg-gray-100
                      dark:hover:bg-gray-700 dark:hover:text-white
                    "
                  >
                    <svg
                      class="w-5 h-5 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.8199 22H10.1799C9.71003 22 9.30347 21.673 9.20292 21.214L8.79592 19.33C8.25297 19.0921 7.73814 18.7946 7.26092 18.443L5.42392 19.028C4.97592 19.1709 4.48891 18.9823 4.25392 18.575L2.42992 15.424C2.19751 15.0165 2.27758 14.5025 2.62292 14.185L4.04792 12.885C3.98312 12.2961 3.98312 11.7019 4.04792 11.113L2.62292 9.816C2.27707 9.49837 2.19697 8.98372 2.42992 8.576L4.24992 5.423C4.48491 5.0157 4.97192 4.82714 5.41992 4.97L7.25692 5.555C7.50098 5.37416 7.75505 5.20722 8.01792 5.055C8.27026 4.91269 8.52995 4.78385 8.79592 4.669L9.20392 2.787C9.30399 2.32797 9.71011 2.00049 10.1799 2H13.8199C14.2897 2.00049 14.6958 2.32797 14.7959 2.787L15.2079 4.67C15.4887 4.79352 15.7622 4.93308 16.0269 5.088C16.2739 5.23081 16.5126 5.38739 16.7419 5.557L18.5799 4.972C19.0276 4.82967 19.514 5.01816 19.7489 5.425L21.5689 8.578C21.8013 8.98548 21.7213 9.49951 21.3759 9.817L19.9509 11.117C20.0157 11.7059 20.0157 12.3001 19.9509 12.889L21.3759 14.189C21.7213 14.5065 21.8013 15.0205 21.5689 15.428L19.7489 18.581C19.514 18.9878 19.0276 19.1763 18.5799 19.034L16.7419 18.449C16.5093 18.6203 16.2677 18.7789 16.0179 18.924C15.7557 19.0759 15.4853 19.2131 15.2079 19.335L14.7959 21.214C14.6954 21.6726 14.2894 21.9996 13.8199 22ZM7.61992 16.229L8.43992 16.829C8.62477 16.9652 8.81743 17.0904 9.01692 17.204C9.20462 17.3127 9.39788 17.4115 9.59592 17.5L10.5289 17.909L10.9859 20H13.0159L13.4729 17.908L14.4059 17.499C14.8132 17.3194 15.1998 17.0961 15.5589 16.833L16.3799 16.233L18.4209 16.883L19.4359 15.125L17.8529 13.682L17.9649 12.67C18.0141 12.2274 18.0141 11.7806 17.9649 11.338L17.8529 10.326L19.4369 8.88L18.4209 7.121L16.3799 7.771L15.5589 7.171C15.1997 6.90671 14.8132 6.68175 14.4059 6.5L13.4729 6.091L13.0159 4H10.9859L10.5269 6.092L9.59592 6.5C9.39772 6.58704 9.20444 6.68486 9.01692 6.793C8.81866 6.90633 8.62701 7.03086 8.44292 7.166L7.62192 7.766L5.58192 7.116L4.56492 8.88L6.14792 10.321L6.03592 11.334C5.98672 11.7766 5.98672 12.2234 6.03592 12.666L6.14792 13.678L4.56492 15.121L5.57992 16.879L7.61992 16.229ZM11.9959 16C9.78678 16 7.99592 14.2091 7.99592 12C7.99592 9.79086 9.78678 8 11.9959 8C14.2051 8 15.9959 9.79086 15.9959 12C15.9932 14.208 14.2039 15.9972 11.9959 16ZM11.9959 10C10.9033 10.0011 10.0138 10.8788 9.99815 11.9713C9.98249 13.0638 10.8465 13.9667 11.9386 13.9991C13.0307 14.0315 13.9468 13.1815 13.9959 12.09V12.49V12C13.9959 10.8954 13.1005 10 11.9959 10Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span class="mx-1"> 设置 </span>
                  </a>

                  <hr class="border-gray-200 dark:border-gray-700" />

                  <a
                    @click="checkout"
                    class="
                      xl:hidden
                      items-center
                      p-3
                      text-sm text-gray-600
                      capitalize
                      transition-colors
                      duration-200
                      transform
                      dark:text-gray-300
                      hover:bg-gray-100
                      dark:hover:bg-gray-700 dark:hover:text-white
                      flex
                    "
                  >
                    <svg
                      class="fill-current hover:text-black cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      @click="car"
                    >
                      <path
                        d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"
                      />
                      <circle cx="10.5" cy="18.5" r="1.5" />
                      <circle cx="17.5" cy="18.5" r="1.5" />
                    </svg>

                    <span class="mx-1"> 我的购物车 </span>
                  </a>

                  <hr class="border-gray-200 dark:border-gray-700" />

                  <a
                    class="
                      flex
                      items-center
                      p-3
                      text-sm text-gray-600
                      capitalize
                      transition-colors
                      duration-200
                      transform
                      dark:text-gray-300
                      hover:bg-gray-100
                      dark:hover:bg-gray-700 dark:hover:text-white
                    "
                  >
                    <svg
                      class="w-5 h-5 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C6.47967 21.9939 2.00606 17.5203 2 12V11.8C2.10993 6.30452 6.63459 1.92794 12.1307 2.00087C17.6268 2.07379 22.0337 6.56887 21.9978 12.0653C21.9619 17.5618 17.4966 21.9989 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57928 16.4087 3.99999 11.992 3.99999C7.57528 3.99999 3.99421 7.57928 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM13 18H11V16H13V18ZM13 15H11C10.9684 13.6977 11.6461 12.4808 12.77 11.822C13.43 11.316 14 10.88 14 9.99999C14 8.89542 13.1046 7.99999 12 7.99999C10.8954 7.99999 10 8.89542 10 9.99999H8V9.90999C8.01608 8.48093 8.79333 7.16899 10.039 6.46839C11.2846 5.76778 12.8094 5.78493 14.039 6.51339C15.2685 7.24184 16.0161 8.57093 16 9.99999C15.9284 11.079 15.3497 12.0602 14.44 12.645C13.6177 13.1612 13.0847 14.0328 13 15Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span class="mx-1"> 帮助 </span>
                  </a>
                  <a
                    @click="SignOut"
                    class="
                      flex
                      items-center
                      p-3
                      text-sm text-gray-600
                      capitalize
                      transition-colors
                      duration-200
                      transform
                      dark:text-gray-300
                      hover:bg-gray-100
                      dark:hover:bg-gray-700 dark:hover:text-white
                    "
                  >
                    <svg
                      class="w-5 h-5 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span class="mx-1"> 退出 </span>
                  </a>
                </div>
              </el-collapse-transition>
            </div>
            <router-link
              v-if="!user1"
              class="inline-block no-underline hover:text-black pr-6 xl:pr-0"
              to="/login"
            >
              <svg
                class="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <circle fill="none" cx="12" cy="7" r="3" />
                <path
                  d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"
                />
              </svg>
            </router-link>

            <a
              class="
                pl-3
                no-underline
                hover:text-black
                relative
                hidden
                xl:inline-block
              "
              @click="drawer = true"
            >
              <svg
                class="fill-current hover:text-black cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                @click="car"
              >
                <path
                  d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"
                />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg>
              <span
                class="absolute text-sm"
                style="top: -1rem; right: -0.5rem; color: #dc9814"
                >{{ quantity }}</span
              >
            </a>
          </div>
        </div>
      </nav>
    </div>
    <el-drawer
       v-loading="loading"
      class="hidden xl:block"
      title="购物车"
      size="25%"
      :visible.sync="drawer"
      ref="navDrawer"
    >
      <div
      v-if="CarData[0] && num[0]"
        class="w-full text-white h-full px-6"
      >
        <div class="w-full overflow-x-hidden h-3/4">
          <div
            v-for="(item, i) in CarData"
            :key="item[0].goods_id"
            style="border-top: 1px solid gray"
            class="flex justify-between align-center w-full py-6"
          >
            <div class="h-32 w-24">
              <img class="w-full h-full" :src="item[0].goods_img" alt="" />
            </div>
            <div class="flex flex-col justify-center items-center">
              <p class="text-sm w-52 pt-7">{{ item[0].goods_name }}</p>
              <div class="w-24 flex items-center mt-7 justify-between">
                <svg
                  @click="
                    cutCart_count(
                      num[i].goods_id,
                      num[i].cart_count,
                      item[0].cust_id
                    )
                  "
                  t="1651057355328"
                  class="icon cursor-pointer"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="7745"
                  width="25"
                  height="25"
                >
                  <path
                    d="M735.208665 65.582671l-446.41733 446.417329 446.41733 446.417329z"
                    p-id="7746"
                    fill="#8a8a8a"
                  ></path>
                </svg>
                <span class="text-xl">{{ num[i].cart_count }}</span>
                <svg
                  @click="addCart_count(num[i].goods_id, num[i].cart_count)"
                  t="1651056975354"
                  class="icon cursor-pointer"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6460"
                  width="25"
                  height="25"
                >
                  <path
                    d="M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z"
                    p-id="6461"
                    fill="#8a8a8a"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              class="
                flex flex-col-reverse
                items-center
                justify-between
                w-12
                pr-8
              "
            >
              <p class="text-lg">
                ￥{{ (item[0].goods_discount * num[i].cart_count).toFixed(2) }}
              </p>
              <svg
                @click="delCar(num[i].goods_id, num[i].cust_id)"
                t="1651306477646"
                class="icon cursor-pointer z-10 mt-10"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2756"
                width="25"
                height="25"
              >
                <path
                  d="M912.526651 867.741144 555.540144 510.712681l356.986507-357.000833c11.171434-11.18576 11.171434-29.257348 0-40.443108-11.20111-11.18576-29.272697-11.18576-40.444131 0L515.096013 470.267527 158.096203 113.267716c-11.187807-11.159154-29.258371-11.159154-40.444131 0-11.186783 11.186783-11.186783 29.286 0 40.47176L474.623229 510.712681 117.623419 867.741144c-11.159154 11.172457-11.159154 29.216415 0 40.443108 11.18576 11.17348 29.284977 11.17348 40.47176 0l357.000833-357.027439 356.985484 357.027439c11.171434 11.17348 29.243021 11.17348 40.444131 0C923.698085 896.957559 923.725714 878.913601 912.526651 867.741144z"
                  p-id="2757"
                  fill="#8a8a8a"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div
          class="w-full"
          style="background: rgb(51, 51, 51); border-top: 1px solid gray"
        >
          <div class="flex justify-between my-8 text-base">
            <span>小计:</span>
            <span>￥{{ total.toFixed(2) }}</span>
          </div>
          <div
            @click="checkout"
            class="
              flex
              justify-center
              items-center
              w-full
              cursor-pointer
              px-6
              py-2
              text-white text-lg
            "
            style="border: 1px solid rgb(95, 95, 95)"
          >
            查看购物车
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      loading:true,
      user1: "",
      show: false,
      drawer: false,
      num: [],
      seller1: false,
      sel_id: localStorage.getItem("sel_id"),
    };
  },
  computed: {
    ...mapState("User", ["user"]),
    ...mapState("Car", ["CarData", "total", "quantity"]),
  },
  watch: {
    user() {
      localStorage.setItem("id", this.user.cust_id);
      axios({
        method: "get",
        url: "http://localhost:8080/api/iDgetUser",
        params: {
          id: localStorage.getItem("id"),
        },
      }).then((res) => {
        this.user1 = res.data[0];
      });
    },
  },
  methods: {
    seller() {
      console.log(1);
      this.seller1 = true;
      this.$router.push({
        name: "sellerlogin",
      });
    },
    checkout() {
      this.$router.push({
        path: "/checkout",
      });
      this.$refs.navDrawer.closeDrawer();
    },
    delCar(goods_id, cart_count1) {
      axios({
        method: "get",
        url: "http://localhost:8080/api/delCar",
        params: {
          goods_id,
          cart_count: cart_count1,
        },
      }).then(() => {
        this.car();
        this.getQuantity();
      });
    },
    ...mapMutations("Car", {
      getCarData: "getCarData",
      getTotal: "getTotal",
      getQuantity: "getQuantity",
    }),
    SignOut() {
      localStorage.removeItem("id");
      window.location.reload();
    },
    car() {

      axios({
        method: "get",
        url: "http://localhost:8080/api/getCar",
        params: {
          id: localStorage.getItem("id"),
        },
      }).then((res) => {
        this.num = res.data;
        this.getCarData()
        this.getQuantity()
        this.getTotal()
      });


    },
    cutCart_count(e, num1) {
      if (num1 >= 2) {
        axios({
          method: "get",
          url: "http://localhost:8080/api/cutCart_count",
          params: {
            id: e,
            cust_id: localStorage.getItem("id"),
          },
        }).then(() => {
          axios({
            method: "get",
            url: "http://localhost:8080/api/getCar",
            params: {
              id: localStorage.getItem("id"),
            },
          }).then((res) => {
            this.num = res.data;
            this.getTotal();
            this.getQuantity();
          });
        });
      }
    },
    addCart_count(e, num1) {
      axios({
        method: "get",
        url: "http://localhost:8080/api/addCart_count",
        params: {
          id: e,
          cust_id: localStorage.getItem("id"),
        },
      }).then(() => {
        axios({
          method: "get",
          url: "http://localhost:8080/api/getCar",
          params: {
            id: localStorage.getItem("id"),
          },
        }).then((res) => {
          this.num = res.data;
          this.getTotal();
          this.getQuantity();
        });
      });
    },
  },
  mounted() {


    axios({
      method: "get",
      url: "http://localhost:8080/api/sel_idgetSeller",
      params: {
        id: this.sel_id,
      },
    }).then((res) => {
    });

     axios({
        method: "get",
        url: "http://localhost:8080/api/getCar",
        params: {
          id: localStorage.getItem("id"),
        },
      }).then((res) => {
        this.num = res.data;
      });
      
      this.getQuantity();
    if (localStorage.getItem("id") != null) {
      axios({
        method: "get",
        url: "http://localhost:8080/api/iDgetUser",
        params: {
          id: localStorage.getItem("id"),
        },
      }).then((res) => {
        this.user1 = res.data[0];
      });
    }
  },
};
</script>

<style scoped>
.el-drawer.rtl {
  background: rgb(51, 51, 51);
}

::-webkit-scrollbar {
  display: none;
}

.yejiao1 {
  margin-left: -250px;
}
</style>