const express=require("express");

const cors=require("cors");


const app=express();


app.use(cors());

app.use(express.json());


//测试接口

app.get("/",(req,res)=>{

res.send(
"NCRE数据库学习系统API运行成功"
);

});


//题库接口

const question=require("./routes/question");


app.use(
"/questions",
question
);

const user=require("./routes/user");


app.use(
"/user",
user
);

const record=require("./routes/record");


app.use(
"/record",
record
);


const wrong=require("./routes/wrong");


app.use(
"/wrong",
wrong
);


const dashboard=require("./routes/dashboard");


app.use(
"/dashboard",
dashboard
);

app.listen(3000,()=>{


console.log(
"服务器启动：http://localhost:3000"
);


});