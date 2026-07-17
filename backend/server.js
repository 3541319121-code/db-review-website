const express = require("express");
const cors = require("cors");
const config = require("./config");
const { errorHandler, notFoundHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("NCRE数据库学习系统API运行成功");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.use("/questions", require("./routes/question"));
app.use("/user", require("./routes/user"));
app.use("/record", require("./routes/record"));
app.use("/wrong", require("./routes/wrong"));
app.use("/dashboard", require("./routes/dashboard"));

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`服务器启动：http://localhost:${config.port}`);
});
