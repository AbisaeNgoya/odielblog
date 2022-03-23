const mongoose = require("mongoose");
const FoodSchema = new mongoose.Schema({
    usernaame:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("Food", FoodSchema);