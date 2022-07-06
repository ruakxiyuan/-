<template>
    <el-container class="home-container">
        <!--头部区域-->
        <el-header>
            <div>
                <img src="../assets/taobao.png" alt="">
                <span>电商后台管理系统</span>
            </div>
            <el-button type="warning" @click="logout">退出</el-button>
        </el-header>
        <!--页面主体区域-->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapes ? '64px' : '200px'">
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <!-- 侧边栏菜单区域 -->
                <el-menu
                        background-color="#333744"
                        text-color="#fff"
                        active-text-color="#409EFF"
                        :collapse="isCollapes"
                        unique-opened
                        :collapse-transition="false"
                        router>

                    <el-submenu index="3">
                        <!-- 一级菜单的模板区域 -->
                        <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-s-goods"></i>
                            <!-- 文本 -->
                            <span>商品管理</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item index="admincommodity">
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="el-icon-menu"></i>
                                <!-- 文本 -->
                                <span>商品信息</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <!-- 一级菜单的模板区域 -->
                        <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-s-order"></i>
                            <!-- 文本 -->
                            <span>订单管理</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item index="adminindent">
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="el-icon-menu"></i>
                                <!-- 文本 -->
                                <span>订单信息</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <!-- 一级菜单的模板区域 -->
                        <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-copy-document"></i>
                            <!-- 文本 -->
                            <span>权限管理</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item index="adminapply_for">
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="el-icon-menu"></i>
                                <!-- 文本 -->
                                <span>商品添加申请</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="adminseller">
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="el-icon-menu"></i>
                                <!-- 文本 -->
                                <span>卖家管理</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="adminbuyer">
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="el-icon-menu"></i>
                                <!-- 文本 -->
                                <span>顾客管理</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                    </el-menu>
            </el-aside>
            <!--右侧内容主体-->
            <el-main>
               <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "HoMe",
        data(){
            return{

                isCollapes:false

            }
        },

        methods:{
          // 退出事件，退出到登录页面
          logout(){
              window.sessionStorage.clear()
              this.$message.success('退出成功');
              this.$router.push('/adminlogin')
          },
          toggleCollapse(){
              this.isCollapes=!this.isCollapes
          }
        },

    }
</script>

<style lang="less" scoped>
    .home-container {
        height: 750px;
    }
    .el-header {
        background-color: wheat;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #fff;
        font-size: 20px;
        > div {
            display: flex;
            align-items: center;
            span {
                margin-left: 15px;
            }
        }
    }
    .el-aside {
        background-color: #333744;
        .el-menu{
            border-right:none ;
        }
    }
    el.main{
        background-color: #eaedf1;
    }
    .toggle-button {
        background-color: #4a5064;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }

</style>
