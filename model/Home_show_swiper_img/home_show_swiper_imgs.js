var mongoose = require('mongoose')
var Schema = mongoose.Schema

var homeSwiperImgSchema = new Schema({
	home_swiperImg:{
		id:{
			type:Number,
		},
		name:{
			type:String,
		},
		img:{
			type:String,
		}
	}
})

var homeswiperImgs = mongoose.model('homeswiperimg',homeSwiperImgSchema)

homeswiperImgs.deleteMany({},err => {})

var homeswiperImgsArr = [
	{
		id:1,
		name:'男戒',
		img:'http://localhost:3000/public/img/home/section/37ea3a6.jpg',
	},
	{	
		id:2,
		name:'项链',
		img:'http://localhost:3000/public/img/home/section/cfc636f.jpg',
	},
	{
		id:3,
		name:'耳饰',
		img:'http://localhost:3000/public/img/home/section/f9e31ac.jpg',
	},
	{
		id:4,
		name:'手链',
		img:'http://localhost:3000/public/img/home/section/2edb7ff.jpg',
	},

	
	//'http://localhost:3000/public/img/home/section/5df6971.jpg',
	//'http://localhost:3000/public/img/home/section/703c661.jpg',
	//'http://localhost:3000/public/img/home/section/832f7d5.jpg',
	//'http://localhost:3000/public/img/home/section/a0252d6.jpg',
	//'http://localhost:3000/public/img/home/section/a538fa4.jpg',
	//'http://localhost:3000/public/img/home/section/b713cea.jpg',
	//'http://localhost:3000/public/img/home/section/cfc636f.jpg',

	
]


homeswiperImgsArr.forEach(item => {
   var newhomeswiperIm = new homeswiperImgs({
    	home_swiperImg:item
    })
    newhomeswiperIm.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})

//导出
module.exports = homeswiperImgs