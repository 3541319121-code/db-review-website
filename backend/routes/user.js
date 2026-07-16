const express=require("express");

const router=express.Router();

const db=require("../database");

const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken");



const SECRET="NCRE_SECRET_KEY";



//注册

router.post("/register",async(req,res)=>{


let {
username,
password
}=req.body;



let hash=
await bcrypt.hash(password,10);



db.query(

"INSERT INTO users(username,password) VALUES(?,?)",

[
username,
hash
],

(err,result)=>{


if(err){

return res.json({
msg:"用户名已存在"
});

}



res.json({

msg:"注册成功"

});


}

);


});





//登录

router.post("/login",(req,res)=>{


let {
username,
password
}=req.body;



db.query(

"SELECT * FROM users WHERE username=?",

[username],

async(err,result)=>{


if(result.length===0){

return res.json({

msg:"用户不存在"

});

}



let user=result[0];


let ok=
await bcrypt.compare(
password,
user.password
);



if(!ok){

return res.json({

msg:"密码错误"

});

}



let token=
jwt.sign(

{
id:user.id,
username:user.username
},

SECRET,

{
expiresIn:"7d"
}

);



res.json({

msg:"登录成功",

token,

id:user.id

});



}

);



});




module.exports=router;