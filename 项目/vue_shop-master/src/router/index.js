import Vue from "vue";
import VueRouter from "vue-router";

import HoMe from '../components/HoMe';
import LoGin from "@/components/LoGin";
import UserS from "@/components/user/UserS";
import WelCome from "@/components/WelCome";
import OrDer from "@/components/order/OrDer";
import AdmRole from "@/components/admRole/AdmRole";
import SellEr from "@/components/admRole/SellEr";
import BuYer from "@/components/admRole/BuYer";
Vue.use(VueRouter);

const routes = [
  {path: '/adminlogin',component: LoGin},
    {
        path:'/adminhome',
        component:HoMe,
        children:[
            {path: '/adminwelcome',component: WelCome},
            {path:'/admincommodity',component:UserS},
            {path: '/adminindent',component: OrDer},
            {path: '/adminapply_for',component: AdmRole},
            {path: '/adminseller',component: SellEr},
            {path: '/adminbuyer',component: BuYer},


            ],
    },
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home.vue"),
    meta: { title: '淘宝呗~' },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/logins.vue"),
    meta: { title: '淘宝呗~' },
  },
  {
    path: "/sellerlogin",
    name: "sellerlogin",
    component: () => import("../pages/sellerLogin.vue"),
    meta: { title: '卖家登录' },
  },
  {
    path: "/Details",
    name: "Details",
    component: () => import("../pages/ProductDetails/commodity.vue"),
    meta: { title: '商品详情' },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../pages/ProductDetails/Car.vue"),
    meta: { isAuth: true, title: '淘宝呗~我的购物车' },

  },
  {
    path: "/now",
    name: "now",
    component: () => import("../pages/ProductDetails/BuyItNow.vue"),
    meta: { isAuth: true, title: '确认订单' },
  }, {
    path: "/cartBuyNow",
    name: "cartBuyNow",
    component: () => import("../pages/ProductDetails/cartBuyNow.vue"),
    meta: { isAuth: true, title: '确认订单' },
  },
  {
    path: "/personalcenter",
    name: "personalcenter",
    component: () => import("../pages/personalCenter.vue"),
    meta: { isAuth: true, title: '个人中心' },
    children: [
      {
        path: "logistic",
        component: () => import("../pages/personalCenter/Logistic.vue"),
        meta: { isAuth: true, title: '已买到的东西' },
        children: [
          {
            path: "finish",
            name: 'finish',
            component: () =>
              import("../pages/personalCenter/Logistic/Finish.vue"),
            meta: { isAuth: true, title: '我的订单' },
          },
          {
            path: "Comment",
            name: 'Comment',
            component: () =>
              import("../pages/personalCenter/Logistic/Comment.vue"),
            meta: { isAuth: true, title: '评论' },
           
              

         
          },
        ],

      },
     
      {
        path: "addr",
        name: 'addr',
        component: () => import("../pages/personalCenter/addr.vue"),
        meta: { isAuth: true, title: '我的地址' },
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('../pages/personalCenter/account.vue'),
        meta: { isAuth: true, title: '修改信息' },
      }
    ],
  },
   {
        path: '/writeComment',
        name: 'writeComment',
        component: () => 
          import('../pages/personalCenter/Logistic/Comment/write.vue'),
        meta: { isAuth: true, title: '订单评论' }
      },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../pages/Seller/personalcenter.vue'),
    meta: { title: '卖家中心' },
    children: [
      {
        path: 'deal',
        name: 'deal',
        component: () => import('../pages/Seller/deal.vue'),

        children: [
          {
            path: 'indent',
            name: 'indent',
            component: () => import('../pages/Seller/indent.vue'),

          }
        ]

      },
      {

        path: 'commodity',
        name: 'commodity',
        component: () => import('../pages/Seller/commodity.vue'),

      },
      {
        path: 'leaveword',
        name: 'leaveword',
        component: () => import('../pages/Seller/leaveword.vue'),

      },
      {
        path: 'homepage',
        name: 'homepage',
        component: () => import('../pages/Seller/homepage.vue'),

      }


    ],





  },
  {
    path: '/searchSeller',
    name: 'searchSeller',
    component: () => import('../pages/UserSeller/SearchSeller.vue'),
    meta: { title: '淘宝呗搜索' },
  },
  {
    path: '/StoreDetails',
    name: 'StoreDetails',
    component: () => import('../pages/UserSeller/StoreDetails.vue'),
    meta: { title: '店铺' },

  }
];


const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {

  if (to.meta.isAuth) {
    if (localStorage.getItem('id') != null) {
      next();
    } else {
      window.location.href = 'http://localhost:8080/#/login'
    }
  } else {
    next();
  }
})
router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router;
