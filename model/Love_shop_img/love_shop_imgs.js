//加载模块
var mongoose = require('mongoose')
var Schema = mongoose.Schema

//设计集合结构
var loveshopimgSchema = new Schema({
	loveshopimg:{
		type:String,		
	},
})


//将文档结构发布为模型
var loveShopImgs = mongoose.model('loveShopImg',loveshopimgSchema)

//删除多条数据
loveShopImgs.deleteMany({}, err => {});

//保存数据
var loveShopGoods5Imgs = [
	"http://localhost:3000/public/img/tittleBar/b284886.png",	
	]
//遍历新建数据
loveShopGoods5Imgs.forEach(item => {
   var newloveshopimgs = new loveShopImgs({
    	loveshopimg:item
    })
//保存数据
    newloveshopimgs.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})


//导出
module.exports = loveShopImgs