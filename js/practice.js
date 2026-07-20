/* =================================
   在线刷题
================================= */

var questions = [];
var index = 0;

window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
  renderUserNav();

  api.getQuestions()
    .then(function(data) {
      questions = data || [];
      showQuestion();
    })
    .catch(function(err) {
      var box = document.getElementById("questionBox");
      if (box) {
        box.innerHTML = "<p class='text-error'>加载题目失败：" + (err.message || "请确认后端已启动") + "</p>";
      }
    });
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

function showQuestion() {
  var box = document.getElementById("questionBox");
  if (!box) return;
  if (!questions.length) {
    box.innerHTML = "<p class='text-muted'>暂无题目，请先在数据库中添加题库数据。</p>";
    return;
  }
  var q = questions[index];
  box.innerHTML =
    '<div class="mb-2"><span class="tag">' + (index + 1) + "/" + questions.length + '</span> ' +
    (q.chapter ? '<span class="tag tag-success">' + q.chapter + '</span>' : '') + '</div>' +
    '<h3 style="font-size:18px;font-weight:600;margin:0 0 16px;">' + q.question + '</h3>' +
    ['A', 'B', 'C', 'D'].map(function(opt) {
      var val = q[opt];
      if (!val) return "";
      return '<div class="exam-options"><label onclick="answerQuestion(\'' + opt + '\')">' +
        '<input type="radio" name="opt"> <span>' + opt + ". " + val + '</span>' +
        '</label></div>';
    }).join("");
}

function answerQuestion(a) {
  var q = questions[index];
  var correct = a === q.answer;
  if (correct) {
    alert("回答正确！");
  } else {
    alert("回答错误\n正确答案: " + q.answer + "\n解析: " + (q.analysis || "暂无解析"));
  }
  var userId = Auth.getUserId();
  if (userId) {
    api.saveRecord(userId, q.id, correct)
      .catch(function(err) { console.warn("保存记录失败:", err.message); });
  }
}

function nextQuestion() {
  index++;
  if (index >= questions.length) {
    alert("题目已完成，重新开始");
    index = 0;
  }
  showQuestion();
}
