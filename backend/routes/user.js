const express = require("express");
const router = express.Router();
const db = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ msg: "用户名和密码不能为空" });
    }

    const hash = await bcrypt.hash(password, 10);

    await db
      .promise()
      .query("INSERT INTO users (username, password) VALUES (?, ?)", [
        username,
        hash,
      ]);

    res.json({ msg: "注册成功" });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.json({ msg: "用户名已存在" });
    }
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ msg: "用户名和密码不能为空" });
    }

    const [rows] = await db
      .promise()
      .query("SELECT * FROM users WHERE username = ?", [username]);

    if (!rows.length) {
      return res.json({ msg: "用户不存在" });
    }

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      return res.json({ msg: "密码错误" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      config.jwtSecret,
      { expiresIn: "7d" }
    );

    res.json({ msg: "登录成功", token, id: user.id });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
