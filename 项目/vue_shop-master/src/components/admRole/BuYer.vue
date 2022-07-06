<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/adminhome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>买家管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-table :data="userlist5"   border stripe>
                <el-table-column label="顾客id"  prop="cust_id"></el-table-column>
                <el-table-column label="顾客账号"  prop="cust_account"></el-table-column>
                <el-table-column label="顾客密码" prop="cust_pwd"></el-table-column>
                <el-table-column label="顾客号码" prop="cust_phone"></el-table-column>
                <el-table-column label="顾客余额" prop="cust_balance"></el-table-column>
                <el-table-column label="顾客头像" prop="cust_img" >
                    <template slot-scope="scope">
                        <el-avatar :src="scope.row.cust_img"></el-avatar>
                    </template>
                </el-table-column>
                <el-table-column label="顾客积分" prop="cust_integral"></el-table-column>
                <el-table-column label="VIP" prop="cust_vip">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.cust_vip === 0 ">普通顾客</el-tag>
                        <el-tag type="warning" v-else>VIP顾客</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <!-- 修改按钮 -->
                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.cust_id)"></el-button>
                        <!-- 删除按钮 -->
                        <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeUserById(scope.row.cust_id)"></el-button>
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
        name: "BuYer",
        data(){
            return{
                buyer:[],
                userlist5:[],
                currentPage:1,
                total: 0,
            }
        },
        mounted() {
            axios.get('http://localhost:8080/api/buyer').then((res)=>{
                console.log('请求成功',res.data)
                this.buyer=res.data
                this.total=res.data.length
                this.userlist5=this.buyer.splice(0,8)
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
                axios.get('http://localhost:8080/api/byPagenum5?currentPage='+newPage).then((res)=>{
                    console.log('请求成功',res)
                    this.userlist5=res.data;
                    console.log(this.userlist5)
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
                        url:'http://localhost:8080/api/buyer_delete',
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
