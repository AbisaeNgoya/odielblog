
const express = require("express");
const app = express();
const mongoose = require("mongoose");
 app.use(express.json());
 const FoodModel = require("./models/Food");


 



 //connection
 mongoose.connect("mongodb+srv://abisae:16527324@search20.khx5b.mongodb.net/blog?retryWrites=true&w=majority", {
     useNewUrlParser:true,
     useUnifiedTopology:true,
 }).then(console.log("Connected")).catch((err)=>console.log(err));

app.get("/", async(req,res)=>{
    const food = new FoodModel({foodname:"aple"});

    try{
        await food.save()
    }catch(err){
        console.log(err)
    }

})


app.listen("5000", () =>{
    console.log("Backend  server is running");
})


/*

const express = require("express");
const app = express();
const mongoose = require("mongoose");
 app.use(express.json());


 const authRoute = require("./routes/auth");



 //connection
 mongoose.connect("mongodb+srv://abisae:16527324@search20.khx5b.mongodb.net/blog?retryWrites=true&w=majority", {
     useNewUrlParser:true,
     useUnifiedTopology:true,
 }).then(console.log("Connected")).catch((err)=>console.log(err));

app.use("/auth",authRoute );



app.listen("5000", () =>{
    console.log("Backend  server is running");
})*/