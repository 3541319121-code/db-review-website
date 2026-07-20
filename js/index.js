/* =================================
   首页 / 仪表盘
================================= */

window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
  renderUserNav();
  loadStats();
  initCharts();
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
  loadStats();
  alert("已退出登录");
}

function loadStats() {
  var totalEl = document.getElementById("statTotal");
  var rateEl = document.getElementById("statRate");
  if (!totalEl || !rateEl) return;

  var userId = Auth.getUserId();
  if (!userId) {
    totalEl.textContent = "0";
    rateEl.textContent = "0%";
    return;
  }

  api.getDashboard(userId)
    .then(function(data) {
      totalEl.textContent = data.total || 0;
      rateEl.textContent = (data.rate || 0) + "%";
    })
    .catch(function() {
      totalEl.textContent = "0";
      rateEl.textContent = "0%";
    });
}

/* =================================
   图表
================================= */

function initCharts() {
  var c1 = document.getElementById("chart1");
  var c2 = document.getElementById("chart2");
  var c3 = document.getElementById("chart3");
  if (!c1 || !c2 || !c3 || typeof echarts === "undefined") return;

  echarts.init(c1).setOption({
    title: { text: "题型分布", left: "center", textStyle: { fontSize: 14 } },
    tooltip: {},
    series: [{
      type: "pie",
      radius: "60%",
      data: [
        { value: 35, name: "选择题" },
        { value: 25, name: "填空题" },
        { value: 20, name: "SQL题" },
        { value: 20, name: "综合题" }
      ]
    }]
  });

  echarts.init(c2).setOption({
    title: { text: "章节分值", left: "center", textStyle: { fontSize: 14 } },
    tooltip: {},
    xAxis: { data: ["基础", "SQL", "设计", "规范化", "事务", "安全"], axisLabel: { fontSize: 11 } },
    yAxis: {},
    series: [{ type: "bar", data: [15, 25, 20, 15, 15, 10] }]
  });

  echarts.init(c3).setOption({
    title: { text: "历年通过率", left: "center", textStyle: { fontSize: 14 } },
    tooltip: {},
    xAxis: { data: ["2020", "2021", "2022", "2023", "2024"], axisLabel: { fontSize: 11 } },
    yAxis: {},
    series: [{ type: "line", data: [45, 48, 52, 55, 58], smooth: true }]
  });
}
