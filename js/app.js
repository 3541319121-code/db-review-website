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

renderUser();

loadDashboard();


});





/* =================================
   用户状态与认证
================================= */

function renderUser() {
  var userArea = document.getElementById("userArea");
  if (!userArea) return;

  if (Auth.isLoggedIn()) {
    var username = Auth.getUserId();
    userArea.innerHTML =
      '<span class="navbar-text me-2">用户 ' + username + '</span>' +
      '<button class="btn btn-outline-danger btn-sm" onclick="logout()">退出</button>';
  } else {
    userArea.innerHTML =
      '<button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#authModal">登录 / 注册</button>';
  }
}

function logout() {
  Auth.clearSession();
  renderUser();
  loadDashboard();
  alert("已退出登录");
}

function loadDashboard() {
  var box = document.getElementById("dashboardContent");
  if (!box) return;

  var userId = Auth.getUserId();
  if (!userId) {
    box.innerHTML = "<p class='text-muted'>登录后查看学习数据</p>";
    return;
  }

  box.innerHTML = "<p class='text-muted'>加载中...</p>";

  api.getDashboard(userId)
    .then(function (data) {
      var total = data.total || 0;
      var rate = data.rate || 0;
      box.innerHTML =
        '<div class="mb-2">总答题数：<b>' + total + '</b></div>' +
        '<div class="mb-2">正确率：<b>' + rate + '%</b></div>' +
        '<div class="progress">' +
        '<div class="progress-bar" style="width:' + rate + '%">' + rate + '%</div>' +
        '</div>';
    })
    .catch(function () {
      box.innerHTML = "<p class='text-danger'>加载失败</p>";
    });
}

function showAuthTip(msg) {
  var tip = document.getElementById("authTip");
  if (tip) {
    tip.textContent = msg;
    tip.style.display = "block";
  }
}

function hideAuthTip() {
  var tip = document.getElementById("authTip");
  if (tip) {
    tip.style.display = "none";
  }
}

function closeAuthModal() {
  var modalEl = document.getElementById("authModal");
  if (modalEl) {
    var modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }
}

function register() {
  hideAuthTip();
  api
    .register(username.value, password.value)
    .then(function (data) {
      if (data.msg && data.msg.indexOf("成功") !== -1) {
        showAuthTip(data.msg + "，请登录");
      } else {
        showAuthTip(data.msg || "注册失败");
      }
    })
    .catch(function (err) {
      showAuthTip(err.message || "注册失败");
    });
}

function login() {
  hideAuthTip();
  api
    .login(username.value, password.value)
    .then(function (data) {
      if (data.token) {
        Auth.setSession(data.token, data.id);
        closeAuthModal();
        renderUser();
        loadDashboard();
        username.value = "";
        password.value = "";
      } else {
        showAuthTip(data.msg || "登录失败");
      }
    })
    .catch(function (err) {
      showAuthTip(err.message || "登录失败");
    });
}


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

${item[1].map(x=>`<li class="knowledge-item" onclick="showKnowledge('${x}')" style="cursor:pointer;">${x}</li>`).join("")}

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

