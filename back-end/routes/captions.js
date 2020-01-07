const express = require('express');
const router = express.Router();
<<<<<<< HEAD


const db = require('./db')

router.get('/:captions_id', async (req, res) => {
let captions_id = req.params.captions_id
let captions = await db.any(`
    SELECT * FROM comments  WHERE id = ${captions_id}`);

    try {
        if(captions.length === 0){
    throw new Error;
}

        // let getCaptions= (captions)
        res.json({
            payload: captions,
            message: "getting all comments"
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'error something went wrong. Could not retrieve all users.'
        })
    }
})

router.post('/submit', async (req, res)=>{
let photo_id = req.body.photo_id
let commenter_id = req.body.commenter_id;
let body = req.body.body;
 let insertstuff = 
        `INSERT INTO captions(photo_id, commenter_id, body)
         VALUES ($1, $2, $3)`;



try {
    let postQuery = await db.none(insertstuff, [photo_id, commenter_id, body]);
    let registerPost = ([photo_id, commenter_id, commentBody])
    res.json({
        payload: registerPost,
        message:"Success posting comment"
    })
} catch (error){
    res.json({err: error})}

 })







router.patch('/update', async (req, res)=>{
let photo_id = req.body.photo_id;
let commenter_id = req.body.commenter_id;
let commentBody = req.body.body;

let patchQuery = await db.none(`UPDATE comments SET body = $1 WHERE photo_id = $2 AND commenter_id = $3 `, [commentBody, photo_id, commenter_id]);
try{
    let editPost = ([photo_id, commenter_id])
    res.json({
        payload: editPost, 
        message: "Edits to comment were made!"
    })
} catch (err0r){
    res.json({
        error: err0r
    })
}
})




router.delete('/delete', async (req, res)=>{
let captions_id = req.body.captions_id;
let commenter_id = req.body.commenter_id;

let deleteQUERY = await db.none(`DELETE FROM comments WHERE captions_id = $1 AND commenter_id = $2`, [captions_id, commenter_id]);
try{
    let deletePost = ([captions_id, commenter_id])
    res.json(
        {
            payload: deletePost, 
            message: "Comment was deleted!"
        })
    }
catch (error ){
    message: "Was unable to Delete Comment!"
}
})


=======
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
>>>>>>> a4894c33db308c66e52dbae56c5a93611748372e

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
