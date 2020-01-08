
const express = require('express');
const db = require('./db.js')
const router = express.Router();


/* GET users listing. */
router.get('/', async (req, res, next) => {
  console.log('Getting all photos. Please standby')
  try{
    const photos = await db.any('SELECT * FROM photos')
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
router.get('/:id', async (req, res, next) => {
  console.log('Getting photo by id. Please standby')
 
  const {id} = req.params
  try{
    const photos = await db.one(`SELECT * FROM photos WHERE id = $1`, [id])
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

router.post('/', async(req, res, next) => {
  const {poster_id, picture_url, date_posted} = req.body
  const inputQuery = `INSERT INTO photos (poster_id, picture_url, date_posted, active) VALUES($1, $2, $3, $4)`
  console.log('Adding photo', poster_id, picture_url, date_posted )
  try {
      await db.none(inputQuery, [poster_id, picture_url, date_posted, true])
      res.json({
          message:'Success. Photo posted',
          payload: req.body,
          success: true
      })
  } catch(error){
      res.json({
          message: 'Failed to add comment to post',
          success: false
      })
      console.log(error)
  }
})


router.patch('/:id', async (req, res, next) => {
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


