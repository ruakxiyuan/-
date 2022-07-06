<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/adminhome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品分类</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图区域 -->
        <el-card>
            <!-- 搜索与添加区域 -->
            <el-row :gutter="20">
                <el-col :span="8">
                <el-input placeholder="请输入内容"  v-model="query" clearable @click="getSearch(query)">
                    <el-button slot="append" icon="el-icon-search" @click="getSearch(query)"></el-button>
                </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="addDialogVisible = true">添加商品</el-button>
                </el-col>
            </el-row>

            <!-- 用户列表区域 -->
            <el-table :data="userlist1" border stripe >
                <el-table-column label="商品id"  prop="goods_id"></el-table-column>
                <el-table-column label="商品名称"  prop="goods_name"></el-table-column>
                <el-table-column label="商品价格" prop="goods_price"></el-table-column>
                <el-table-column label="商品图片" prop="goods_img">
                    <template slot-scope="scope">
                        <el-avatar :src="scope.row.goods_img"></el-avatar>
                    </template>
                </el-table-column>
                <el-table-column label="会员优惠折" prop="goods_discount"></el-table-column>
                <el-table-column label="店铺id" prop="sel_id"></el-table-column>
                <el-table-column label="商品分类详情id" prop="cateDetail_id"></el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                    <!-- 修改按钮 -->
                    <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.goods_id)"></el-button>
                    <!-- 删除按钮 -->
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeUserById(scope.row.goods_id)"></el-button>
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
        <!-- 添加商品的对话框 -->
        <el-dialog
                title="添加商品"
                :visible.sync="addDialogVisible"
                width="50%"
                @close="addDialogClosed">
            <!-- 内容主体区域 -->
            <el-form  label-width="120px" :rules="addFormRules" :model="addForm"  ref="addFormRef">
                <el-form-item label="商品名称" prop="goods_name">
                    <el-input v-model="addForm.goods_name"></el-input>
                </el-form-item>
                <el-form-item label="商品价格" prop="goods_price">
                    <el-input v-model="addForm.goods_price"></el-input>
                </el-form-item>
                <el-form-item label="商品图片" prop="goods_img">
                    <el-input v-model="addForm.goods_img"></el-input>
                </el-form-item>
                <el-form-item label="会员优惠折" prop="goods_discount">
                    <el-input v-model="addForm.goods_discount"></el-input>
                </el-form-item>
                <el-form-item label="店铺id" prop="sel_id">
                    <el-input v-model="addForm.sel_id"></el-input>
                </el-form-item>
                <el-form-item label="商品分类详情id" prop="cateDetail_id">
                    <el-input v-model="addForm.cateDetail_id"></el-input>
                </el-form-item>
            </el-form>
            <!-- 底部区域 -->
            <span slot="footer" class="dialog-footer">
                    <el-button @click="addDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addUser">确 定</el-button>
                </span>
        </el-dialog>
        <!-- 修改用户的对话框 -->
        <el-dialog
                title="修改用户信息"
                :visible.sync="editDialogVisible"
                width="50%">
