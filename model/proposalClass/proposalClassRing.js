//加载模块
var mongoose = require('mongoose')
var Schema = mongoose.Schema

//设计集合结构
var proposeClassRingSchema = new Schema({
	proposeClass_Ring:{
		id:{
			type:Number
		},
		name:{
			type:String
		},
		img:{
			type:String
		},
		rotateImg:{
			type:String
		},
		price:{
			type:Number
		},
		popularity:{
			type:Number
		},
		url:{
			type:String
		},
		service:{
			type:String
		},
		carat:{
			type:Number
		},
		shape:{
			type:String
		},
		class:{
			type:String,
			default:'求婚钻戒'
		},
		mainCart:{
			type:Number,
			default:1		
		},
		mainCart:{
			type:String,
			default:'钻石'		
		},
		deputyCart:{
			type:Number,
			default:99		
		},
		pure:{
			type:String
		},
		color:{
			type:String,
			default:'K'
		},
		num:{
			type:String
		},
		cut:{
			type:String,
			default:'VG'
		},
		count:{
			type:Number,
			default:1	
		},
		materialScience:{
			type:Array,
			default:[				
				{name:'白18金K',price:0},
				{name:'Pt950',price:777},
				{name:'红18K金',	price:1295},
				{name:'黄18K金',price:5800}
			]
		},
		materialSciencePrice:{
			type:Array,
			default:[0,777,1295,5800]
		},
		mainDiamonds:{
			type:Array,
			default:[
			{name:'50分F-G色',price:0},
			{name:'30分H色',price:1275},
			{name:'70分H色',price:2180},
			{name:'100分G色',price:3460}
		]
		},
		mainDiamondsPrice:{
			type:Array,
			default:[0,1275,2180,3460]
		},

	},
})

//将文档结构发布为模型
var propose_ClassRing = mongoose.model('proposering',proposeClassRingSchema)

//删除多条数据
propose_ClassRing.deleteMany({}, err => {});

