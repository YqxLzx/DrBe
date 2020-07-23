//加载模块
var mongoose = require('mongoose')
var Schema = mongoose.Schema

//设计集合结构
var drworldimgSchema = new Schema({
	drworldimg:{
		type:String,		
	},
})


//将文档结构发布为模型
var drWorldImg = mongoose.model('drworldImg',drworldimgSchema)

//删除多条数据
drWorldImg.deleteMany({}, err => {});

//保存数据
var drWorldImgs = [
	"http://localhost:3000/public/img/tittleBar/a52bfb1.png",
	"http://localhost:3000/public/img/tittleBar/38977bf.png",
	
	]
//遍历新建数据
drWorldImgs.forEach(item => {
   var newdrworldimgs = new drWorldImg({
    	drworldimg:item
    })
//保存数据
    newdrworldimgs.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})


//导出
module.exports = drWorldImg