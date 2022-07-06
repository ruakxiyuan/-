<template>
<div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/adminhome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>订单管理</el-breadcrumb-item>
        <el-breadcrumb-item>订单信息</el-breadcrumb-item>
    </el-breadcrumb>
        <!-- 订单列表数据 -->
        <el-table :data="userlist2" :visble.sync="addDialogVisible" border ref="addFormRef" >
            <el-table-column label="订单id" prop="order_id"></el-table-column>
            <el-table-column label="下单时间" prop="order_time"></el-table-column>
            <el-table-column label="下单金额" prop="order_sum"></el-table-column>
            <el-table-column label="签收时间" prop="order_done"></el-table-column>
            <el-table-column label="顾客id" prop="cust_id"></el-table-column>
            <el-table-column label="店铺id" prop="sel_id"></el-table-column>
            <el-table-column label="地址id" prop="addr_id"></el-table-column>
            <el-table-column label="操作" >
                <template slot-scope="scope">
                    <!-- 修改按钮 -->
                    <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.order_id)"></el-button>
                    <!-- 删除按钮 -->
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeUserById(scope.row.order_id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页区域-->
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="2"
                layout="total, prev, pager, next"
                :total="total">
        </el-pagination>

    </el-card>
</div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "OrDer",
        data(){
            return{
                currentPage:1,
                tableData2:[],
                total: 0,
                userlist2:[],
                queryInfo: {
                    query: '',

                },
                addForm: {
                    order_id: '',
                    order_time: '',
                    order_sum: '',
                    order_done: '',
                    cust_id: '',
                    sel_id: '',
                    addr_id:''
                },
                addDialogVisible: false,
            }
        },
        mounted() {
            axios.get('http://localhost:8080/api/OrDer_form').then((res)=>{
                console.log('请求成功',res.data)
                this.total=res.data.length
                this.tableData2=res.data
                this.userlist2=this.tableData2.splice(0,2)

            },(error)=>{
                console.log('请求失败')
            })
        },
        methods: {
            handleSizeChange (newSize) {
                console.log(newSize)
            },
            handleCurrentChange(newPage) {
                this.currentPage=newPage
                axios.get('http://localhost:8080/api/OrDer_byPagenum?currentPage='+newPage).then((res)=>{
                    console.log('请求成功',res)
                    this.userlist2=res.data;
                    console.log(this.userlist2)
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
                        url:'http://localhost:8080/api/OrDer_delete',
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
