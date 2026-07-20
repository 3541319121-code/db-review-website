/* =================================
   考试大纲
================================= */

var outline = [
  ["数据库系统基础", ["数据库概念", "数据模型", "DBMS", "数据库体系结构", "数据独立性"]],
  ["关系数据库", ["关系模型", "主键", "外键", "完整性约束", "关系代数"]],
  ["SQL语言", ["DDL", "DML", "DCL", "SELECT查询", "连接查询", "子查询"]],
  ["数据库设计", ["ER模型", "概念设计", "逻辑设计", "物理设计"]],
  ["规范化理论", ["函数依赖", "候选键", "1NF", "2NF", "3NF", "BCNF"]],
  ["事务管理", ["ACID", "并发控制", "封锁协议", "死锁"]]
];

var knowledgeBase = {
  "数据库概念": "数据库（Database）是长期存储在计算机内、有组织的、可共享的数据集合。数据库中的数据按一定的数据模型组织、描述和存储，具有较小的冗余度、较高的数据独立性和易扩展性。",
  "数据模型": "数据模型是对现实世界数据特征的抽象。常用的数据模型包括层次模型、网状模型、关系模型和面向对象模型。关系模型是目前最重要的一种数据模型。",
  "DBMS": "数据库管理系统（Database Management System，DBMS）是位于用户与操作系统之间的一层数据管理软件，用于科学地组织和存储数据、高效地获取和维护数据。",
  "数据库体系结构": "数据库系统通常采用三级模式结构：外模式（用户模式）、模式（逻辑模式）和内模式（存储模式）。两级映像保证了数据的逻辑独立性和物理独立性。",
  "数据独立性": "数据独立性包括物理独立性和逻辑独立性。物理独立性指内模式改变时模式不变；逻辑独立性指模式改变时外模式不变。",
  "关系模型": "关系模型由数据结构、关系操作和完整性约束三部分组成。数据结构是二维表；关系操作包括选择、投影、连接等；完整性约束包括实体完整性、参照完整性和用户定义完整性。",
  "主键": "主键（Primary Key）是能唯一标识关系中每个元组的一个或一组属性。主键值不能为空，也不能重复。",
  "外键": "外键（Foreign Key）是一个关系中的一组属性，它引用另一个关系的主键。外键用于建立表与表之间的关联，保证参照完整性。",
  "完整性约束": "完整性约束包括实体完整性（主键非空且唯一）、参照完整性（外键要么为空，要么等于被引用关系的主键值）和用户定义完整性。",
  "关系代数": "关系代数是一种抽象的查询语言，用对关系的运算来表达查询。基本运算包括：选择（σ）、投影（π）、并（∪）、差（−）、笛卡尔积（×）以及连接（⋈）等。",
  "DDL": "数据定义语言（Data Definition Language）用于定义数据库结构，包括 CREATE、ALTER、DROP 等语句。",
  "DML": "数据操纵语言（Data Manipulation Language）用于操作数据，包括 SELECT、INSERT、UPDATE、DELETE 等语句。",
  "DCL": "数据控制语言（Data Control Language）用于权限管理，包括 GRANT 和 REVOKE 语句。",
  "SELECT查询": "SELECT 是 SQL 中最常用的语句，用于从表中检索数据。基本语法：SELECT 列名 FROM 表名 WHERE 条件 GROUP BY 分组 HAVING 分组条件 ORDER BY 排序。",
  "连接查询": "连接查询用于从多个表中检索相关数据。常用连接类型：INNER JOIN、LEFT JOIN、RIGHT JOIN、FULL JOIN。",
  "子查询": "子查询是嵌套在另一个查询中的 SELECT 语句。子查询可以出现在 WHERE、FROM、SELECT 子句中。",
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
  "ACID": "事务的四大特性：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）。",
  "并发控制": "并发控制是为了正确调度并发事务，保证事务隔离性而采用的技术。常用方法包括封锁、时间戳、乐观并发控制等。",
  "封锁协议": "一级封锁协议防止丢失修改；二级防止读脏数据；三级防止不可重复读。",
  "死锁": "死锁是两个或多个事务相互等待对方释放锁的现象。预防和解决方法包括：一次封锁法、顺序封锁法、超时法等。"
};

var mindData = [
  ["数据库基础", "数据库组成、DBMS、体系结构"],
  ["SQL", "查询、更新、连接"],
  ["设计", "ER模型转换"],
  ["规范化", "函数依赖和范式"],
  ["事务", "ACID和并发"],
  ["安全", "权限和审计"]
];

window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
  renderUserNav();
  loadOutline();
  loadMindMap();
});

function renderUserNav() {
  var area = document.getElementById("userArea");
  if (!area) return;
  if (Auth.isLoggedIn()) {
    area.innerHTML =
      '<span style="color:rgba(255,255,255,0.9);margin-right:8px;">用户 ' + Auth.getUserId() + '</span>' +
      '<button class="btn-solid" onclick="logout()">退出</button>';
  } else {
    area.innerHTML = '';
  }
}

function logout() {
  Auth.clearSession();
  renderUserNav();
}

function loadOutline() {
  var box = document.getElementById("outlineBox");
  if (!box) return;
  var html = "";
  outline.forEach(function(item, i) {
    html +=
      '<div class="accordion-item collapsed" id="acc-' + i + '" onclick="toggleAccordion(' + i + ')">' +
      '<div class="accordion-header">模块' + (i + 1) + ' · ' + item[0] + '</div>' +
      '<div class="accordion-body"><ul>' +
      item[1].map(function(x) {
        return '<li onclick="showKnowledge(event, \'' + x + '\')">' + x + '</li>';
      }).join("") +
      '</ul></div></div>';
  });
  box.innerHTML = html;
}

function toggleAccordion(i) {
  var el = document.getElementById("acc-" + i);
  if (!el) return;
  el.classList.toggle("collapsed");
}

function showKnowledge(e, name) {
  e.stopPropagation();
  var content = knowledgeBase[name] || "暂无详细内容";
  var box = document.getElementById("knowledgeDetail");
  if (box) {
    box.innerHTML = '<b style="color:var(--primary);">' + name + '</b><p style="margin-top:8px;color:var(--body);">' + content + '</p>';
  }
}

function loadMindMap() {
  var box = document.getElementById("mindmap");
  if (!box) return;
  mindData.forEach(function(n, i) {
    var div = document.createElement("div");
    div.className = "mind-node";
    div.textContent = n[0];
    div.onclick = function() {
      showKnowledge({ stopPropagation: function() {} }, n[0]);
    };
    box.appendChild(div);
  });
}

function searchKnowledge() {
  var keyword = document.getElementById("searchInput").value.trim();
  if (!keyword) {
    document.querySelectorAll(".accordion-body li").forEach(function(el) {
      el.style.backgroundColor = "";
      el.style.color = "";
    });
    return;
  }
  var found = false;
  document.querySelectorAll(".accordion-body li").forEach(function(el) {
    if (el.textContent.indexOf(keyword) !== -1) {
      el.style.backgroundColor = "#fff3cd";
      el.style.color = "#1e293b";
      if (!found) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        found = true;
      }
    } else {
      el.style.backgroundColor = "";
      el.style.color = "";
    }
  });
  if (!found) {
    alert("未找到匹配的知识点");
  }
}
