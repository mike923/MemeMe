const express = require('express');
const router = express.Router();
const db = require('./db')







router.get('/all', async (req, res) => {
    console.log('running');
    try {
        let users = await db.any('SELECT * FROM users')
        res.json({
            payload: users,
            message: "Succcess, Retrieved all the users"
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'error something went wrong. Could not retrieve all users.'
        })
    }
})


router.get('/:displaname', async (req, res)=>{
    let displayName = req.params.firstName;
    
try {
    let userQuery = `SELECT * FROM users WHERE displayname = $1`;
   let user = await db.one(userQuery, [displayname]);
   console.log(user);
   if(user.length === 0){
    throw new Error;
   }

    res.json({
        payload: user,
        message: "One USER received"
    })

} 
 catch (error){
   console.log(error)
   res.json({"err": "This user does not exist"});
}
});








router.post('/signup', async  (req, res) => {
    let insertstuff = 
    `INSERT INTO users (email, firstname, displayname, bio, profilePic, active)
     VALUES ($1, $2, $3, $4, $5, $6)`
    
    try {

        await db.none(insertstuff, [req.body.email, req.body.firstname, req.body.displayname, req.body.bio, req.body.profilePic, true])
       
        res.json({
            payload: req.body,
            message: "POST request arrived"
        })
    } catch (error) {
        res.json({
            message: "there was an error registering user"
        })
    }
})




router.delete('/:user_id', async (req, res)=>{
let userId = req.params.user_id 

try{
    let deleteUser =   `DELETE FROM users where id = $1`
    await db.any(deleteUser, [userId])
    res.json({
        message: "This User  was Deleted"
    })
} catch (error) {
    res.json({
        message: "There was an error deleting user"
    })
}
})


module.exports = router;


