const express=require("express");

const router=express.Router();

const db=require("../database");



router.get("/:userid",

(req,res)=>{


let id=req.params.userid;



let data={};



//完成题数

db.query(

`

SELECT COUNT(*) total

FROM study_record

WHERE user_id=?

`,

[id],

(err,r)=>{


data.total=
r[0].total;



});





//正确率


db.query(

`

SELECT

AVG(is_correct)*100 rate

FROM study_record

WHERE user_id=?

`,

[id],

(err,r)=>{


data.rate=
Math.round(
r[0].rate||0
);



res.json(data);


});


});



module.exports=router;