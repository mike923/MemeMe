const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/", async (req, res) => {
  try {
    let likes = await db.any(
      `SELECT * FROM likes`
    );
    res.json({
      data: likes
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: error
    });
  }
});

router.get("/captions/:caption_id", async (req, res) => {
  let caption_id = req.params.caption_id;
  try {
    let likes = await db.any(
      `SELECT * FROM likes WHERE caption_id = ${caption_id}`
    );
    res.json({
      data: likes
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: error
    });
  }
});

router.post("/captions/:caption_id", async (req, res) => {
  let caption_id = req.params.caption_id;
  try {
    let insertQuery = `INSERT into likes(like_value, liker_id, caption_id )
                VALUES($1, $2, $3)`;
    if (!insertQuery) {
      res.json({
        message: "information Missing"
      });
    } else {
      await db.one(insertQuery, [
        req.body.like_value,
        req.body.liker_id,
        caption_id
      ]);
      res.json({
        success: "liked"
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      failed: error
    });
  }
});

//Export
module.exports = router;
