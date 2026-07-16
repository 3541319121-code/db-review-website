const express=require("express");

const router=express.Router();

const db=require("../database");




//获取用户错题


router.get("/:userid",

(req,res)=>{


let id=req.params.userid;



db.query(

`

SELECT

questions.*,

wrong_questions.wrong_count,

wrong_questions.status


FROM wrong_questions


JOIN questions

ON wrong_questions.question_id
=
questions.id


WHERE user_id=?

`,

[id],


(err,result)=>{


res.json(result);


}

);


});





//删除错题


router.delete("/:id",

(req,res)=>{


db.query(

`

DELETE FROM wrong_questions

WHERE id=?

`,

[
req.params.id
]


);



res.json({

msg:"删除成功"

});


});





//标记掌握


router.put("/:id",

(req,res)=>{


db.query(

`

UPDATE wrong_questions

SET status='已掌握'

WHERE id=?

`,

[
req.params.id
]

);



res.json({

msg:"更新成功"

});


});




module.exports=router;