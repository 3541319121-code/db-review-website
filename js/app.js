/* =================================
   页面初始化
================================= */


window.addEventListener("load",()=>{


document.getElementById("loader").style.display="none";


loadOutline();

loadMindMap();

loadSQL();

loadWrong();


initCharts();


});





/* =================================
   深色模式
================================= */


function toggleDark(){

document.body.classList.toggle("dark");


localStorage.setItem(

"dark",

document.body.classList.contains("dark")

);


}



if(localStorage.getItem("dark")=="true"){

document.body.classList.add("dark");

}







/* =================================
   考试大纲
================================= */


const outline=[


[
"数据库系统基础",
[
"数据库概念",
"数据模型",
"DBMS",
"数据库体系结构",
"数据独立性"
]
],



[
"关系数据库",
[
"关系模型",
"主键",
"外键",
"完整性约束",
"关系代数"
]
],



[
"SQL语言",
[
"DDL",
"DML",
"DCL",
"SELECT查询",
"连接查询",
"子查询"
]
],



[
"数据库设计",
[
"ER模型",
"概念设计",
"逻辑设计",
"物理设计"
]
],



[
"规范化理论",
[
"函数依赖",
"候选键",
"1NF",
"2NF",
"3NF",
"BCNF"
]
],



[
"事务管理",
[
"ACID",
"并发控制",
"封锁协议",
"死锁"
]
]


];




function loadOutline(){


let html="";


outline.forEach((item,i)=>{


html+=`

<div class="accordion-item">

<h2 class="accordion-header">

<button class="accordion-button collapsed"

data-bs-toggle="collapse"

data-bs-target="#o${i}">

模块${i+1}

${item[0]}

</button>

</h2>



<div id="o${i}"

class="accordion-collapse collapse">


<div class="accordion-body">

<ul>

${item[1].map(x=>`<li>${x}</li>`).join("")}

</ul>


</div>

</div>


</div>

`;

});


document.getElementById("outlineBox").innerHTML=html;


}








/* =================================
   思维导图
================================= */


const mindData=[


[
"数据库基础",
"数据库组成、DBMS、体系结构"
],


[
"SQL",
"查询、更新、连接"
],


[
"设计",
"ER模型转换"
],


[
"规范化",
"函数依赖和范式"
],


[
"事务",
"ACID和并发"
],


[
"安全",
"权限和审计"
]


];




function loadMindMap(){


let box=document.getElementById("mindmap");


mindData.forEach((n,i)=>{


let angle=i*60;


let x=

200*Math.cos(angle*Math.PI/180);


let y=

160*Math.sin(angle*Math.PI/180);



let div=document.createElement("div");


div.className="node";


div.style.transform=

`translate(${x}px,${y}px)`;


div.innerHTML=n[0];


div.onclick=()=>{


document.getElementById("mindInfo").innerHTML=

`

<b>${n[0]}</b>

：

${n[1]}

`;

};


box.appendChild(div);


});


}









/* =================================
 SQL训练
================================= */


const sqlQuestions=[


{
t:"基础查询",
q:"查询student表所有数据",
a:"SELECT * FROM student;"
},


{
t:"条件查询",
q:"查询年龄大于20岁的学生",
a:"SELECT * FROM student WHERE age>20;"
},


{
t:"排序",
q:"成绩降序排列",
a:"SELECT * FROM score ORDER BY score DESC;"
},


{
t:"统计",
q:"统计学生数量",
a:"SELECT COUNT(*) FROM student;"
},


{
t:"连接",
q:"查询学生成绩",
a:"SELECT * FROM student JOIN score ON student.id=score.id;"
},


{
t:"删除",
q:"删除id=1的数据",
a:"DELETE FROM student WHERE id=1;"
},


{
t:"更新",
q:"修改年龄",
a:"UPDATE student SET age=22 WHERE id=1;"
},


{
t:"视图",
q:"创建视图",
a:"CREATE VIEW v_student AS SELECT * FROM student;"
},


{
t:"事务",
q:"提交事务",
a:"COMMIT;"
},


{
t:"回滚",
q:"回滚事务",
a:"ROLLBACK;"
}


];



let sqlIndex=0;



function loadSQL(){


let q=sqlQuestions[sqlIndex];


document.getElementById("sqlTitle").innerHTML=q.t;


document.getElementById("sqlQuestion").innerHTML=q.q;


document.getElementById("sqlIndex").innerHTML=

`${sqlIndex+1}/${sqlQuestions.length}`;


document.getElementById("sqlAnswer").style.display="none";


}



function showSQLAnswer(){


let answer=

sqlQuestions[sqlIndex].a;


let box=

document.getElementById("sqlAnswer");


box.style.display="block";


box.innerHTML=

"<b>答案：</b>"+answer;


}



