const express = require('express');
const app = express();
var mysql = require("mysql");
var config = require('./mysql_config');
const session = require('express-session');

const alipaySdk = require('./db/alipayUtil');
const AlipayFormData = require('alipay-sdk/lib/form').default;
const { default: axios } = require('axios');
app.use(session({
    // secret ：是否要加密，签名
    secret: 'keyboard cat',
    // resave ： seesion没有改变强制保存
    resave: false,
    // saveUninitialized ：session没有初始化强制保存
    saveUninitialized: true,
    // 这个cookie说要返回到浏览器里面的令牌
    // cookie中的属性，看之前的写法
    cookie: {
        // secure ： 只能https协议中使用，一定要改为false
        secure: false,
        maxAge: 1000 * 60 * 30
    }
    ,
    // 你只要一操作（请求操作），我就讲session的生命周期重置成指定的事件
    rolling: true
}))
var pool = mysql.createPool(config)

app.get('/register',(req,res)=>{
    console.log('dologin')
    pool.getConnection( (error,connection) =>{
        if(error){
            console.log('失败')
            return;
        }
        let sql=`SELECT * FROM  tab_adm where adm_account= ? and adm_pwd = ?`;
        connection.query(sql,[req.query.adm_account,req.query.adm_pwd], (error,results,files) =>{
            // console.log(results.length)
            res.send(results)
        })
        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//商品信息
app.get('/merchandise_news',(req,res)=>{
    console.log(req.query)
    pool.getConnection( (error,connection) =>{
        if(error){
            console.log('失败')
            return;
        }
        let sql=`SELECT * FROM tab_goods `;
        connection.query(sql,null, (error,results,files) =>{
            // console.log(results)
            res.send(results)

        })
        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})
//商品分页
app.get('/Goods_paging', (req,res) =>{
    // 获取页码
    let start=(req.query.currentPage-1)*8;
    let num = req.query.currentPage*8
    console.log(start,num,'123456')

    pool.getConnection( (error,connection) => {
        if (error) {
            console.log('失败')
            return;
        }
        // 获取前8条的数据，并将数据其返回
        let sql = `SELECT * FROM tab_goods limit ?,8`;
        //  执行sql查询
        connection.query(sql, [start], (error, results, files) => {
            res.send(results)
            console.log(results.length)
        })
        connection.release();
    })
})
//商品添加
app.post('/Add_the_goods',(req,res)=>{
    console.log(req.query,'66666')
    pool.getConnection( (error,connection) =>{
        if(error){
            console.log('失败')
            return;
        }
        let sql=`INSERT INTO tab_goods(?)  values(?) `;
        connection.query(sql,(req.query,req.query.addForm),(error,results,files) =>{
            console.log(results)
            res.send(results)
        })
        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})
//商品删除
app.get('/Delete_the_goods',(req,res)=>{
    console.log(req.query.id,'sssss')
    pool.getConnection(function(error,connection){
        if(error){
            return;
        }
        const sql=`delete from tab_goods where goods_id=? `
        connection.query(sql,[parseInt(req.query.id) ],function(error,results,files){
            console.log(error)
            res.send(results)
        })
        connection.release();
    })
})
//商品修改
app.get('/Modify_the_goods',(req,res)=>{
    console.log(req.query.id,'sssss')
    pool.getConnection(function(error,connection){
        if(error){
            return;
        }
        const sql=`SELECT * FROM tab_goods `
        connection.query(sql,[parseInt(req.query.id) ],function(error,results,files){
            console.log(error)
            res.send(results)
        })
        connection.release();
    })
})
//商品搜索
app.get('/goods', (req, res) =>{
    console.log(req.query)
    pool.getConnection( (error,connection) => {
        if (error) {
            console.log('失败')
            return;
        }
        let sql = `SELECT * FROM tab_goods where  locate(?,goods_name)`;
        connection.query(sql,[req.query.query], (error, results, files) => {
            console.log(error)
            res.send(results)
        })
        connection.release();
    })
})
//订单信息
app.get('/OrDer_form',(req,res)=>{
    console.log(req.query)
    pool.getConnection( (error,connection) =>{
        if(error){
            console.log('失败')
            return;
        }
        let sql=`SELECT * FROM tab_order`;
        connection.query(sql,null, (error,results,files) =>{
            // console.log(results)
            res.send(results)
        })
        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})
//订单分页
app.get('/OrDer_byPagenum', (req,res) =>{
    // 获取页码
    let start2=(req.query.currentPage-1)*2;
    let num2 = req.query.currentPage*2
    console.log(start2,num2,'123456')

    pool.getConnection( (error,connection) => {
        if (error) {
            console.log('失败')
            return;
        }
        // 获取前8条的数据，并将数据其返回
        let sql = `SELECT * FROM tab_order limit ?,2`;
        //  执行sql查询
        connection.query(sql, [start2], (error, results, files) => {
            res.send(results)
            console.log(results.length)
        })
        connection.release();
    })
})

app.get('/OrDer_delete',(req,res)=>{
    console.log(req.query.id,'sssss')
    pool.getConnection(function(error,connection){
        if(error){
            return;
        }
        const sql=`delete from tab_order where order_id=?`
        connection.query(sql,[parseInt(req.query.id) ],function(error,results,files){
            console.log(error)
            res.send(results)
        })
        connection.release();
    })
})

//商品申请
app.get('/apply_for',(req,res)=>{
    console.log(req.query)
    pool.getConnection( (error,connection) =>{
        if(error){
            console.log('失败')
            return;
        }
        let sql=`SELECT * FROM tab_catedetail_apply `;
        connection.query(sql,null, (error,results,files) =>{
            console.log(results)
            res.send(results)

        })
        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//商品申请分页
app.get('/apply_byPagenum', (req,res) =>{
    // 获取页码
    let start4=(req.query.currentPage-1)*8;
    let num4 = req.query.currentPage*8
    console.log(start4,num4,'123456')

    pool.getConnection( (error,connection) => {
        if (error) {
            console.log('失败')
            return;
        }
        // 获取前8条的数据，并将数据其返回
        let sql = `SELECT * FROM tab_catedetail_apply limit ?,8`;
        //  执行sql查询
        connection.query(sql, [start4], (error, results, files) => {
            res.send(results)
            console.log(results.length)
        })
        connection.release();
    })
})

//卖家
app.get('/seller',(req,res)=>{
    console.log(req.query,'123456')
    pool.getConnection( (error,connection) =>{
        if(error){
            console.log('失败')
            return;
        }
        let sql=`SELECT * FROM tab_seller`;
        connection.query(sql,null,(error,results,files) =>{
            console.log(results,'11')
            res.send(results)

        })
        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})
//卖家分页
app.get('/seller_byPagenum', (req,res) =>{
    // 获取页码
    let start3=(req.query.currentPage-1)*8;
    let num3 = req.query.currentPage*8
    console.log(start3,num3,'123456')

    pool.getConnection( (error,connection) => {
        if (error) {
            console.log('失败')
            return;
        }
        // 获取前8条的数据，并将数据其返回
        let sql = `SELECT * FROM tab_seller limit ?,8`;
        //  执行sql查询
        connection.query(sql, [start3], (error, results, files) => {
            res.send(results)
            console.log(results.length)
        })
        connection.release();
    })
})
//卖家删除
app.get('/seller_delete',(req,res)=>{
    console.log(req.query.id,'sssss')
    pool.getConnection(function(error,connection){
        if(error){
            return;
        }
        const sql=`delete from tab_seller where sel_id=?`
        connection.query(sql,[parseInt(req.query.id) ],function(error,results,files){
            console.log(error)
            res.send(results)
        })
        connection.release();
    })
})

//买家
app.get('/buyer',(req,res)=>{
    console.log(req.query)
    pool.getConnection( (error,connection) =>{
        if(error){
            console.log('失败')
            return;
        }
        let sql=`SELECT * FROM customer `;
        connection.query(sql,null, (error,results,files) =>{
            console.log(results)
            res.send(results)

        })
        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//买家分页
app.get('/buyer_byPagenum', (req,res) =>{
    // 获取页码
    let start5=(req.query.currentPage-1)*8;
    let num5 = req.query.currentPage*8
    console.log(start5,num5,'123456')

    pool.getConnection( (error,connection) => {
        if (error) {
            console.log('失败')
            return;
        }
        // 获取前8条的数据，并将数据其返回
        let sql = `SELECT * FROM customer limit ?,8`;
        //  执行sql查询
        connection.query(sql, [start5], (error, results, files) => {
            res.send(results)
            console.log(results.length)
        })
        connection.release();
    })
})

//买家删除
app.get('/buyer_delete',(req,res)=>{
    console.log(req.query.id,'sssss')
    pool.getConnection(function(error,connection){
        if(error){
            return;
        }
        const sql=`delete from tab_catedetail_apply where apply_id=?`
        connection.query(sql,[parseInt(req.query.id) ],function(error,results,files){
            console.log(error)
            res.send(results)
        })
        connection.release();
    })
})


app.get('/queryOrder', (req, res) => {
    let out_trade_no = req.query.out_trade_no
    let trade_no = req.query.trade_no

    const formData = new AlipayFormData();
    formData.setMethod("get");

    formData.addField("bizContent", {
        out_trade_no,
        trade_no
    });

    const result = alipaySdk.exec(
        'alipay.trade.query',
        {},
        { formData: formData },
    );
    result.then(resData => {
        axios({
            url: resData,
            method: 'GET',
        }).then(data => {
            let r = data.data.alipay_trade_query_response
            if (r.code === '10000') {
                switch (r.trade_status) {
                    case 'WAIT_BUYER_PAY':
                        res.send({
                            success: true,
                            code: 200,
                            msg: '支付宝有记录没付款'
                        })
                        break;
                    case 'TRADE_SUCCESS':
                        res.send({
                            success: true,
                            code: 200,
                            msg: '交易完成'
                        })
                        break;
                    case 'TRADE_CLOSED':
                        res.send({
                            success: true,
                            code: 200,
                            msg: '交易关闭,没完成支付'
                        })
                        break;
                }
            } else if (r.code === '40004') {
                res.send('交易不存在')
            }

        }).catch(err => {
            res.send({
                msg: '查询失败',
                err
            })
        })
    })
})
app.post('/go1', (req, res) => {

    const formData = new AlipayFormData();
    formData.setMethod("get");

    formData.addField("returnUrl", "http://localhost:8080/download#/personalcenter");
    formData.addField("bizContent", {
        outTradeNo: req.query.goods_id + '!' + req.query.quantity + '!' + Math.ceil(Math.random() * 1000),
        productCode: "FAST_INSTANT_TRADE_PAY",
        totalAmount: req.query.money,
        subject: "商品",
        body: "商品详情",
    });

    const result = alipaySdk.exec(
        'alipay.trade.page.pay',
        {},
        { formData: formData },
    );
    result.then((resq) => {

        res.send({ success: 'true', result: resq });
    })
})


app.post('/go', (req, res) => {

    const formData = new AlipayFormData();
    formData.setMethod("get");

    formData.addField("returnUrl", "http://localhost:8080/download#/personalcenter");
    formData.addField("bizContent", {
        outTradeNo: "淘宝" + Math.ceil(Math.random() * 1000),
        productCode: "FAST_INSTANT_TRADE_PAY",
        totalAmount: req.query.money,
        subject: "商品",
        body: "商品详情",
    });

    const result = alipaySdk.exec(
        'alipay.trade.page.pay',
        {},
        { formData: formData },
    );
    result.then((resq) => {

        res.send({ success: 'true', result: resq });
    })
})
//登录
app.get('/dologin', (req, res) => {
    console.log(req.query);
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = 'select * from customer where cust_account = ? and cust_pwd = ?'
        connection.query(sql, [req.query.cust_account, req.query.cust_pwd], function (error, results, files) {
            req.session.name = req.query.cust_account
            res.send(results)

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })

})

//注册
app.get('/register', (req, res) => {

    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }
        // INSERT INTO boy(boy_id,boy_name) VALUES(2,'张三');
        // var sql='select * from customer where cust_account = ? and cust_pwd = ?'
        var sq2 = 'select * from customer where cust_account = ?'
        connection.query(sq2, [req.query.newAccount], function (error, results, files) {

            console.log(results.length);
            if (results.length) {
                res.send(false)
            } else {
                pool.getConnection(function (error, connection) {
                    if (error) {
                        console.log('失败')
                        return;
                    }
                    // INSERT INTO boy(boy_id,boy_name) VALUES(2,'张三');
                    // var sql='select * from customer where cust_account = ? and cust_pwd = ?'
                    var sql = `INSERT INTO customer(cust_account,cust_pwd,cust_phone,cust_balance,cust_img,cust_integral,cust_vip) VALUES(?,?,?,0,'https://img2.baidu.com/it/u=3176371145,3762902143&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',0,0);`

                    connection.query(sql, [req.query.newAccount, req.query.newPwd, req.query.newphone], function (error, results, files) {
                        req.session.name = req.query.cust_account
                        res.send(true);
                        console.log(error);
                    })

                    // sql 执行完了，就要将连接对象，还给连接池
                    connection.release();  // 不是将连接关闭，将连接对象还给连接池
                })
            }

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })



})

//获取20条数据
app.get('/all', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = 'select * from tab_goods limit 0,20 '
        connection.query(sql, null, function (error, results, files) {

            res.send(results)

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//商品详情
app.get('/Details', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = 'select * from tab_goods where goods_id = ? '
        connection.query(sql, [req.query.id], function (error, results, files) {

            res.send(results)

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

// 通过id获取用户信息
app.get('/iDgetUser', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = 'select * from customer where cust_id = ? '
        connection.query(sql, [req.query.id], function (error, results, files) {

            res.send(results)

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//添加到购物车
app.get('/addCar', (req, res) => {


    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }
        var sq2 = `select * from tab_cart where  goods_id = ? and cust_id = ?`
        var sql = `insert into tab_cart(goods_id,cart_count,cust_id,sel_id) values(?,?,?,?)`
        var sq3 = `UPDATE tab_cart SET cart_count= cart_count + ? where goods_id = ? and cust_id =? `

        connection.query(sq2, [
            req.query.goods_id,
            req.query.cust_id,

        ], function (error, results1, files) {
            console.log(results1.length, '3');
            if (!results1.length) {
                connection.query(sql, [
                    req.query.goods_id,
                    req.query.cart_count,
                    req.query.cust_id,
                    req.query.sel_id

                ], function (error, results2, files) {

                    res.send(results2)

                })
            } else {
                console.log('ok');
                connection.query(sq3, [
                    req.query.quantity,
                    req.query.goods_id,
                    req.query.cust_id,

                ], function (error, results3, files) {

                    res.send(results3)

                })
            }

        })


        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//获取购物车内容
app.get('/getCar', (req, res) => {

    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `select * from tab_cart where cust_id = ? `
        connection.query(sql, [parseInt(req.query.id)], function (error, results, files) {
            res.send(results)

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//通过购物车获取商品内容
app.get('/getCarData', (req, res) => {
    // console.log(req.query.id);

    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `select * from tab_goods where goods_id = ?`
        connection.query(sql, [parseInt(req.query.id)], function (error, results, files) {

            // console.log(results,req.query.id);
            res.send(results)

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//减商品数量
app.get('/cutCart_count', (req, res) => {
    // console.log(req.query.id);

    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }
        // UPDATE girl SET boy_id = 1 WHERE girl_name = '翠花';
        // var sql=`select * from tab_cart where  goods_id = ? `
        var sql = `UPDATE tab_cart SET cart_count= cart_count - 1 where goods_id = ? and cust_id =? `
        connection.query(sql, [parseInt(req.query.id), parseInt(req.query.cust_id)], function (error, results, files) {

            // console.log(results,req.query.id);
            console.log(results, error);
            res.send(results)

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//增加商品数量
app.get('/addCart_count', (req, res) => {
    // console.log(req.query.id);

    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }
        // UPDATE girl SET boy_id = 1 WHERE girl_name = '翠花';
        // var sql=`select * from tab_cart where  goods_id = ? `
        var sql = `UPDATE tab_cart SET cart_count= cart_count + 1 where goods_id = ? `
        connection.query(sql, [parseInt(req.query.id)], function (error, results, files) {

            // console.log(results,req.query.id);
            console.log(results, error);
            res.send(results)

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//商品增减
app.get('/commodityAddAndReduce', (req, res) => {
    // console.log(req.query.id);

    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `UPDATE tab_cart SET cart_count= ?  where goods_id = ? and cust_id = ?`
        connection.query(sql, [parseInt(req.query.num), req.query.img, req.query.id], function (error, results, files) {

            // console.log(results,req.query.id);
            console.log(results, error);
            res.send(results)

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})
app.get('/delCar', (req, res) => {

    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }
        // UPDATE girl SET boy_id = 1 WHERE girl_name = '翠花';
        // var sql=`select * from tab_cart where  goods_id = ? `
        var sql = `delete from tab_cart where goods_id= ? and  cust_id = ?`
        connection.query(sql, [parseInt(req.query.goods_id), parseInt(req.query.cart_count)], function (error, results, files) {

            // console.log(results,req.query.id);
            console.log(results, error);
            res.send(results)

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//通过goods_id获取衣服size
app.get('/getSize', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }
        // UPDATE girl SET boy_id = 1 WHERE girl_name = '翠花';
        // var sql=`select * from tab_cart where  goods_id = ? `
        var sql = `select * from tab_goodsdetail where goods_id= ? `
        connection.query(sql, [parseInt(req.query.id)], function (error, results, files) {

            // console.log(results,req.query.id);
            console.log(results, error);
            res.send(results)

        })

        // sql 执行完了，就要将连接对象，还给连接池
        connection.release();  // 不是将连接关闭，将连接对象还给连接池
    })
})

//订单详情
app.get('/orderDetails', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `INSERT INTO tab_orderdetails(order_id,goods_id,detail_count,detail_sum) VALUES( ?,?, ? , ? ); `
        connection.query(sql, [req.query.order_id, req.query.goods_id, req.query.detail_count, req.query.detail_sum], function (error, results, files) {

            // console.log(results,req.query.id);
            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})
//订单表
app.get('/order', (req, res) => {
    console.log(1);
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `INSERT INTO tab_order(order_id,order_time,order_sum,cust_id,sel_id,addr_id) VALUES(?,NOW(),?,?,?,?); `
        connection.query(sql,
            [req.query.order_id,
            req.query.order_sum,
            req.query.cust_id,
            req.query.sel_id,
            req.query.addr_id], function (error, results, files) {

                // console.log(results,req.query.id);
                console.log(results, error, '123');
                res.send(results)

            })


        connection.release();
    })
})
//获取地址
app.get('/getAddr', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `select *  from tab_addr where cust_id =?; `
        connection.query(sql, [req.query.id], function (error, results, files) {

            // console.log(results,req.query.id);
            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})
//通过地址id删除地址
app.get('/delAddr', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `delete   from tab_addr where addr_id =?; `
        connection.query(sql, [req.query.id], function (error, results, files) {

            // console.log(results,req.query.id);
            console.log( error);
            res.send(results)

        })


        connection.release();
    })
})
//通过地址id修改地址
app.get('/ReviseAddr', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }
        var sql = `update  tab_addr  set  addr_local  =? ,addr_person= ? ,addr_phone=?  where addr_id =?; `
        connection.query(sql, [req.query.addr_local,req.query.addr_person,req.query.phone,req.query.addr_id], function (error, results, files) {

            // console.log(results,req.query.id);
            console.log( error);
            res.send(results)

        })


        connection.release();
    })
})
//清空购物车
app.get('/delAllCar', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = ` delete from tab_cart where  cust_id = ?`
        connection.query(sql, [req.query.id], function (error, results, files) {


            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})
//通过顾客id获取订单表
app.get('/getTab_order', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = ` select * from tab_order where  cust_id = ?`
        connection.query(sql, [req.query.id], function (error, results, files) {


            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})

//通过sel_id获取订单表
app.get('/sel_idGetTab_order', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = ` select * from tab_order where  sel_id = ?`
        connection.query(sql, [req.query.sel_id], function (error, results, files) {


            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})
//获取订单详情表
app.get('/getTab_orderdetails', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = ` select * from tab_orderdetails where  order_id = ?`
        connection.query(sql, [req.query.order_id], function (error, results, files) {


            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})
//获取所有外套商品
app.get('/coat', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = ` select * from tab_goods where  cateDetail_id = ?`
        connection.query(sql, [req.query.cateDetail_id], function (error, results, files) {


            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})
//获取所有衬衫商品
app.get('/shirt', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = ` select * from tab_goods where  cateDetail_id = ?`
        connection.query(sql, [req.query.cateDetail_id], function (error, results, files) {


            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})
//获取所有T恤商品
app.get('/T_shirt', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = ` select * from tab_goods where  cateDetail_id = ?`
        connection.query(sql, [req.query.cateDetail_id], function (error, results, files) {


            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})
//获取所有裙子商品
app.get('/skirt', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = ` select * from tab_goods where  cateDetail_id = ?`
        connection.query(sql, [req.query.cateDetail_id], function (error, results, files) {


            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})
//首页input搜索
app.get('/inputSearch', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `SELECT * FROM  tab_goods  WHERE  LOCATE(?,goods_name) `
        connection.query(sql, [req.query.goods_name], function (error, results, files) {


            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})
//卖家登录
app.get('/sellerDologin', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `SELECT * FROM  tab_seller  WHERE sel_account = ? and sel_pwd= ? `
        connection.query(sql, [req.query.sel_account, req.query.sel_pwd], function (error, results, files) {


            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})

//通过卖家sel_id获取信息
app.get('/sel_idgetSeller', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `SELECT * FROM  tab_seller  WHERE sel_id = ? `
        connection.query(sql, [req.query.id], function (error, results, files) {


            console.log(results, error);
            res.send(results)

        })


        connection.release();
    })
})

//通过商家sel_id获取商品信息
app.get('/sel_idGetTab_goods', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `SELECT * FROM  tab_goods  WHERE sel_id = ? `
        connection.query(sql, [req.query.sel_id], function (error, results, files) {



            res.send(results)

        })


        connection.release();
    })
})

//通过goods_id删除tab_goods,tab_goodsdetail对于商品
app.get('/delTab_goods', (req, res) => {
    console.log(req.query.id, '321');

    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `delete from tab_goods  where goods_id = ? `
        var sq2 = `delete from tab_goodsdetail  where goods_id = ? `
        connection.query(sql, [parseInt(req.query.id)], function (error, results, files) {
            console.log(error);
            if (error == null) {
           
                connection.query(sq2, [parseInt(req.query.id)], function (error, results, files) {

                    console.log(error);
                    res.send(results)

                })
          
            }


        })


        connection.release();
    })
})


//修改用户数据
app.get('/ReviseCust', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `UPDATE customer set cust_account =? , cust_pwd=? ,cust_phone=?  where cust_id =?`
        connection.query(sql, [req.query.cust_account, req.query.cust_pwd, req.query.cust_phone, req.query.cust_id], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send('ok')

        })


        connection.release();
    })
})

//用户添加地址

app.get('/addAddr', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `insert into tab_addr(addr_local,addr_person,addr_phone,cust_id) values(?,?,?,?)`
        connection.query(sql, [req.query.addr_local, req.query.addr_person, req.query.addr_phone, req.query.cust_id], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send('ok')

        })


        connection.release();
    })
})

//通过用户输入内容查找店铺名
app.get('/getTab_seller', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `select * from tab_seller where LOCATE(?,sel_store)`
        connection.query(sql, [req.query.sel_store], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send(results)

        })


        connection.release();
    })
})

//店铺id获取详情
app.get('/iDgetTab_seller', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `select * from tab_seller where sel_id = ? `
        connection.query(sql, [req.query.sel_id], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send(results)

        })


        connection.release();
    })
})
//通过店铺id获取4件商品
app.get('/getGoods', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `select * from tab_goods where sel_id = ? limit 0,4 `
        connection.query(sql, [req.query.sel_id], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send(results)

        })


        connection.release();
    })
})

//通过店铺id获取全部商品
app.get('/getAllGoods', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `select * from tab_goods where sel_id = ?  `
        connection.query(sql, [req.query.sel_id], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send(results)

        })


        connection.release();
    })
})

//通过店铺id和商品名获取全部商品
app.get('/getAllGoodss', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `select * from tab_goods where sel_id = ? and LOCATE(?,goods_name)  `
        connection.query(sql, [req.query.sel_id, req.query.goods_name], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send(results)

        })


        connection.release();
    })
})

//通过店铺id和商品价格获取全部商品
app.get('/getAllGoodsss', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `select * from tab_goods where sel_id = ? and goods_discount>=? and goods_discount<=?  `
        connection.query(sql, [req.query.sel_id, req.query.minMoney, req.query.maxMoney], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send(results)

        })


        connection.release();
    })
})

app.get('/goods_idGetSeller', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `select * from tab_goods where goods_id = ?  `
        connection.query(sql, [req.query.goods_id], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send(results)

        })


        connection.release();
    })
})

//通过订单确认收货
app.get('/completeorder', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = `UPDATE  tab_order set order_done = NOW() where order_id = ? `
        connection.query(sql, [req.query.order_id], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send(results)

        })


        connection.release();
    })
})

app.get('/addComment', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = ` INSERT INTO  comment VALUES(?,?,?,?,?,?,now()); `
        connection.query(sql, [
            req.query.cust_id,
            req.query.goods_id,
            req.query.score,
            req.query.Comment,
            req.query.order_id,
            req.query.StoreReviews,
        ], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send(results)

        })


        connection.release();
    })
})

app.get('/goods_idGetcomment', (req, res) => {
    console.log(req.query, 'okok');
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('失败')
            return;
        }

        var sql = ` select * from comment where goods_id =? `
        connection.query(sql, [req.query.goods_id], function (error, results, files) {
            console.log(error, 'dddsss');

            res.send(results)

        })


        connection.release();
    })
})
app.listen(3000, function () {
    console.log('http://localhost:3000');
})