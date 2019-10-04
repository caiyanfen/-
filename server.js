const express =require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const passport=require("passport");
const app=express();

//引入 users.js
const users=require("./routes/api/users");

//DB config
/*let db=require("./config/keys").mongoURL;*/


//使用body-parser中间件
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());


mongoose.connect("mongodb://127.0.0.1/restful").then(()=>{
        console.log("MongoDB Connected");
    }).catch(err=>console.log(err));

//passport 初始化
app.use(passport.initialize());
require('./config/passport')(passport);



// app.get("/",(req,res)=>{
//     res.send("Hello World");
// });

//使用routes
app.use("/api/users",users);




const port=process.env.PORT ||5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
