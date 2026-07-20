/* =================================
   模拟考试
================================= */

var examQuestions = [];
var examIndex = 0;
var examScore = 0;
var examTimer = null;
var examTimeLeft = 3600;
var examStarted = false;

window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
  renderUserNav();
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

function startExam() {
  if (examStarted) return;
  examStarted = true;
  examScore = 0;
  examIndex = 0;
  examTimeLeft = 3600;

  var btn = document.getElementById("startBtn");
  if (btn) btn.style.display = "none";

  api.getQuestions()
    .then(function(data) {
      examQuestions = data || [];
      if (!examQuestions.length) {
        document.getElementById("examArea").innerHTML = "<p class='text-muted'>暂无题目，请先添加题库数据。</p>";
        return;
      }
      showExamQuestion();
      startTimer();
    })
    .catch(function() {
      document.getElementById("examArea").innerHTML = "<p class='text-error'>加载题目失败</p>";
    });
}

function startTimer() {
  examTimer = setInterval(function() {
    examTimeLeft--;
    var m = Math.floor(examTimeLeft / 60);
    var s = examTimeLeft % 60;
    var el = document.getElementById("timer");
    if (el) el.textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    if (examTimeLeft <= 0) {
      clearInterval(examTimer);
      submitExam();
    }
  }, 1000);
}

function showExamQuestion() {
  var area = document.getElementById("examArea");
  if (!area || !examQuestions.length) return;
  var q = examQuestions[examIndex];
  var html =
    '<div class="mb-2"><span class="tag">' + (examIndex + 1) + "/" + examQuestions.length + '</span></div>' +
    '<h4 class="mb-2">' + (q.question || q.q || "题目") + '</h4>' +
    '<div class="exam-options">' +
    ['A', 'B', 'C', 'D'].map(function(opt) {
      var val = q[opt];
      if (!val) return "";
      return '<label><input type="radio" name="examOpt" value="' + opt + '" onchange="selectExamAnswer(\'' + opt + '\')"> <span>' + opt + ". " + val + '</span></label>';
    }).join("") +
    '</div>';
  area.innerHTML = html;
}

var currentExamAnswer = null;

function selectExamAnswer(opt) {
  currentExamAnswer = opt;
  setTimeout(function() {
    if (currentExamAnswer === examQuestions[examIndex].answer) {
      examScore++;
    }
    examIndex++;
    if (examIndex >= examQuestions.length) {
      submitExam();
    } else {
      showExamQuestion();
    }
  }, 400);
}

function submitExam() {
  if (examTimer) clearInterval(examTimer);
  var total = examQuestions.length || 1;
  var rate = Math.round((examScore / total) * 100);
  var area = document.getElementById("examArea");
  if (area) area.innerHTML = "";
  var res = document.getElementById("examResult");
  if (res) {
    res.style.display = "block";
    res.innerHTML = "考试结束！得分：" + examScore + "/" + total + "（" + rate + "%）";
  }
  examStarted = false;
  var btn = document.getElementById("startBtn");
  if (btn) {
    btn.style.display = "inline-flex";
    btn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> 重新考试';
  }
}
