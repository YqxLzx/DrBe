//加载模块
var mongoose = require('mongoose')
var Schema = mongoose.Schema

//设计集合结构
var skuSchema = new Schema({
	ringSku:{
		materialScience:{
			type:String
		},
		mainDiamonds:{
			type:String
		},
		materialSciencePrice:{
			type:Number
		},
		mainDiamondsPrice:{
			type:Number
		},	
	},
})

//将文档结构发布为模型
var proposalSku = mongoose.model('skumessage',skuSchema)

//删除多条数据
proposalSku.deleteMany({}, err => {});

//保存数据
var proposalSkus = [
	{
		materialScience:'白18金K',
		mainDiamonds:'50分F-G色',
		materialSciencePrice:0,
		mainDiamondsPrice:0
	},
	{
		materialScience:'PT950',
		mainDiamonds:'70分H色',
		materialSciencePrice:3820,
		mainDiamondsPrice:2870
	},
	{
		materialScience:'红18K金',
		mainDiamonds:'30分H色',
		materialSciencePrice:2150,
		mainDiamondsPrice:1350
	},
	{
		materialScience:'黄18K金',
		mainDiamonds:'100分G色',
		materialSciencePrice:7150,
		mainDiamondsPrice:8550
	},

		
]
//遍历新建数据
proposalSkus.forEach(item => {
   var newchoosesku = new proposalSku({
    	ringSku:item
    })
//保存数据
    newchoosesku.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})


//导出
module.exports = proposalSku