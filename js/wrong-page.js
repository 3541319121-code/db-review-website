/* =================================
   错题本
================================= */

var remoteWrongs = [];
var localWrongs = [];

window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
  renderUserNav();
  loadWrongs();
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
  loadWrongs();
}

function loadWrongs() {
  localWrongs = JSON.parse(localStorage.getItem("wrong") || "[]");
  var userId = Auth.getUserId();
  if (userId) {
    api.getWrongQuestions(userId)
      .then(function(data) {
        remoteWrongs = data || [];
        renderList();
      })
      .catch(function() {
        remoteWrongs = [];
        renderList();
      });
  } else {
    remoteWrongs = [];
    renderList();
  }
}

function renderList() {
  var list = document.getElementById("wrongList");
  var count = document.getElementById("wrongCount");
  if (!list || !count) return;

  var total = remoteWrongs.length + localWrongs.length;
  count.textContent = total;

  var html = "";
  remoteWrongs.forEach(function(q) {
    html +=
      '<li>' +
      '<div class="info">' +
      '<div><b>' + (q.question || "题目") + '</b></div>' +
      '<div class="meta">答错 ' + (q.wrong_count || 1) + ' 次 | 状态：' + (q.status || "未掌握") + '</div>' +
      '</div>' +
      '<div class="flex gap-2">' +
      '<button class="btn btn-primary btn-sm" onclick="masterWrong(' + q.id + ')">掌握</button>' +
      '<button class="btn btn-secondary btn-sm" onclick="removeRemoteWrong(' + q.id + ')">删除</button>' +
      '</div>' +
      '</li>';
  });

  localWrongs.forEach(function(x, i) {
    html +=
      '<li>' +
      '<div class="info"><span class="tag">本地</span> ' + x + '</div>' +
      '<button class="btn btn-secondary btn-sm" onclick="removeLocalWrong(' + i + ')">删除</button>' +
      '</li>';
  });

  if (!html) {
    html = '<li class="text-muted" style="justify-content:center;">暂无错题</li>';
  }
  list.innerHTML = html;
}

function removeLocalWrong(i) {
  var list = JSON.parse(localStorage.getItem("wrong") || "[]");
  list.splice(i, 1);
  localStorage.setItem("wrong", JSON.stringify(list));
  loadWrongs();
}

function removeRemoteWrong(id) {
  api.deleteWrong(id)
    .then(function() { loadWrongs(); })
    .catch(function(err) { alert("删除失败：" + (err.message || "未知错误")); });
}

function masterWrong(id) {
  api.masterWrong(id)
    .then(function() { loadWrongs(); })
    .catch(function(err) { alert("更新失败：" + (err.message || "未知错误")); });
}

function clearLocalWrongs() {
  localStorage.removeItem("wrong");
  loadWrongs();
}