const knowledgeBase = {
  "数据库概念": "数据库（Database）是长期存储在计算机内、有组织的、可共享的数据集合。数据库中的数据按一定的数据模型组织、描述和存储，具有较小的冗余度、较高的数据独立性和易扩展性。",
  "数据模型": "数据模型是对现实世界数据特征的抽象。常用的数据模型包括层次模型、网状模型、关系模型和面向对象模型。关系模型是目前最重要的一种数据模型。",
  "DBMS": "数据库管理系统（Database Management System，DBMS）是位于用户与操作系统之间的一层数据管理软件，用于科学地组织和存储数据、高效地获取和维护数据。",
  "数据库体系结构": "数据库系统通常采用三级模式结构：外模式（用户模式）、模式（逻辑模式）和内模式（存储模式）。两级映像（外模式/模式映像和模式/内模式映像）保证了数据的逻辑独立性和物理独立性。",
  "数据独立性": "数据独立性包括物理独立性和逻辑独立性。物理独立性指内模式改变时模式不变；逻辑独立性指模式改变时外模式不变。",
  "关系模型": "关系模型由数据结构、关系操作和完整性约束三部分组成。数据结构是二维表；关系操作包括选择、投影、连接等；完整性约束包括实体完整性、参照完整性和用户定义完整性。",
  "主键": "主键（Primary Key）是能唯一标识关系中每个元组的一个或一组属性。主键值不能为空，也不能重复。",
  "外键": "外键（Foreign Key）是一个关系中的一组属性，它引用另一个关系的主键。外键用于建立表与表之间的关联，保证参照完整性。",
  "完整性约束": "完整性约束包括实体完整性（主键非空且唯一）、参照完整性（外键要么为空，要么等于被引用关系的主键值）和用户定义完整性（针对具体应用的业务规则）。",
  "关系代数": "关系代数是一种抽象的查询语言，用对关系的运算来表达查询。基本运算包括：选择（σ）、投影（π）、并（∪）、差（−）、笛卡尔积（×）以及连接（⋈）等。",
  "DDL": "数据定义语言（Data Definition Language）用于定义数据库结构，包括 CREATE、ALTER、DROP 等语句。",
  "DML": "数据操纵语言（Data Manipulation Language）用于操作数据，包括 SELECT、INSERT、UPDATE、DELETE 等语句。",
  "DCL": "数据控制语言（Data Control Language）用于权限管理，包括 GRANT 和 REVOKE 语句。",
  "SELECT查询": "SELECT 是 SQL 中最常用的语句，用于从表中检索数据。基本语法：SELECT 列名 FROM 表名 WHERE 条件 GROUP BY 分组 HAVING 分组条件 ORDER BY 排序。",
  "连接查询": "连接查询用于从多个表中检索相关数据。常用连接类型：INNER JOIN（内连接）、LEFT JOIN（左外连接）、RIGHT JOIN（右外连接）、FULL JOIN（全外连接）。",
  "子查询": "子查询是嵌套在另一个查询中的 SELECT 语句。子查询可以出现在 WHERE、FROM、SELECT 子句中，用于实现更复杂的查询逻辑。",
  "ER模型": "实体-联系模型（Entity-Relationship Model）是概念设计阶段使用的主要工具。包含实体（矩形）、属性（椭圆）和联系（菱形）三种基本元素。",
  "概念设计": "概念设计阶段的目标是建立一个反映现实世界的概念模型，独立于具体的 DBMS。常用工具是 E-R 图。",
  "逻辑设计": "逻辑设计阶段将概念模型转换为特定 DBMS 支持的数据模型（如关系模型）。主要工作包括将 E-R 图转换为关系模式、规范化处理等。",
  "物理设计": "物理设计阶段为逻辑数据模型选取最适合应用环境的物理结构，包括确定存储结构、索引策略、数据存放位置等。",
  "函数依赖": "函数依赖是关系模式内属性之间的一种约束关系。若属性集 X 的值能唯一确定属性集 Y 的值，则称 Y 函数依赖于 X，记作 X → Y。",
  "候选键": "候选键是能唯一标识元组的最小属性集。一个关系可以有多个候选键，从中选择一个作为主键。",
  "1NF": "第一范式（1NF）要求关系的每个属性都是原子值，即不可再分。",
  "2NF": "第二范式（2NF）在满足 1NF 的基础上，消除非主属性对主键的部分函数依赖。",
  "3NF": "第三范式（3NF）在满足 2NF 的基础上，消除非主属性对主键的传递函数依赖。",
  "BCNF": "BCNF（Boyce-Codd 范式）是比 3NF 更强的范式。要求对于每个函数依赖 X → Y，X 都是超键。",
  "ACID": "事务的四大特性：原子性（Atomicity，要么全做要么全不做）、一致性（Consistency，事务执行结果必须使数据库从一个一致性状态变到另一个一致性状态）、隔离性（Isolation，并发事务互不干扰）、持久性（Durability，事务一旦提交，对数据库的改变是永久的）。",
  "并发控制": "并发控制是数据库管理系统为了正确调度并发事务，保证事务隔离性而采用的技术。常用方法包括封锁、时间戳、乐观并发控制等。",
  "封锁协议": "常用的封锁协议包括：一级封锁协议（修改前加 X 锁，事务结束释放，防止丢失修改）、二级封锁协议（一级基础上，读取前加 S 锁，读完后释放，防止读脏数据）、三级封锁协议（二级基础上，S 锁事务结束释放，防止不可重复读）。",
  "死锁": "死锁是两个或多个事务相互等待对方释放锁，导致所有事务都无法继续执行的现象。预防和解决方法包括：一次封锁法、顺序封锁法、超时法、等待图法等。"
};




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
  var content = knowledgeBase[n[0]] || n[1];
  document.getElementById("mindInfo").innerHTML = "<b>" + n[0] + "</b><br><p>" + content + "</p>";
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