<!--            -->
            <el-form :model="editForm"  label-width="120px"  ref="editFormRef">
                <el-form-item label="商品id">
                    <el-input v-model="editForm.goods_id"></el-input>
                </el-form-item>
                <el-form-item label="商品名称">
                    <el-input v-model="editForm.goods_name"></el-input>
                </el-form-item>
                <el-form-item label="商品价格">
                    <el-input v-model="editForm.goods_price"></el-input>
                </el-form-item>
                <el-form-item label="会员优惠折" >
                    <el-input v-model="editForm.goods_discount"></el-input>
                </el-form-item>
                <el-form-item label="店铺id">
                    <el-input v-model="editForm.sel_id"></el-input>
                </el-form-item>
                <el-form-item label="商品分类详情id" >
                    <el-input v-model="editForm.cateDetail_id"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="editDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "UserS",
        data(){

            return{
                //页码
                currentPage: 1,
                //获取用户列表的参数对象
                query: '',
                addForm: {
                    goods_name: '',
                    goods_price: '',
                    goods_img:'',
                    goods_discount: '',
                    sel_id: '',
                    cateDetail_id: '',

                },
                //添加表单的验证规则对象
                addFormRules:{
                    goods_name:[
                        {required:true,message:'请输入商品名字',trigger:'blur'},
                    ],
                    goods_price: [
                        {required:true,message:'请输入商品价格',trigger:'blur'},
                    ],
                    goods_img: [
                        {required:true,message:'请输入图片信息',trigger:'blur'},
                    ],
                    goods_discount: [
                        {required:true,message:'请输入商品优惠价格',trigger:'blur'},
                    ],
                    sel_id: [
                        {required:true,message:'请输入店铺id',trigger:'blur'},
                    ],
                    cateDetail_id: [
                        {required:true,message:'请输入店铺详情id',trigger:'blur'},
                    ]
                },
                userlist:[],
                tabete:[],
                userlist1:[],
                total: 0,
                editForm:[],
                // 控制添加用户对话框的显示与隐藏
                addDialogVisible: false,
                // 控制修改用户对话框的显示与隐藏
                editDialogVisible: false,
                // 查询到的用户信息对象

            }
        },
        created() {
            this.getList()
        },
        methods: {
            //获取商品信息
            getList(){
                axios.get('http://localhost:8080/api/merchandise_news').then((res)=>{
                    this.total=res.data.length
                    this.userlist=res.data
                    this.userlist1=this.userlist.splice(0,8)
                    console.log('请求成功',res.data)
                },(error)=>{
                    console.log('请求失败',error)
                })
            },
            handleSizeChange (newSize) {
                console.log(newSize)
            },
            //分页
            handleCurrentChange(newPage) {
                this.currentPage=newPage
                axios.get('http://localhost:8080/api/Goods_paging?currentPage='+newPage).then((res)=>{
                    this.userlist1=res.data;
                    console.log(this.userlist1)
                }),(error)=>{
                    console.log('请求失败',error)
                }
            },
            // 监听添加用户对话框的关闭事件
            addDialogClosed() {
                this.$refs.addFormRef.resetFields()
            },
            // 点击按钮，添加新用户
            addUser() {
                    this.$refs.addFormRef.validate(valid=>{
                       if(!valid) return
                        console.log(this.addForm)

                        // 可以发起添加用户的网络请求
                        axios('http://localhost:8080/api/Add_the_goods',{
                            method: 'post',
                            params:{
                                goods_name:this.addForm.goods_name,
                                goods_price:this.addForm.goods_price,
                                goods_img:this.addForm.goods_img,
                                goods_discount:this.addForm.goods_discount,
                                sel_id:this.addForm.sel_id,
                                cateDetail_id:this.addForm.cateDetail_id
                            }
                        }).then((res) => {
                            console.log(res.data)
                            if (res.status !== 200) {
                                this.$message.error('添加用户失败！')
                            }
                            this.$message.success('添加用户成功！')
                            // 隐藏添加用户的对话框
                            this.addDialogVisible = false
                            // 重新获取用户列表数据
                            this.getList()
                        }, (error) => {
                            console.log('请求失败', error)
                        })
                    })
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
                        url:'http://localhost:8080/api/Delete_the_goods',
                        params:{
                            id
                        }
                    })
                    this.getList()
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消下架'
                    });
                });
            },
            // 展示编辑用户的对话框
            showEditDialog(id){
                console.log(id)
                axios('http://localhost:8080/api/Modify_the_goods',{
                    method: 'get',
                    params:{
                        id,
                    }
                }).then((res)=>{
                    console.log('请求成功')
                    console.log(res.data[id])
                    this.editDialogVisible=true
                    this.editForm=res.data[id];
                    if (res.status !== 200 ){
                        this.$message.error('查询用户失败！')
                    }else {
                        this.$message.success('查询用户成功！')
                    }
                    // 隐藏添加用户的对话框
                    this.addDialogVisible = false
                },(error)=>{
                    console.log('请求失败',error)
                })
            },
            //搜索按钮
            getSearch(query){
                console.log(query)
                axios.get('http://localhost:8080/api/goods?query='+query).then((res)=>{
                    console.log(res)
                    this.userlist1=res.data
                },(error)=>{
                    console.log('请求失败',error)
                })
            }
     },
    }
</script>

<style lang="less" scoped>

</style>
