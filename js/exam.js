let questions=[];


let index=0;



fetch(

"http://localhost:3000/questions"

)

.then(res=>res.json())

.then(data=>{


questions=data;


show();


});





function show(){


let q=
questions[index];


box.innerHTML=`

<h3>
${q.question}
</h3>


<p>
A.${q.A}
</p>

<p>
B.${q.B}
</p>


<p>
C.${q.C}
</p>


<p>
D.${q.D}
</p>


<button onclick="answer('A')">
A
</button>


<button onclick="answer('B')">
B
</button>


<button onclick="answer('C')">
C
</button>


<button onclick="answer('D')">
D
</button>


`;

}





function answer(a){


let q=
questions[index];


let correct=
a==q.answer;



if(correct){

alert("回答正确");


}

else{


alert(

"错误\n答案:"
+q.answer+
"\n解析:"
+q.analysis

);


}



//保存记录


let user_id=
localStorage.getItem(
"user_id"
);



fetch(

"http://localhost:3000/record",

{


method:"POST",


headers:{

"Content-Type":
"application/json"

},


body:JSON.stringify({

user_id:user_id,

question_id:q.id,

is_correct:correct

})


}


);



}





function next(){


index++;


if(index>=questions.length){

alert(
"题目完成"
);

return;

}


show();


}