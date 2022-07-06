// 将mysql 的配置信息保存在这里
// 第2种连接方式，连接池
// 我已经提前将连接对象创建好了（创建了很多个，将其放在了一个容器中）
// 你需要sql操作，我就给你一个连接对象，你操作完之后，你在将它还给我，不要讲连接对象关闭
var config={
    connectionLimit: 5,   // 连接一旦打开，创建5个连接对象，如果请求的数量超过了指定的对象个数
                          // 连接池会按照指定的比例去添加连接对象
    host     : 'localhost',  // 主机地址
    user     : 'root',       // 用户
    database : 'taobao'      // 指定你要操作哪个数据库
}
//将配置对象暴露出去
module.exports=config;