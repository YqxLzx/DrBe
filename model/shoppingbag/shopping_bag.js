var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userBagSchema = new Schema({
	userBag:{
		type:Array,
	},

})

var userBag  = mongoose.model('Userbag',userBagSchema)

module.exports = userBag