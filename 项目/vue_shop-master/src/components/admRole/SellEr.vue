<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/adminhome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>卖家管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-table :data="userlist3"   border stripe>
                <el-table-column label="店铺id"  prop="sel_id"></el-table-column>
                <el-table-column label="卖家账号"  prop="sel_account"></el-table-column>
                <el-table-column label="卖家密码" prop="sel_pwd"></el-table-column>
                <el-table-column label="店铺名字" prop="sel_store"></el-table-column>
                <el-table-column label="店铺简历" prop="sel_info"></el-table-column>
                <el-table-column label="店铺logo" prop="sel_img">
                    <template slot-scope="scope">
                        <el-avatar :src="scope.row.sel_img"></el-avatar>
                    </template>
                </el-table-column>
                <el-table-column label="店铺详情" prop="sel_local"></el-table-column>
                <el-table-column label="店铺号码" prop="sel_phone"></el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <!-- 修改按钮 -->
                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.sel_id)"></el-button>
                        <!-- 删除按钮 -->
                        <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeUserById(scope.row.sel_id)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页区域-->
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="8"
                    layout="total, prev, pager, next"
                    :total="total">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "SellEr",
        data(){
            return{
                seller:[],
                userlist3:[],
                currentPage:1,
                total: 0,

            }
        },
        mounted() {
            axios.get('http://localhost:8080/api/seller').then((res)=>{
                console.log('请求成功',res.data)
                this.total=res.data.length
                this.seller=res.data
                this.userlist3=this.seller.splice(0,8)
            },(error)=>{
                console.log('请求失败')
            })
        },
        methods:{
            handleSizeChange (newSize) {
                console.log(newSize)
            },
            handleCurrentChange(newPage) {
                this.currentPage=newPage
                axios.get('http://localhost:8080/api/seller_byPagenum?currentPage='+newPage).then((res)=>{
                    console.log('请求成功',res)
                    this.userlist3=res.data;
                    console.log(this.userlist3)
                }),(error)=>{
                    console.log('请求失败',error)
                }
                console.log(newPage)
            },
            removeUserById(id){
                this.$confirm('此操作将下架该商品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.$message({
                        type: 'success',
                        message: '下架成功!',
                    });
                    axios({
                        method:'get',
                        url:'http://localhost:8080/api/seller_delete',
                        params:{
                            id
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消下架'
                    });
                });
            },
        }
    }
</script>

<style scoped>

</style>
