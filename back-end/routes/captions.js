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
            error: 'your captions could not be retrieved',
            err,
        })
    }
});

router.get('/:caption_id', async (req, res, next) => {
    console.log(`you've hit captions/caption_id`)
    try {
        let caption = await db.one(`
            SELECT *
            FROM captions
            WHERE id = ${req.params.caption_id}
        `)

        res.json({
            caption,
        })
    } catch(err) {
        res.json({
            error: 'your caption could not be retrieved',
            err,
        })
    }
})

// router.get('/hashta')


module.exports = router;
