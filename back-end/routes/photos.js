
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
    const photos = await db.one(`SELECT * FROM photos WHERE display_name= $1 AND user_id = $2`, [displayName, id])
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

// router.post('/')
// router.patch('/')

router.delete('/:id', async (req, res, next) => {
  console.log('Deleting photo by id. Please standby')
  const {id} = req.params
  try{
     await db.one('DELETE FROM photos WHERE id = $1 AND deleted = $2', [id, false])
    res.json ({
      message: 'Success removing photo',
      success: true
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