function nextSQL(){


sqlIndex++;


if(sqlIndex>=sqlQuestions.length){

sqlIndex=0;

}


loadSQL();


}









/* =================================
 错题本
================================= */


function addWrong(){


let list=

JSON.parse(

localStorage.getItem("wrong")||"[]"

);



list.push(

sqlQuestions[sqlIndex].q

);



localStorage.setItem(

"wrong",

JSON.stringify(list)

);



loadWrong();


}





function loadWrong(){


let list=

JSON.parse(

localStorage.getItem("wrong")||"[]"

);



document.getElementById("wrongCount").innerHTML=

list.length;



let html="";


list.forEach((x,i)=>{


html+=`

<li class="list-group-item">

${x}

<button

class="btn btn-danger btn-sm float-end"

onclick="removeWrong(${i})">

删除

</button>

</li>

`;

});


document.getElementById("wrongList").innerHTML=html;


}




function removeWrong(i){


let list=

JSON.parse(

localStorage.getItem("wrong")||"[]"

);


list.splice(i,1);



localStorage.setItem(

"wrong",

JSON.stringify(list)

);



loadWrong();


}







/* =================================
 ECharts
================================= */


function initCharts(){



let c1=

echarts.init(

document.getElementById("chart1")

);



c1.setOption({

title:{
text:"高频考点"
},

xAxis:{

type:"category",

data:[
"SQL",
"规范化",
"设计",
"事务"
]

},

yAxis:{},

series:[{

type:"bar",

data:[
90,
85,
75,
70
]

}]

});






let c2=

echarts.init(

document.getElementById("chart2")

);



c2.setOption({

title:{
text:"分值比例"
},

series:[{

type:"pie",

data:[

{name:"SQL",value:35},

{name:"理论",value:30},

{name:"设计",value:20},

{name:"事务",value:15}

]

}]

});





let c3=

echarts.init(

document.getElementById("chart3")

);



c3.setOption({

title:{
text:"学习趋势"
},


xAxis:{

data:[
"1月",
"2月",
"3月",
"4月"
]

},


yAxis:{},


series:[{

type:"line",

data:[
40,
55,
70,
85
]

}]

});



}









/* =================================
 模拟考试
================================= */


const examBank=[


{
q:"数据库核心软件是？",
o:[
"DBMS",
"Excel",
"OS",
"Word"
],
a:0
},


{
q:"SQL查询关键字？",
o:[
"SELECT",
"GET",
"FIND",
"OPEN"
],
a:0
},


{
q:"3NF解决？",
o:[
"传递依赖",
"安全",
"权限",
"索引"
],
a:0
}


];



while(examBank.length<30){


examBank.push({

q:"数据库综合题"+examBank.length,

o:[
"A",
"B",
"C",
"D"
],

a:Math.floor(Math.random()*4)

});


}



let examQuestions=[];

let timerValue;

let examTimer;



function startExam(){


examQuestions=

[...examBank]

.sort(()=>Math.random()-0.5)

.slice(0,30);



let html="";



examQuestions.forEach((x,i)=>{


html+=`

<div class="card p-3">


<b>

${i+1}.${x.q}

</b>


${x.o.map((o,j)=>`

<div>

<label>

<input type="radio"

name="q${i}"

value="${j}">

${o}

</label>

</div>

`).join("")}


</div>

`;

});



document.getElementById("examArea").innerHTML=html;


timerValue=3600;


clearInterval(examTimer);


examTimer=setInterval(()=>{


timerValue--;


let m=Math.floor(timerValue/60);

let s=timerValue%60;


document.getElementById("timer").innerHTML=

`${m}:${s<10?"0":""}${s}`;


if(timerValue<=0){

submitExam();

}


},1000);



}






function submitExam(){


clearInterval(examTimer);


let score=0;


examQuestions.forEach((q,i)=>{


let a=document.querySelector(

`input[name=q${i}]:checked`

);



if(a&&Number(a.value)==q.a){

score++;

}


});



let result=

document.getElementById("examResult");



result.style.display="block";


result.innerHTML=

`

完成考试

<br>

得分：

<b>${Math.round(score/30*100)}</b>

分

`;



}


/* =================================
 登录界面
================================= */

const API=
"http://localhost:3000";




//注册

function register(){


fetch(
API+"/user/register",
{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:JSON.stringify({

username:
username.value,

password:
password.value

})

}

)

.then(res=>res.json())

.then(data=>{

alert(data.msg);

});


}




//登录


function login(){


fetch(

API+"/user/login",

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:JSON.stringify({

username:
username.value,

password:
password.value

})

}


)

.then(res=>res.json())

.then(data=>{


if(data.token){


localStorage.setItem(
"token",
data.token
);

localStorage.setItem(

"user_id",
data.id

);

location.href=
"exam.html";


}

else{


alert(data.msg);

}



});


}