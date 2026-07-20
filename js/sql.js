/* =================================
   SQL 训练
================================= */

var sqlQuestions = [
  { t: "基础查询", q: "查询student表所有数据", a: "SELECT * FROM student;" },
  { t: "条件查询", q: "查询年龄大于20岁的学生", a: "SELECT * FROM student WHERE age>20;" },
  { t: "排序", q: "成绩降序排列", a: "SELECT * FROM score ORDER BY score DESC;" },
  { t: "统计", q: "统计学生数量", a: "SELECT COUNT(*) FROM student;" },
  { t: "连接", q: "查询学生成绩", a: "SELECT * FROM student JOIN score ON student.id=score.id;" },
  { t: "删除", q: "删除id=1的数据", a: "DELETE FROM student WHERE id=1;" },
  { t: "更新", q: "修改年龄", a: "UPDATE student SET age=22 WHERE id=1;" },
  { t: "视图", q: "创建视图", a: "CREATE VIEW v_student AS SELECT * FROM student;" },
  { t: "事务", q: "提交事务", a: "COMMIT;" },
  { t: "回滚", q: "回滚事务", a: "ROLLBACK;" }
];

var sqlIndex = 0;

window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
  renderUserNav();
  loadSQL();
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

function loadSQL() {
  var q = sqlQuestions[sqlIndex];
  var tagEl = document.getElementById("sqlTag");
  var qEl = document.getElementById("sqlQuestion");
  var iEl = document.getElementById("sqlIndex");
  var input = document.getElementById("sqlInput");
  var ans = document.getElementById("sqlAnswer");

  if (tagEl) tagEl.textContent = q.t;
  if (qEl) qEl.textContent = q.q;
  if (iEl) iEl.textContent = (sqlIndex + 1) + "/" + sqlQuestions.length;
  if (input) input.value = "";
  if (ans) { ans.style.display = "none"; ans.innerHTML = ""; }
}

function showSQLAnswer() {
  var ans = sqlQuestions[sqlIndex].a;
  var box = document.getElementById("sqlAnswer");
  if (box) {
    box.style.display = "block";
    box.innerHTML = "<b>答案：</b>" + ans;
  }
}

function nextSQL() {
  sqlIndex++;
  if (sqlIndex >= sqlQuestions.length) sqlIndex = 0;
  loadSQL();
}

function addWrong() {
  var list = JSON.parse(localStorage.getItem("wrong") || "[]");
  list.push(sqlQuestions[sqlIndex].q);
  localStorage.setItem("wrong", JSON.stringify(list));
  alert("已加入错题本");
}
