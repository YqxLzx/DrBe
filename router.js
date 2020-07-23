//加载模块

//公共
var fs = require('fs')
var mongoose = require('mongoose')
var path = require('path')
//导航栏
var ProposalRingImg = require('./model/Proposal_diamond_ring/Proposal_diamond_ring')
var drWorldImgs = require('./model/DR_world_img/dr_world_imgs')
var loveShopImgs = require('./model/Love_shop_img/love_shop_imgs')
var marriageRings = require('./model/Marriage_double_ring/marriage_double_rings')
var homesectionImgs = require('./model/Home_section_img/home_section_imgs')
var homeswiperImgs = require('./model/Home_show_swiper_img/home_show_swiper_imgs')
var homeswipersecondImgs = require('./model/Home_section_img/home_swiperSecond_imgs')
var homeMp4files = require('./model/Home_mp4/home_mp4')
var homeStarsAndStories = require('./model/Home_starsAndStories/home_starsAndStories')
var User = require('./model/users/user')
var proposaClass = require ('./model/proposalClass/proposalClassRing')
var cityShop = require('./model/home_shop/citysShop')
var proposalSku = require('./model/proposal_sku/sku.js')
var shoppingBags = require('./model/shoppingbag/shopping_bag.js')
//Express提供了包装路由方式
var express = require('express')
//创建一个路由容器
var router = express.Router()
//token
const jwt = require('jsonwebtoken');

//链接数据库
mongoose.connect('mongodb://localhost/3000',{useNewUrlParser: true, useUnifiedTopology: true })
   .then(res=>{
       console.log("数据库连接成功!")
    }).catch(err => {
      console.log(err.message);
    })

//路由
router.post('/shoppingBags',function(req,res){
    shoppingBags.push(req.body.obj).save(function(err, ret) {
    if (err) {
        console.log("保存失败");
    } else {
        console.log("保存成功:");
        console.log(ret);
    }
    })
})

router.post('/proposalSku',function(req,res,){
	proposalSku.findOne({
	materialScience:req.body.materialScience,
	},function(err,proposalSku){
		if(err){
			//使用中间件
			return next(err)
			
		}if(!proposalSku){
			return res.status(201).json({
				err_code:1,
				message:'错误'
			})
		}
		req.session.proposalSku = proposalSku
		res.status(200).json({
			err_code:0,
			message:'ok',
			materialSciencePrice
		})
	})
})

router.get('/citysShop',function(req,res,next){
	cityShop.find(function(err,ret){
		if(err){
			//使用中间件
			return next(err)
		}else{
			console.log('ok')
			res.status(200).json({
			ret,
			message:'数据请求成功'
		})
		}
	})
})

router.get('/proposaClass',function(req,res,next){
	proposaClass.find(function(err,ret){
		if(err){
			//使用中间件
			return next(err)
		}else{
			console.log('ok')
			res.status(200).json({
			ret,
			message:'数据请求成功'
		})
		}
	})
})


router.get('/starsAndStories',function(req,res,next){
	homeStarsAndStories.find(function(err,ret){
		if(err){
			//使用中间件
			return next(err)
		}else{
			console.log('ok')
			res.status(200).json({
			ret,
			message:'数据请求成功'
		})
		}
	})
})

router.get('/homeMp4',function(req,res,next){
	homeMp4files.find(function(err,ret){
		if(err){
			//使用中间件
			return next(err)
		}else{
			console.log('ok')
			res.status(200).json({
			ret,
			message:'数据请求成功'
		})
		}
	})
})

router.get('/proposalRing',function(req,res,next){
	ProposalRingImg.find(function(err,ret){
		if(err){
			//使用中间件
			return next(err)
		}else{
			console.log('ok')
			res.status(200).json({
			ret,
			message:'数据请求成功'
		})
		}
	})
})

router.get('/drWorld',function(req,res,next){
	drWorldImgs.find(function(err,ret){
		if(err){
			//使用中间件
			return next(err)
		}else{
			console.log('ok')
			res.status(200).json({
			ret,
			message:'数据请求成功'
		})
		}
	})
})

router.get('/loveShop',function(req,res,next){
	loveShopImgs.find(function(err,ret){
		if(err){
			//使用中间件
			return next(err)
		}else{
			console.log('ok')
			res.status(200).json({
			ret,
			message:'数据请求成功'
		})
		}
	})
})
//结婚戒指
router.get('/marriageRings',function(req,res,next){
	marriageRings.find(function(err,ret){
		if(err){
			//使用中间件
			return next(err)
		}else{
			console.log('ok')
			res.status(200).json({
			ret,
			message:'数据请求成功'
		})
		}
	})
})
//首页分类图片
router.get('/homesectionImgs',function(req,res,next){
	homesectionImgs.find(function(err,ret){
		if(err){
			//使用中间件
			return next(err)
		}else{
			console.log('ok')
			res.status(200).json({
			ret,
			message:'数据请求成功'
		})
		}
	})
})

