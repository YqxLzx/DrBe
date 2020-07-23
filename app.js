//加载引入
var express = require("express");//我是第三方
var app = express();
var router = require('./router.js')
var path = require('path')
var bodyParser = require('body-parser')//我是第三方
var session = require('express-session')//我是第三方

//傻瓜式跨域设置 
app.all('*', function(req, res, next) {
  //设为指定的域
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length,Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("X-Powered-By", ' 3.2.1');
  next();
});

//请求静态资源
app.use('/node_modules',express.static(path.join(__dirname,'./node_modules')))
app.use('/public',express.static(path.join(__dirname,'./public/')))

//加载第三方插件
app.engine('html',require('express-art-template'))

//配置第三方body-parser中间件，用于解析post请求，一定要在挂载路由前
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//配置第三方session
app.use(session({
  //记录用户信息，并让他持久化。
  //添加session数据:req.session.foo = 'bar'
  //访问sesion数据:req.session.foo
  name:'user',
  secret:'keyboard cat',
  resave:false,
  cookie: {
      maxAge: 1000 * 60 * 10  // 设置 session的有效时间，单位为毫秒，设置有效期为10分钟
  },
  saveUninitialized:true
}))



//配置中间件，统一处理错误
app.use(function(err,req,res,next){
  res.status(500).json({
    err_code:500,
    message:err.message
  })
})





//把路由容器挂载到APP服务上
app.use(router)


//创建服务
app.listen(3000,function(){
  console.log('服务启动成功')
})