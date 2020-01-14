
const express = require('express');
const db = require('./db.js')
const router = express.Router();


/* GET all photos listing. */
router.get('/all', async (req, res, next) => {
  console.log('Getting all photos. Please standby')
  try{
    let photos = await db.any('SELECT * FROM photos WHERE active= true')
    // let photos = await db.any(`
    // SELECT * 
    // FROM captions 
    // INNER JOIN photos
    // ON photos.id = captions.photo_id
    // `)
    // photos = photos.map(async (photo) => {
    //   photo.comments = await db.any(`
    //     SELECT * 
    //     FROM captions 
    //     WHERE photo_id='${photo.id}'
    //     AND active=true
    //   `)
    //   console.log('123412341234', photo)
    //   // return photo
    // })
    // console.log('photos', photos)
    res.json({
      payload: photos,
      message: 'Success photos received',
      success: true,
    })
  } catch (error) {
    res.json({
      message: 'Error something went wrong',
      success: false
    })
    console.log('err',error)
  }
});


router.get('/user/:poster_id', async (req, res, next) => {
  console.log('Getting photo by poster id. Please standby')
 
  const {poster_id} = req.params
  try{
    const photos = await db.any(`SELECT * FROM photos WHERE poster_id = $1 AND active = true`, [poster_id])
    res.json ({
      payload: photos,
      message: 'Success getting photo',
      success: true
    })
  } catch(error){
    res.json({
      message: 'Error something went wrong',
      success: false
    })
    console.log('err', error)
  }
})

router.get('/caption/:caption_id', async (req, res, next) => {
  console.log('Getting photo by caption_id')

  const {caption_id} = req.params
  try{
    const photos = await db.any(`SELECT * FROM photos WHERE caption_id = $1 AND active = true`, [caption_id])
    res.json({
      payload: photos,
      message: 'Success getting photo',
      success: true
    })
  } catch(error){
    res.json({
      message: 'Error something went wrong',
      success: false
    })
  }
})

// router.post('/upload/:poster_id', async (req, res, next) => {
//   const {poster_id} = req.params
//   const {picture_url, date_posted} = req.body
//   const inputQuery = `INSERT INTO photos (poster_id, picture_url, date_posted, active) VALUES($1, $2, $3, $4)`
//   console.log('Adding photo', poster_id, picture_url, date_posted )
//   try {
//       await db.none(inputQuery, [poster_id, picture_url, date_posted, true])
//       res.json({
//           message:'Success. Photo posted',
//           payload: req.body,
//           success: true
//       })
//   } catch(error){
//       res.json({
//           message: 'Failed to add photo',
//           success: false
//       })
//       console.log(error)
//   }
// })

router.patch('/deactivate/:id', async (req, res, next) => {
  console.log('Inactivating photo by id. Please standby')
  const {id} = req.params
  const {active} = req.body
  console.log(req.body)
  try{
     await db.none(`UPDATE photos SET active = $1 WHERE id= $2`, [false, id])
    res.json ({
      message: 'Success removing photo',
      success: true,
      payload: active
    }) 
  } catch (error) {
    res.json({
      message: 'Error something went wrong',
      success: false
    })
    console.log('err', error)
  }
})

module.exports = router;


