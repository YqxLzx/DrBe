var mongoose = require('mongoose')
var Schema = mongoose.Schema

var homeSwiperImgSchema = new Schema({
	homeSwiperSecond_Img:{
		img:{
			type:String
		},
		title:{
			type:String
		},
		text:{
			type:String
		}

	}
})

var homeSwiperSecond_Imgs = mongoose.model('swipersecondimg',homeSwiperImgSchema)

homeSwiperSecond_Imgs.deleteMany({},err => {})

var homeSwiperSecond_ImgsArr = [
	{
		img:'http://localhost:3000/public/img/home/section/703c661.jpg',
		title:'DR Paris系列',
		text:'融入法国巴黎卢浮宫设计元素，纵横交错的菱形戒臂，如同炽热爱意交织蔓延，一生浪漫只给你。'
	},
	{
		img:'http://localhost:3000/public/img/home/section/832f7d5.jpg',
		title:'Believe系列',
		text:'方形宽沿戒指，结合了天方地圆的东方美学灵感，整体呈现男士爱之郑重，一心守护心中挚爱。'
	},
	{
		img:'http://localhost:3000/public/img/home/section/a0252d6.jpg',
		title:'My Heart系列',
		text:'源于爱神厄络斯箭锋上的心形宝石，让爱意时刻环绕在你身边，一心一意，一生一世。'
	},
	{
		img:'http://localhost:3000/public/img/home/section/a538fa4.jpg',
		title:'Wedding 系列',
		text:'爱是牵了手，就不会再放开，棱角分明的线条勾勒，意味着对爱的果敢和坚定，爱是彼此一生不变的承诺。'
	},
	{
		img:'http://localhost:3000/public/img/home/section/b713cea.jpg',
		title:'Love Line系列',
		text:'源于欧洲婚礼上的绑手礼神圣仪式，将玫瑰金丝紧绕对戒，艺术美感与深刻内涵融合，表达新人矢志不渝的誓言，绑定你我，一生不离。'
	}

	
	
	
	//'http://localhost:3000/public/img/home/section/a538fa4.jpg',
]


homeSwiperSecond_ImgsArr.forEach(item => {
   var newhomeSwiperSecond_Img = new homeSwiperSecond_Imgs({
    	homeSwiperSecond_Img:item
    })
    newhomeSwiperSecond_Img.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})

//导出
module.exports = homeSwiperSecond_Imgs