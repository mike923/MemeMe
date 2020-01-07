const express = require('express');
const router = express.Router();

const db = require('./db')

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

/* GET users listing. */
router.get('/photo/:photo_id', async (req, res, next) => {
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

router.get('/user/:user_id', async (req, res, next) => {
    console.log(`you've hit captions/user_id`)
    try {
        let captions = await db.any(`
            SELECT *
            FROM captions
            WHERE commenter_id = ${req.params.user_id}
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


router.post('/', async (req, res, next) => {
    console.log(`you've hit captions post`)

    let insertstuff = 
    `INSERT INTO captions (photo_id, commenter_id, body, active)
     VALUES ($1, $2, $3, $4)`
    
    try {

       let captions = await db.none(insertstuff, [req.body.photo_id, req.body.commenter_id, req.body.body, true])

        res.json({
            payload: req.body,
            message: 'new caption created'
        })
    } catch(err) {
        res.json({
            error: 'your captions could not be retrieved',
            err,
        })
    }
});


router.patch('/:caption_id/', async (req, res)=>{
    let caption_id = req.params.caption_id

   

    
    try{
        let deleteCaption = `UPDATE captions SET active = $1 WHERE id = $2`
        await db.none(deleteCaption, [false, caption_id])

        res.json({
            message: "This caption  was updated"
        })

    } catch (error) {
        console.log(error)
        res.json({
            message: "There was an error deleting caption"
        })
    }
    })




// router.get('/hashtag')


module.exports = router;