//保存数据
var propose_ClassRings = [
	{
		id:1001,
		name:'稀世粉钻-钻戒A',
		service:'稀世粉钻',		
		img:"http://localhost:3000/public/img/class/proposalRing/15719127015db17bfd32335.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/15719127055db17c01c6434.jpg",
		price:7000,
		popularity:500,
		url:'',
		shape:'圆形',
		carat:23,
		num:'WJ0015',
		color:'F',
		pure:'VS2',
		MaterialScience:[]
		
	},
	{
		id:1002,
		name:'稀世粉钻-钻戒B',
		service:'稀世粉钻',		
		img:"http://localhost:3000/public/img/class/proposalRing/15719130445db17d54419f2.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/15719130475db17d5727cc4.jpg",
		price:12000,
		popularity:200,
		url:'',
		shape:'圆形',
		pure:'VS1',
		num:'WJ0085',
		color:'F',
		carat:80
	},
	{
		id:1003,
		name:'MY HEART系列-钻戒C',
		service:'MY HEART系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/15719131185db17d9e73732.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/15719131215db17da160be3.jpg",
		price:4850,
		popularity:1200,
		url:'',
		shape:'方形',
		pure:'VS2',
		num:'CA0015',
		color:'A',
		carat:8
	},
	{
		id:1004,
		name:'MY HEART系列-钻戒D',
		service:'MY HEART系列',			
		img:"http://localhost:3000/public/img/class/proposalRing/15719138765db18094ec2b2.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/15719138805db18098468ba.jpg",
		price:9000,
		popularity:850,
		url:'',
		shape:'圆形',
		pure:'Va2',
		num:'CA0077',
		color:'F',
		carat:18
	},
	{
		id:1005,
		name:'BELEVE系列-钻戒E',
		service:'BELEVE系列'	,	
		img:"http://localhost:3000/public/img/class/proposalRing/15719140205db181248a3b2.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/15719140235db18127201e5.jpg",
		price:8000,
		popularity:603,
		url:'',
		shape:'圆形',
		num:'SK0015',
		pure:'Va7',
		color:'B',
		carat:15
	},
	{
		id:1006,
		name:'FOVER系列-钻戒F',	
		service:'FOVER系列',	
		img:"http://localhost:3000/public/img/class/proposalRing/15719140525db18144485ff.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/15719140555db18147230dc.jpg",
		price:3000,
		popularity:500,
		url:'',
		shape:'圆形',
		num:'SK0015',
		pure:'VC7',
		color:'A',
		carat:15
	},
	{
		id:1007,
		name:'LOVE LINE系列-钻戒G',
		service:'LOVE LINE系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/15719142635db18217750d2.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/15719142665db1821a02f47.jpg",
		price:7000,
		popularity:815,
		url:'',
		shape:'方形',
		pure:'Va8',
		num:'SK0010',
		color:'FFF',
		carat:22
	},
	{
		id:1008,
		name:'LOVE LINE系列-钻戒H',
		service:'LOVE LINE系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/15719141575db181adbb5bc.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/15719141605db181b057ba1.jpg",
		price:21070,
		popularity:9900,
		url:'',
		shape:'方形',
		num:'AD0175',
		pure:'cad100',
		color:'D',
		carat:125
	},
	{
		id:1009,
		name:'DR PARIS系列-钻戒I',
		service:'DR PARIS系列',	
		img:"http://localhost:3000/public/img/class/proposalRing/15719142925db182342a847.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/15719142955db182377f6cd.jpg",
		price:37000,
		popularity:900,
		url:'',
		shape:'圆形',
		pure:'va9',
		num:'OQD-15',
		color:'W',
		carat:145
	},
	{
		id:1010,
		name:'DR PARIS系列-钻戒J',
		service:'DR PARIS系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/15719147815db1841d32ad6.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/15719147845db184208163e.jpg",
		price:12300,
		popularity:120,
		url:'',
		shape:'圆形',
		pure:'VS7',
		num:'OQD-16',
		color:'Q',
		carat:80
	},
	{
		id:1011,
		name:'TRUE LOVE系列-钻戒K',
		service:'TRUE LOVE系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/15720041615db2e1412a06e.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/15720041665db2e1463f46e.jpg",
		price:2700,
		popularity:500,
		url:'',
		shape:'心形',
		num:'PacW10',
		pure:'VS5',
		color:'X',
		carat:5
	},
	{
		id:1012,
		name:'TRUE LOVE系列-钻戒L',
		service:'TRUE LOVE系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/15723426135db80b55b24bb.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/wKgc6F38eR-AK95RAAG6SlaoTDo944.jpg",
		price:10500,
		popularity:500,
		url:'',
		shape:'方形',
		num:'X15',
		pure:'100',
		color:'X',
		carat:90
	},
	{
		id:1013,
		name:'WEDDING系列-钻戒M',
		service:'WEDDING系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/wKgc6F4QKKeAeRrPAADtxoxIrEM500.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/wKgc6F4QKK6Ad3c1AADFrevsPi0807.jpg",
		price:43000,
		popularity:1700,
		url:'',
		shape:'心形',
		num:'VkN17',
		pure:'VK7',
		color:'N',
		carat:200
	},
	{
		id:10014,
		name:'WEDDING系列-钻戒N',
		service:'WEDDING系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/wKgc6F5dw0aAN-r-AACtKGuGcvw451.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/wKgc6F5dw02AUliIAACI7DEtR00483.jpg",
		price:37500,
		popularity:1800,
		url:'',
		shape:'心形',
		num:'X17',
		pure:'VAS7',
		carat:140
	},
	{
		id:10015,
		name:'JUST YOU系列-钻戒O',
		service:'JUST YOU系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/wKgc6F5dxX6AX7EpAAC9a4sphS4010.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/wKgc6F5dxYKAQL9BAACrrNYGxk8713.jpg",
		price:9800,
		popularity:220,
		url:'',
		shape:'心形',
		num:'X18',
		pure:'VS9',
		carat:38
	},
	{
		id:10016,
		name:'JUST YOU系列-钻戒P',
		service:'JUST YOU系列',			
		img:"http://localhost:3000/public/img/class/proposalRing/wKgc6F7DNQ2AGvz-AADAfLx--rk413.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/wKgc6F7DNROANw0VAADBH6dK8q8837.jpg",
		price:10059,
		popularity:1100,
		url:'',
		shape:'圆形',
		num:'X20',
		pure:'98',
		carat:40
	},
	{
		id:10017,
		name:'JUST YOU系列-钻戒Q',
		service:'JUST YOU系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/wKgc6F7DNMiAA3NNAACwQZETiqE258.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/wKgc6F7DNMyAfxvjAAC_AxDs3GQ250.jpg",
		price:15900,
		popularity:250,
		url:'',
		shape:'圆形',
		num:'IP15',
		pure:'KT7',
		carat:55
	},
	{
		id:10018,
		name:'JUST YOU系列-钻戒R',
		service:'JUST YOU系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/wKgc6F5xuu-AasFSAAGq4MXkuAM303.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/wKgc6F5xuvWAF2_jAAFw_Jdijm4243.jpg",
		price:12900,
		popularity:1800,
		url:'',
		shape:'圆形',
		num:'IP85',
		pure:'SK10',
		carat:32
	},
	{
		
		id:10019,
		name:'JUST YOU系列-钻戒S',
		service:'JUST YOU系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/wKgc6F5dxX6AX7EpAAC9a4sphS4010.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/wKgc6F5dxYKAQL9BAACrrNYGxk8713.jpg",
		price:42000,
		popularity:170,
		url:'',
		shape:'方形',
		num:'MAC015',
		pure:'C5',
		carat:150
	},
	{
		id:10020,
		name:'JUST YOU系列-钻戒T',
		service:'JUST YOU系列',		
		img:"http://localhost:3000/public/img/class/proposalRing/wKgc6F7DNQ2AGvz-AADAfLx--rk413.jpg",
		rotateImg:"http://localhost:3000/public/img/class/proposalRing/wKgc6F7DNROANw0VAADBH6dK8q8837.jpg",
		price:27000,
		popularity:810,
		num:'MA0005',
		url:'',
		shape:'圆形',
		pure:'V10',
		carat:105
	},

]
//遍历新建数据
propose_ClassRings.forEach(item => {
   var newproposeRing = new propose_ClassRing({
    	proposeClass_Ring:item
    })
//保存数据
    newproposeRing.save(function(err, ret) {
        if (err) {
            console.log("保存失败");
        } else {
            console.log("保存成功:");
            console.log(ret);
        }
    });
})


//导出
module.exports = propose_ClassRing