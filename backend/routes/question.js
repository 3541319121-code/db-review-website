const express=require("express");

const router=express.Router();

const db=require("../database");




//全部题目

router.get("/",(req,res)=>{


db.query(

"SELECT * FROM questions",

(err,result)=>{


res.json(result);


}

);


});





//按照章节查询

router.get("/chapter/:name",(req,res)=>{


let chapter=req.params.name;



db.query(

"SELECT * FROM questions WHERE chapter=?",

[
chapter
],

(err,result)=>{


res.json(result);


}

);


});



module.exports=router;