let questions = [];
let index = 0;

api
  .getQuestions()
  .then(function (data) {
    questions = data;
    show();
  })
  .catch(function (err) {
    box.innerHTML =
      "<p>加载题目失败：" +
      (err.message || "请确认后端已启动") +
      "</p>";
  });

function show() {
  if (!questions.length) {
    box.innerHTML = "<p>暂无题目，请先在数据库中添加题库数据。</p>";
    return;
  }

  let q = questions[index];

  box.innerHTML =
    "<h3>" +
    q.question +
    "</h3>" +
    "<p>A." +
    q.A +
    "</p>" +
    "<p>B." +
    q.B +
    "</p>" +
    "<p>C." +
    q.C +
    "</p>" +
    "<p>D." +
    q.D +
    "</p>" +
    '<button onclick="answer(\'A\')">A</button>' +
    '<button onclick="answer(\'B\')">B</button>' +
    '<button onclick="answer(\'C\')">C</button>' +
    '<button onclick="answer(\'D\')">D</button>';
}

function answer(a) {
  let q = questions[index];
  let correct = a === q.answer;

  if (correct) {
    alert("回答正确");
  } else {
    alert("错误\n答案:" + q.answer + "\n解析:" + (q.analysis || "暂无解析"));
  }

  let userId = Auth.getUserId();
  if (!userId) {
    return;
  }

  api
    .saveRecord(userId, q.id, correct)
    .catch(function (err) {
      console.warn("保存记录失败:", err.message);
    });
}

function next() {
  index++;

  if (index >= questions.length) {
    alert("题目完成");
    return;
  }

  show();
}
