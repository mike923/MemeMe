const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/active", async (req, res) => {
  try {
    let likes = await db.any(
      `SELECT * FROM likes
      WHERE active = true`
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

router.get("/captions/:caption_id/liker/:liker_id", async (req, res) => {
  let {caption_id, liker_id} = req.params;
  try {
    let likes = await db.any(
      `SELECT * FROM likes WHERE caption_id = ${caption_id} AND liker_id = ${liker_id}`
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
  let {caption_id} = req.params;
  let {like_value, liker_id} = req.body
  try {
    // let likes = await db.any(
    //   `SELECT * FROM likes WHERE caption_id = ${caption_id} AND liker_id = ${liker_id}`
    // );
    let insertQuery = `
    IF NOT EXIST (SELECT * FROM likes WHERE liker_id=$2 AND caption_id=$3)
    INSERT into likes(like_value, liker_id, caption_id )
                VALUES($1, $2, $3)`;
    if (!insertQuery) {
      res.json({
        message: "information Missing"
      });
    } else {
      await db.none(insertQuery, [
        like_value,
        liker_id,
        caption_id
      ]);
      res.json({
        success: "liked",
        liked: like_value,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      error,
      failed: error
    });
  }
});

//Export
module.exports = router;
