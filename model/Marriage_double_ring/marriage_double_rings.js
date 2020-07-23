var mongoose = require('mongoose')
var Schema = mongoose.Schema

var marriageRingSchema = new Schema({
	seriesring:{
		id:{
			type:Number
		},
		img:{
			type:String
		},
		bigImg:{
			type:String
		},
		name:{
			type:String
		},
		describe:{
			type:String
		},
		url:{
			type:String
		},
}
})

var marriageRings = mongoose.model('marriagering',marriageRingSchema)

marriageRings.deleteMany({},err => {})

var marriageRingArr = [
{
	id:2000,
	img:'http://localhost:3000/public/img/tittleBar/Marriage_double_ring/wKgc6F62grCACO0RAAAKs_yCi0g439.jpg',
	bigImg:'http://localhost:3000/public/img/tittleBar/Marriage_double_ring/wKgc6F6YbRmAc7StAAEzGwxqIbo286.jpg',
	name:'DARRY RING系列',
	describe:'极致黑白，天生一对。DR以形简意赅的设计美学，将黑白钻镶嵌于男女对戒上，深情诠释恋人互为唯一，一生相伴的浪漫承诺',
	url:'',
},
{
	id:2001,
	img:'http://localhost:3000/public/img/tittleBar/Marriage_double_ring/wKgc6F62gpyAKqH4AAAJkaA15vo077.jpg',
	bigImg:'http://localhost:3000/public/img/tittleBar/Marriage_double_ring/wKgc6F6YbLGAWTGUAACxp4tC0RU210.jpg',
	name:'TOGETHER系列',
	describe:'DR灵魂作品象征，源自爱神厄洛斯。传说被爱神射中的恋人，就能拥有箭锋上的心形宝石印记，从此一心一意，一生一世',
	url:'',
},
{
	id:2002,
	img:'http://localhost:3000/public/img/tittleBar/Marriage_double_ring/wKgc6F62gruAOlsEAAAKC0spiGo642.jpg',
	bigImg:'http://localhost:3000/public/img/tittleBar/Marriage_double_ring/wKgc6F6YbUiACf55AAD4o0eP1cQ775.jpg',
	name:'ENDLESS LOVE系列',
	describe:'融入「∞」无穷符号，寓意爱意无限。在时光里谱写爱的恋曲，当岁月远去，对你的爱亦未曾减少',
	url:'',
},
{
	id:2003,
	img:'http://localhost:3000/public/img/tittleBar/Marriage_double_ring/wKgc6F62gqaAdGphAAAJZAkoNHw145.jpg',
	bigImg:'http://localhost:3000/public/img/tittleBar/Marriage_double_ring/wKgc6F6YbOaATwAAAAEygyIW5Uc917.jpg',
	name:'D-DESTINY系列',
	describe:'品牌标志性D字母，品味独具，意义深远，强有力地表达内心坚定的真爱承诺，命中注定，此生唯你',
	url:'',
},
{
	id:2004,
	img:'http://localhost:3000/public/img/tittleBar/Marriage_double_ring/wKgc6F62gnCAVWdNAAAKL6ELoVg467.jpg',
	bigImg:'http://localhost:3000/public/img/tittleBar/Marriage_double_ring/wKgc6F6YbFyAYr5QAAGAvrbelfM742.jpg',
	name: 'DR PARIS系列',
	describe:'融入法国巴黎卢浮宫设计元素，纵横交错的菱形戒臂，如同炽热爱意交织蔓延，一生浪漫只给你',
	url:'',
},

]


marriageRingArr.forEach(item => {
   var newMarryageDoubleRings = new marriageRings({
    	seriesring:item
    })
    newMarryageDoubleRings.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})

//导出
module.exports = marriageRings