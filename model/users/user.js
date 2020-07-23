var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
	userName:{
		type:String,
		default:'admin'
	},
	nickName:{
		type:String,
		default:'匿名用户'
	},
	password:{
		type:String,
		required:true
		
	},
	phoneNumber:{
		type:Number,
		required:true
	},
	balance:{
		type:Number,
		default: 30000
	},
	idCard:{
		type:Number,
		required:true		
	},
	shoppingBag:{
		type:Array,
	}
})

module.exports = mongoose.model('User',userSchema)