//首页第一个轮播图
router.get('/homeswiper',function(req,res,next){
	homeswiperImgs.find(function(err,ret){
		if(err){
			//使用中间件
			return next(err)
		}else{
			console.log('ok')
			res.status(200).json({
			ret,
			message:'数据请求成功'
		})
		}
	})
})

//首页第二个轮播图
router.get('/homeSwiperSecond',function(req,res,next){
	homeswipersecondImgs.find(function(err,ret){
		if(err){
			//使用中间件
			return next(err)
		}else{
			console.log('ok')
			res.status(200).json({
			ret,
			message:'数据请求成功'
		})
		}
	})
}) 
    /*phoneNumber:req.body.phoneNumber,
    nickName:req.body.nickName,
    password:req.body.password,
    idCard:req.body.idCard*/
//注册路由
router.post('/register', async function(req,res,next){
	//获取表单提交的数据req.body
	//操作数据库，判断是否用户是否存在，存在则不让注册，不存在新建注册	
	var body = req.body
	//查找满足条件的数据
	try{
		if(await User.findOne({phoneNumber:body.phoneNumber})){
			return res.status(202).json({
				err_code:1,
				messsage:'手机已经被注册'
			})
		}

		if(await User.findOne({idCard:body.idCard})){
			return res.status(201).json({
				err_code:2,
				messsage:'此身份证已经被注册'
			})
		}  	
		//创建用户，执行注册
		var user = await new User(body).save()
		req.session.user = user
		const token = jwt.sign({
			name: body.phoneNumber,
			_id: body._id
		}, 
		'my_token', { expiresIn: '2h' });
			return res.status(200).json({
				err_code:0,
				messsage:'成功',
				code: '000001',
				data: token

			})
		}catch(err){
			res.status(500).json({
			err_code:500,
			messsage:'错误',
			code: '000002',
			data: null
		})
		}
	})
//支付路由

//拿到购物车路由
router.post('/getShoppingBag', async function(req,res,next){
	//获取表单提交的数据req.body
	//操作数据库，判断是否用户是否存在，存在则不让注册，不存在新建注册	
	var data = req.body
	const result = await User.findOne({
        idCard: data.user.idCard,
    })
    const token = 'Bearer ' + jwt.sign({ //一般项目开发都是Bearer+空格的字符串开头
            shoppingBag: result.shoppingBag,
            _id: result._id
    	}, 'my_token', {
            expiresIn: 3600 * 2
        });
    	try{
	    	if(result.shoppingBag===[]){
	    		res.status(201).json({ 
	            code: '000002',
	            //data: token,
	            msg: '获取该用户的购物车信息失败',
	        })
	    	}else{
	    		res.status(200).json({  // 返回一个json  也可以用res.send
	            code: '000001',
	            data: token,
	            msg: '获取该用户购物车信息成功',
	        })
	    	}
    	} catch(err){
    		res.status(201).json({
		    code: '000002',
		    //data: null,
		    msg: '保存购物车失败',
		})
		    console.log(err)
    	}	
	})
//提交购物车路由
router.post('/toShoppingBag', async (req,res) => {	
    const data = req.body;
    const result = await User.findOne({
        idCard: data.user.idCard,
    })
    try {
     const dbRes = await User.updateOne({ idCard: data.user.idCard }, { shoppingBag: result.shoppingBag.push(data.obj) });
     if(dbRes.n == 1 && dbRes.nModified == 1) {
        res.status(200).json({  // 返回一个json  也可以用res.send
            code: '000001',
            //data: token,
            msg: '保存购物车成功',
        })
	} 	else {
			console.log('错误了')
		   throw new Error();
		   
		}
		} catch(err) {
		    res.status(201).json({
		    code: '000002',
		    //data: null,
		    msg: '保存购物车失败',
		})
		    console.log(err)
}
})
    



//登陆按钮路由
router.post('/login', async (req,res) => {
    const data = req.body;
    const result = await User.findOne({
        phoneNumber: data.phoneNumber,
        password: data.password
    })
    if (result !== null) {
        const token = 'Bearer ' + jwt.sign({ //一般项目开发都是Bearer+空格的字符串开头
            name: result.name,
            _id: result._id,
            poneNumebr:result.phoneNumber,
            idCard:result.idCard,
            shoppingBag:result.shoppingBag
        }, 'my_token', {
            expiresIn: 3600 * 2
        });

        res.status(200).json({  // 返回一个json  也可以用res.send
            code: '000001',
            data: token,
            msg: '登录成功',

        })

    } else {
        res.status(201).json({
            code: '000002',
            data: null,
            msg: '用户名或密码错误',
        })
    }
});

//退出登陆路由
router.get('/logout',function(req,res){
	//清除登陆状态
	req.session.user = null
})



//导出路由
module.exports = router 