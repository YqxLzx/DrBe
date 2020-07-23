var mongoose = require('mongoose')
var Schema = mongoose.Schema

var homeSectionImgSchema = new Schema({
	homeSectionImg:{
		type:String
	}
})

var homeSectionImgs = mongoose.model('secionimg',homeSectionImgSchema)

homeSectionImgs.deleteMany({},err => {})

var homeSectionImgsArr = [
	'http://localhost:3000/public/img/home/section/2edb7ff.jpg',
	'http://localhost:3000/public/img/home/section/37ea3a6.jpg',
	'http://localhost:3000/public/img/home/section/5df6971.jpg',
	'http://localhost:3000/public/img/home/section/703c661.jpg',
	'http://localhost:3000/public/img/home/section/832f7d5.jpg',
	'http://localhost:3000/public/img/home/section/a0252d6.jpg',
	'http://localhost:3000/public/img/home/section/a538fa4.jpg',
	'http://localhost:3000/public/img/home/section/b713cea.jpg',
	'http://localhost:3000/public/img/home/section/cfc636f.jpg',
	'http://localhost:3000/public/img/home/section/f9e31ac.jpg',
	'http://localhost:3000/public/img/home/section/983c493.jpg',
]


homeSectionImgsArr.forEach(item => {
   var newHomeSectionImg = new homeSectionImgs({
    	homeSectionImg:item
    })
    newHomeSectionImg.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})

//导出
module.exports = homeSectionImgs