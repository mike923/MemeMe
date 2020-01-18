const express = require("express");
const router = express.Router();

const db = require("./db");

/* GET users listing. */
router.get("/photos/:photo_id", async (req, res, next) => {
  console.log(`you've hit captions/photo_id`);
  try {
    let captions = await db.any(`
            SELECT *
            FROM captions
            WHERE photo_id = ${req.params.photo_id}
        `);

    res.json({
      captions
    });
  } catch (err) {
    res.json({
      error: "your captions could not be retrieved",
      err
    });
  }
});

router.get("/id/:caption_id", async (req, res, next) => {
  console.log(`you've hit captions/caption_id`);
  try {
    let caption = await db.one(`
            SELECT *
            FROM captions
            WHERE id = ${req.params.caption_id}
        `);

    res.json({
      caption
    });
  } catch (err) {
    res.json({
      error: "your caption could not be retrieved",
      err
    });
  }
});

router.get("/search/:text", async (req, res, next) => {
  const {text} = req.params;
  try {
    let captions = await db.any(`
            SELECT picture_url FROM captions
            INNER JOIN photos
            ON photos.id = captions.photo_id
            WHERE LOWER(body) LIKE $/search/
        `, {search: `%${text.toLowerCase()}%`} );
        let photos = {}
        captions.forEach(p => {
          if (!photos[p.photo_id]) photos[p.photo_id] = []
          photos[p.photo_id].push(p)
        })
    res.json({
      payload: captions
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: "your caption could not be retrieved",
      err
    });
  }
});

router.post("/photos", async (req, res) => {
  const {photo_id, commenter_id, body}= req.body;
  try {
    let insertQuery = `INSERT into captions(photo_id, commenter_id, body, active)
                VALUES($1, $2, $3, $4)`;
    if (!insertQuery) {
      res.json({
        message: "information Missing"
      });
    } else {
      await db.one(insertQuery, [
        photo_id,
        commenter_id,
        body,
        true
      ]);
      res.json({
        success: 'caption added'
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      failed: error
    });
  }
});


// router.get('/hashta')


module.exports = router;

//old sql query for search by caption text
// SELECT DISTINCT picture_url FROM photos
//             INNER JOIN captions
//             ON photos.id = captions.photo_id
//             WHERE LOWER(body) LIKE $/search/