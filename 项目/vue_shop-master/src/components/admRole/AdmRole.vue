<template>
        <div>
            <!-- 面包屑导航区域 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/adminhome' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>权限管理</el-breadcrumb-item>
                <el-breadcrumb-item>商品分类添加申请</el-breadcrumb-item>
            </el-breadcrumb>
            <el-card>
                <el-table :data="cateDetail" border stripe>
                    <el-table-column label="权限id"  prop="apply_id"></el-table-column>
                    <el-table-column label="申请内容"  prop="apply_content"></el-table-column>
                    <el-table-column label="申请时间" prop="apply_time"></el-table-column>
                    <el-table-column label="商品分类id" prop="category_id"></el-table-column>
                    <el-table-column label="店铺id" prop="sel_id"></el-table-column>
                    <el-table-column label="操作" >
                        <template slot-scope="scope">
                            <!-- 允许按钮 -->
                            <el-button type="primary"  size="mini" @click="">允许</el-button>
                            <!-- 不允许按钮 -->
                            <el-button type="danger"  size="mini" @click="">不允许</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
            <!-- 分页区域-->
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="8"
                    layout="total, prev, pager, next"
                    :total="total">
            </el-pagination>
        </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "AdmRole",
        data(){
            return{
                cateDetail:[],
                userlist4:[],
                currentPage:1,
                total: 0,
            }
        },
        mounted() {
            axios.get('http://localhost:8080/api/apply_for').then((res)=>{
                console.log('请求成功',res.data)
                this.cateDetail=res.data
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
        }
    }
</script>

<style scoped>

</style>
