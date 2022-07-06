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
            若宝贝90天内无编辑、流量或出售的行为，系统将把宝贝作为滞销商品下架至<a
              href=""
              class="bg-blue-300"
              >滞销下架宝贝</a
            >。
          </p>
        </div>
      </div>
    </div>
    <!-- 导航菜单 -->
    <div style="margin-left: 250px">
      <el-tabs v-model="activeName">
        <el-tab-pane label="售货架" name="second">
          <!-- 渲染图片 -->
          <div>
            <div
              class="hover:shadow-lg"
              v-for="item in data"
              :key="item.goods_id"
              style="
                width: 350px;
                height: 350px;
                float: left;
                margin-bottom: 100px;
                margin-right: 60px;
                margin-top: 50px;
              "
            >
              <a
                type="checkbox"
                name="checkbox"
                id="checkbox"
                style="width: 350px; height: 350px"
                
                class="
                  group
                  h-80
                  block
                  bg-gray-100
                  rounded-lg
                  overflow-hidden
                  relative
                  mb-2
                  lg:mb-3
                "
              >
                <img
                  :src="item.goods_img"
                  style="width: 350px; height: 350px"
                />
              </a>

              <div>
                <a
                  
                  class="
                    text-gray-500
                    hover:gray-800
                    lg:text-lg
                    transition
                    duration-100
                    mb-1
                  "
                  >{{ item.goods_name }}</a
                >

                <div class="flex items-end gap-2">
                  <div>
                    <span style="color: red; font-size: 20px"
                      >￥{{item.goods_discount }}</span
                    >
                    <!-- <button >删除</button> -->
                    <el-row>
                      <el-button
                        style="margin-left: 290px"
                        @click="del(item.goods_id)"
                        type="danger"
                        icon="el-icon-delete"
                        circle
                      ></el-button>
                    </el-row>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 底部 -->
          <section
            style="padding-top: 100px; width: 100%"
            class="
              grid grid-cols-1
              gap-20
              px-4
              py-24
              mx-auto
              max-w-7xl
              lg:px-16
              xl:px-24
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-12 h-12 mb-4 text-purple-700"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h3 class="mb-3 text-lg font-medium leading-tight text-gray-900">
                Unify your payments stack
              </h3>
              <p class="text-base leading-relaxed text-gray-600">
                Manage all your online and offline sales in one place with a
                single integration, simplifying reporting and reconciliation.
                Terminal works seamlessly with Payments, Connect, and Billing.
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-12 h-12 mb-4 text-purple-700"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
              <h3 class="mb-3 text-lg font-medium leading-tight text-gray-900">
                Own your in-store experience
              </h3>
              <p class="text-base leading-relaxed text-gray-600">
                Provide a seamless customer experience across channels, like
                reserving online and picking up in store. Our SDKs make it easy
                to integrate into your own mobile and web applications to accept
                in-store payments.
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-12 h-12 mb-4 text-purple-700"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                />
              </svg>
              <h3 class="mb-3 text-lg font-medium leading-tight text-gray-900">
                Grow your platform’s revenue
              </h3>
              <p class="text-base leading-relaxed text-gray-600">
                Add in-person payments to your platform or marketplace. Using
                Terminal with Connect, you can onboard users for online and
                in-person payments, and unify their payouts across channels.
              </p>
            </div>
          </section>
        </el-tab-pane>
        <!-- 商品上架表单 -->
        <el-tab-pane label="新品上架" name="one">
          <!--  -->
          <el-form
            :model="ruleForm2"
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="上传图片" prop="img">
              <el-input v-model="ruleForm2.img"></el-input>
            </el-form-item>
            <el-form-item label="新品名称" prop="name">
              <el-input v-model="ruleForm2.name"></el-input>
            </el-form-item>
            <el-form-item label="新品类型" prop="region">
              <el-select
                v-model="ruleForm2.region"
                placeholder="请选择新品类型"
              >
                <el-option label="男装" value="shanghai"></el-option>
                <el-option label="女装" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="尺码" prop="resource">
              <el-radio-group v-model="ruleForm2.resource">
                <el-radio label="S"></el-radio>
                <el-radio label="M"></el-radio>
                <el-radio label="L"></el-radio>
                <el-radio label="XL"></el-radio>
                <el-radio label="2XL"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="新品价格" prop="jg">
              <el-input
                style="width: 100px"
                v-model.number="ruleForm2.jg"
              ></el-input>
              $
            </el-form-item>
            <el-form-item label="会员优惠折" prop="yhz">
              <el-input
                style="width: 100px"
                v-model.number="ruleForm2.yhz"
              ></el-input>
              折
            </el-form-item>
            <el-form-item label="商品分类id" prop="flid">
              <el-input
                style="width: 100px"
                v-model.number="ruleForm2.flid"
              ></el-input>
              $
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')"
                >立即上架</el-button
              >
              <el-button @click="resetForm2('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="增加售货物类型" name="fourth"
          >确定商品类目
          <!-- 表单申请-->
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="商品名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="商品类型" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择商品类型">
                <el-option label="男装" value="shanghai"></el-option>
                <el-option label="女装" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="申请时间" required>
              <el-col :span="6">
                <el-form-item prop="date1">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="ruleForm.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="1">-</el-col>
              <el-col :span="6">
                <el-form-item prop="date2">
                  <el-time-picker
                    placeholder="选择时间"
                    v-model="ruleForm.date2"
                    style="width: 100%"
                  ></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>

            <el-form-item label="尺码" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="S"></el-radio>
                <el-radio label="M"></el-radio>
                <el-radio label="L"></el-radio>
                <el-radio label="XL"></el-radio>
                <el-radio label="2XL"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="商品价格" prop="amt">
              <el-input
                style="width: 100px"
                v-model.number="ruleForm.amt"
              ></el-input>
              $
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即申请</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <!--  -->
        </el-tab-pane>
      </el-tabs>

      <!--  -->
    </div>

    <!--  -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    this.getAll();

    //  console.log(this.ruleForm.img,this.ruleForm.name,this.ruleForm.region,this.ruleForm.date1,this.ruleForm.date2,this.ruleForm.resource,this.ruleForm.this.ruleForm.amt);
  },
  data() {
    return {
      activeName: "second",

      activeIndex: "1",
      activeIndex2: "1",
      data: "",
      // 表单申请
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        amt: null,
        img: "",
      },
      ruleForm2: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        amt: null,
        img: "",
        jg: 0,
        yhz: 0,
        flid: 100,
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          {
            min: 3,
            max: 30,
            message: "长度在 3 到 30 个字符",
            trigger: "blur",
          },
        ],
        img: [
          { required: true, message: "请输入商品图片地址", trigger: "blur" },
        ],
        amt: [
          {
            min: 10,
            max: 999999,
            type: "number",
            required: true,
            message: "请输入2到6位数字",
          },
        ],
        region: [
          { required: true, message: "请选择商品类型", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],

        resource: [
          { required: true, message: "请选择尺码", trigger: "change" },
        ],
      },
      rules2: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          {
            min: 3,
            max: 30,
            message: "长度在 3 到 30 个字符",
            trigger: "blur",
          },
        ],
        img: [
          { required: true, message: "请输入商品图片地址", trigger: "blur" },
        ],
        // amt:[
        //   {min:10,max:999999,type:'number',  required:true,message:'请输入2到6位数字'}
        // ],
        region: [
          { required: true, message: "请选择商品类型", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],

        resource: [
          { required: true, message: "请选择尺码", trigger: "change" },
        ],
        jg: [
          {
            min: 10,
            max: 999999,
            type: "number",
            required: true,
            message: "请输入2到6位数",
          },
        ],
        yhz: [
          {
            min: 1,
            max: 9,
            type: "number",
            required: true,
            message: "请输入1位数",
          },
        ],
        flid: [
          {
            min: 100,
            max: 999,
            type: "number",
            required: true,
            message: "请输入3位数",
          },
        ],
      },
    };
  },
  methods: {
    getAll() {
      axios({
        method: "get",
        url: "http://localhost:8080/api/sel_idGetTab_goods",
        params: {
          sel_id: localStorage.getItem("sel_id"),
        },
      }).then((res) => {
        this.data=res.data
        console.log(res);
      });
      // 删除
    },
    del(id) {
      console.log(id);
      this.$confirm("此操作将下架该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log('ok',id);
          axios({
            method: "get",
            url: "http://localhost:8080/api/delTab_goods",
            params: {
              id,
            },
          }).then((res) => {
            this.getAll();
          });
          this.$message({
            type: "success",
            message: "下架成功!",
          });
          
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消下架",
          });
        });
    },
    // 上架

    handleClick(tab, event) {
      console.log(tab, event);
    },

    // 表单申请
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('成功提交申请!');
          this.$message({
            message: "提交申请成功",
            type: "success",
          });
        } else {
          console.log("提交申请失败!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    resetForm2(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
</style>
