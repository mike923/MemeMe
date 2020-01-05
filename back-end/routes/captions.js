const express = require('express');
const router = express.Router();
const db = require('./db')

/* GET users listing. */
router.get('/:photo_id', async (req, res, next) => {
  console.log(`you've hit captions/photo_id`)
  try {
    let captions = await db.any(`
      SELECT *
      FROM captions
      WHERE photo_id = ${req.params.photo_id}
    `)

    res.json({
      captions,
    })
  } catch(err) {
    res.json({
      error: 'your captions could not be retrieved'
    })
  }
});

module.exports = router;
