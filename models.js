const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    tittle:{
        type:String,
        required:true,
        trim:true
    },

    author:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    stock:{
        type:Number,
        default:0
    }
},{timestamp:true});
module.exports = mongoose('Book',bookSchema);