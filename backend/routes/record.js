const express=require("express");

const router=express.Router();

const db=require("../database");





//保存答题记录

router.post("/",(req,res)=>{


let {

user_id,

question_id,

is_correct


}=req.body;



//保存学习记录


db.query(

`
INSERT INTO study_record
(user_id,question_id,is_correct)

VALUES(?,?,?)

`,

[
user_id,
question_id,
is_correct
]

);





//如果错误

if(!is_correct){



db.query(

`
SELECT *
FROM wrong_questions
WHERE user_id=?
AND question_id=?

`,

[
user_id,
question_id
],

(err,result)=>{



if(result.length){


db.query(

`
UPDATE wrong_questions

SET wrong_count=
wrong_count+1

WHERE user_id=?
AND question_id=?

`,

[
user_id,
question_id
]


);



}

else{


db.query(

`
INSERT INTO wrong_questions
(user_id,question_id)

VALUES(?,?)

`,

[
user_id,
question_id
]


);


}



}



);



}




res.json({

msg:"记录成功"

});



});




module.exports=router;