const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/:userid", async (req, res, next) => {
  try {
    const id = req.params.userid;

    const [totalRows] = await db
      .promise()
      .query(
        "SELECT COUNT(*) AS total FROM study_record WHERE user_id = ?",
        [id]
      );

    const [rateRows] = await db
      .promise()
      .query(
        "SELECT AVG(is_correct) * 100 AS rate FROM study_record WHERE user_id = ?",
        [id]
      );

    res.json({
      total: totalRows[0].total,
      rate: Math.round(rateRows[0].rate || 0),
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