var remoteWrongs = [];
var localWrongs = [];

function addWrong() {
  var list = JSON.parse(localStorage.getItem("wrong") || "[]");
  list.push(sqlQuestions[sqlIndex].q);
  localStorage.setItem("wrong", JSON.stringify(list));
  loadWrong();
}

function loadWrong() {
  localWrongs = JSON.parse(localStorage.getItem("wrong") || "[]");
  var userId = Auth.getUserId();

  document.getElementById("wrongCount").innerHTML = localWrongs.length;
  document.getElementById("wrongList").innerHTML = "<li class='list-group-item text-muted'>加载中...</li>";

  if (userId) {
    api.getWrongQuestions(userId)
      .then(function (data) {
        remoteWrongs = data || [];
        renderWrongList();
      })
      .catch(function () {
        remoteWrongs = [];
        renderWrongList();
      });
  } else {
    remoteWrongs = [];
    renderWrongList();
  }
}

function renderWrongList() {
  var html = "";
  var total = remoteWrongs.length + localWrongs.length;
  document.getElementById("wrongCount").innerHTML = total;

  // 后端错题
  remoteWrongs.forEach(function (q) {
    html += '<li class="list-group-item">' +
      '<div><b>' + (q.question || "题目") + '</b></div>' +
      '<div class="small text-muted">答错 ' + (q.wrong_count || 1) + ' 次 | 状态：' + (q.status || "未掌握") + '</div>' +
      '<div class="mt-1">' +
      '<button class="btn btn-success btn-sm" onclick="masterWrong(' + q.id + ')">标记掌握</button> ' +
      '<button class="btn btn-danger btn-sm" onclick="removeRemoteWrong(' + q.id + ')">删除</button>' +
      '</div>' +
      '</li>';
  });

  // 本地错题（遗留数据）
  localWrongs.forEach(function (x, i) {
    html += '<li class="list-group-item">' +
      '<span class="badge bg-secondary me-2">本地</span>' + x +
      '<button class="btn btn-danger btn-sm float-end" onclick="removeLocalWrong(' + i + ')">删除</button>' +
      '</li>';
  });

  if (!html) {
    html = '<li class="list-group-item text-muted">暂无错题</li>';
  }

  document.getElementById("wrongList").innerHTML = html;
}

function removeLocalWrong(i) {
  var list = JSON.parse(localStorage.getItem("wrong") || "[]");
  list.splice(i, 1);
  localStorage.setItem("wrong", JSON.stringify(list));
  loadWrong();
}

function removeRemoteWrong(id) {
  api.deleteWrong(id)
    .then(function () {
      loadWrong();
    })
    .catch(function (err) {
      alert("删除失败：" + (err.message || "未知错误"));
    });
}

function masterWrong(id) {
  api.masterWrong(id)
    .then(function () {
      loadWrong();
    })
    .catch(function (err) {
      alert("更新失败：" + (err.message || "未知错误"));
    });
}

function showKnowledge(name) {
  var content = knowledgeBase[name] || "暂无详细内容";
  var box = document.getElementById("mindInfo");
  box.innerHTML = "<b>" + name + "</b><br><p>" + content + "</p>";
  box.scrollIntoView({ behavior: "smooth", block: "center" });
}

function searchKnowledge() {
  var keyword = document.getElementById("searchInput").value.trim();
  if (!keyword) {
    // 重置所有高亮
    document.querySelectorAll(".knowledge-item").forEach(function (el) {
      el.style.backgroundColor = "";
    });
    document.querySelectorAll(".node").forEach(function (el) {
      el.style.backgroundColor = "#0066ff";
    });
    return;
  }

  var found = false;

  // 搜索大纲
  document.querySelectorAll(".knowledge-item").forEach(function (el) {
    if (el.textContent.indexOf(keyword) !== -1) {
      el.style.backgroundColor = "#fff3cd";
      if (!found) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        found = true;
      }
    } else {
      el.style.backgroundColor = "";
    }
  });

  // 搜索思维导图节点
  document.querySelectorAll(".node").forEach(function (el) {
    if (el.textContent.indexOf(keyword) !== -1) {
      el.style.backgroundColor = "#ff7a00";
      if (!found) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        found = true;
      }
    } else {
      el.style.backgroundColor = el.classList.contains("center-node") ? "#ff7a00" : "#0066ff";
    }
  });

  if (!found) {
    alert("未找到匹配的知识点");
  }
}
