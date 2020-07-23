var mongoose = require('mongoose')
var Schema = mongoose.Schema

var homeMp4Schema = new Schema({
	homeMp4file:{
		type:String
	}
})

var homeMp4files = mongoose.model('homemp4',homeMp4Schema)

homeMp4files.deleteMany({},err => {})

var homeMp4filesArr = [
	'http://localhost:3000/public/mp4/0c4a7a9.mp4',
	'http://localhost:3000/public/mp4/wKgc6F6ZZZWADgYVABwAiIv9Zdk941.mp4',
]


homeMp4filesArr.forEach(item => {
   var newhomeMp4file = new homeMp4files({
    	homeMp4file:item
    })
    newhomeMp4file.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})

//导出
module.exports = homeMp4files