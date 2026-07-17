const express = require("express");
const router = express.Router();
const db = require("../database");
const { optionalToken } = require("../middleware/auth");

router.post("/", optionalToken, async (req, res, next) => {
  try {
    let { user_id, question_id, is_correct } = req.body;

    if (!user_id || !question_id) {
      return res.status(400).json({ msg: "缺少 user_id 或 question_id" });
    }

    // 若携带 token，则 user_id 必须与 token 一致
    if (req.user && String(req.user.id) !== String(user_id)) {
      return res.status(403).json({ msg: "无权操作其他用户数据" });
    }

    is_correct = is_correct ? 1 : 0;

    await db
      .promise()
      .query(
        "INSERT INTO study_record (user_id, question_id, is_correct) VALUES (?, ?, ?)",
        [user_id, question_id, is_correct]
      );

    if (!is_correct) {
      const [existing] = await db
        .promise()
        .query(
          "SELECT id FROM wrong_questions WHERE user_id = ? AND question_id = ?",
          [user_id, question_id]
        );

      if (existing.length) {
        await db
          .promise()
          .query(
            "UPDATE wrong_questions SET wrong_count = wrong_count + 1 WHERE user_id = ? AND question_id = ?",
            [user_id, question_id]
          );
      } else {
        await db
          .promise()
          .query(
            "INSERT INTO wrong_questions (user_id, question_id) VALUES (?, ?)",
            [user_id, question_id]
          );
      }
    }

    res.json({ msg: "记录成功" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
