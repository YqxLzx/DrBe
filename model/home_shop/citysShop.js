//加载模块
var mongoose = require('mongoose')
var Schema = mongoose.Schema

//设计集合结构
var citysShopSchema = new Schema({
	citys_Shop:{
        city:{
            type:String
        },
        Shops:{
            type:Array
        }          
        		
	},
})


//将文档结构发布为模型
var citysShops = mongoose.model('cityshop',citysShopSchema)

//删除多条数据
citysShops.deleteMany({}, err => {});

//保存数据
var citysShopWhere = [
	{
        city:'北京市',
        Shops:['北京王府井店','北京万达店']
    },
    {
        city:'上海市',
        Shops:['上海万宝店','上海金融广场店']
    },
    {
        city:'武汉市',
        Shops:['武汉汉正街店','武汉汉口桥北店']
    },
    {
        city:'广州市',
        Shops:['广州未来广场店','广州时代广场店']
    }
	
]
//遍历新建数据
citysShopWhere.forEach(item => {
   var newcitysShops = new citysShops({
    	citys_Shop:item
    })
//保存数据
    newcitysShops.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})


//导出
module.exports = citysShops