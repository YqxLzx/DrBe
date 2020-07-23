//加载模块
var mongoose = require('mongoose')
var Schema = mongoose.Schema

//设计集合结构
var proposalImgSchema = new Schema({
	seriesring:{
		id:{
			type:Number
		},
		name:{
			type:String,
		},
		img:{
			type:String
		},
		bigImg:{
			type:String
		},
		describe:{
			type:String
		},
		url:{
			type:String
		}		
	},
})

//将文档结构发布为模型
var proposalRingImg = mongoose.model('proposalImg',proposalImgSchema)

//删除多条数据
proposalRingImg.deleteMany({}, err => {});

//保存数据
var proposalRingImgs = [
{
	id:1000,
	img:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/Onering1.jpg",
	bigImg:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/bigimg1.jpg",
	name: '稀世粉钻',
	describe:'粉与白，也如同相爱的我和你。DR只选用等级优质的白钻与罕贵的稀世粉钻镶嵌，传递着我只想把世间最好的一切都给你',
	url:'',
},
{
	id:1001,
	img:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/Onering2.jpg",
	bigImg:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/bigimg2.jpg",
	name: 'MY HEART系列',
	describe:'DR灵魂作品象征，源自爱神厄洛斯。传说被爱神射中的恋人，就能拥有箭锋上的心形宝石印记，从此一心一意，一生一世',
	url:'',
},
{
	id:1002,
	img:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/Onering3.jpg",
	bigImg:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/bigimg3.jpg",
	name: 'BELEVE系列',
	describe:'相传初雪的雪花是最纯粹洁白，和相爱的人看初雪，便将会永远幸福的在一起。DR以初雪作为灵感设计，只为纯粹真爱的表达',
	url:'',
},
{
	id:1003,
	img:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/Onering4.jpg",
	bigImg:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/bigimg4.jpg",
	name: 'FOVER系列',
	describe:'诞生于百年前的经典六爪镶嵌钻戒，侧面如埃菲尔铁塔底座，360°无死角地高高托起璀璨钻石。简约一如初心，我爱你，一辈子',
	url:'',
},
{
	id:1004,
	img:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/Onering5.jpg",
	bigImg:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/bigimg5.jpg",
	name: 'LOVE LINE系列',
	describe:'DR意大利设计大师安东尼奥设计，灵感源于欧洲婚礼上的“绑手礼”，为寓意合二为一的浪漫仪式，彼此承诺绑定一生，永不分离',
	url:'',
},
{
	id:1005,
	img:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/Onering6.jpg",
	bigImg:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/bigimg6.jpg",
	name: 'DR PARIS系列',
	describe:'以无与伦比的工艺，让面与线形成约52°的自然稳固角度，艺术性还原巴黎卢浮宫金字塔，寓意恋人间爱意的坚定、恒久',
	url:'',
},
{
	id:1006,
	img:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/Onering7.jpg",
	bigImg:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/bigimg7.jpg",
	name: 'TRUE LOVE系列',
	describe:'取自奥地利圆舞曲中，两人心照不宣地和谐旋转，无论怎么打转都是柔和与永恒的象征，犹如爱情中对婚姻圆满的追求，爱你从起点，到终点',
	url:'',
},
{
	id:1007,
	img:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/Onering8.jpg",
	bigImg:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/bigimg8.jpg",
	name: 'WEDDING系列',
	describe:'新郎接新娘时必带手捧花，寓意幸福、幸运，也由此象征每个女孩对美好婚礼的期待。要嫁就嫁给爱情，爱的捧花，一生只交付给一个人',
	url:'',
},
{
	id:1008,
	img:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/Onering9.jpg",
	bigImg:"http://localhost:3000/public/img/tittleBar/Proposal_diamond_ring/bigimg9.jpg",
	name: 'JUST YOU系列',
	describe:'传说爱神丘比特，用箭将两颗心紧紧连接在一起。Just You 系列交错扭臂的戒指造型，诠释一生与你紧紧相拥的爱意。',
	url:'',
},

]
//遍历新建数据
proposalRingImgs.forEach(item => {
   var newdetailsimg = new proposalRingImg({
    	seriesring:item
    })
//保存数据
    newdetailsimg.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})


//导出
module.exports = proposalRingImg