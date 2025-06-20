const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    name : {type : String, required : true},
    phoneNum : {type : String, required : true, unique : true},
    role : {type : String, required : true},
    houseContracted : [{type : mongoose.Schema.Types.ObjectId, ref : 'House'}],
    avatar : String
});

module.exports = mongoose.model('Staff',StaffSchema);