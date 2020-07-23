var mongoose = require('mongoose')
var Schema = mongoose.Schema

var StarsAndStoriesSchema = new Schema({
	starsStoriesImg:{
		type:String
	}
})

var starsStoriesImgs = mongoose.model('starsstories',StarsAndStoriesSchema)

starsStoriesImgs.deleteMany({},err => {})

var starsStoriesImgsArr = [
	'http://localhost:3000/public/img/bottomBar/15d3707.png',
    'http://localhost:3000/public/img/bottomBar/8d1bde5.png',
    'http://localhost:3000/public/img/bottomBar/817e0e9.png',
    'http://localhost:3000/public/img/bottomBar/1f24164.png',
    'http://localhost:3000/public/img/bottomBar/5479dfb.png',

 ]


starsStoriesImgsArr.forEach(item => {
   var newstarsStoriesImg = new starsStoriesImgs({
    	starsStoriesImg:item
    })
    newstarsStoriesImg.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})

//导出
module.exports = starsStoriesImgs