const express = require('express');
const router = express.Router();
const db = require('./db')

router.post('/signup', async  (req, res) => {
    let insertstuff = `
        INSERT INTO users 
            (email, user_password, firstname, displayname, bio, profilePic, active)
        VALUES 
            ($/email/, $/user_password/, $/firstname/, $/displayname/, $/bio/, $/profilePic/, $/active/)
    `

    let payload = {
        email, user_password, firstname, displayname, bio,
    } = req.body
    payload.email = email.toLowerCase()
    payload.active = true
    payload.profilePic = 'https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png'
    console.log(payload, req.body)
    try {
        await db.none(insertstuff, payload)
        let {id} = await db.one(`SELECT id FROM users WHERE email = '${email}'`)
        res.json({
            message: 'succesfully added user',
            id,
            user: payload,
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'there was an error registering user',
            error
        })
    }
})

router.get('/:id', async(req, res, next) => {
    try{
        let user = await db.one(`
            SELECT *
            FROM users
            WHERE id = ${req.params.id}
        `)

        res.json({
            message: user.active ? 'success user is active' : 'user is inactive',
            user,
        })
    } catch(error) {
        res.json({
            message: 'user does not exist',
            error
        })
    }
})

router.patch('/:user_id', async (req, res) => {

    let setQuery = ''
    for (key in req.body) {
        let set = `${key} = '${req.body[key]}'`
        setQuery += set + ','
    }
    setQuery = setQuery.slice(0, setQuery.length - 1)
    
    let insertQuery = `
        UPDATE users
        SET ${setQuery}
        WHERE id = '${req.params.user_id}'
    `

    try {
        await db.none(insertQuery)
        res.json({
            username: `${req.params.user_id}`,
            changes: req.body,
        })
    } catch(error) {
        res.json({
            message: 'There was an error',
            error,
        })
    }
})

router.get('/name/:displayname', async (req, res)=>{
    try {
        let user = await db.one(`
            SELECT * 
            FROM users 
            WHERE displayname = '${req.params.displayname}' 
        `);

        res.json({
            message: user.active ? 'success user is active' : 'user is inactive',
            payload: user,
        })
    } catch (error){
        res.json({
            message: 'user does not exist',
            error
        });
    }
});

router.patch('/deactivate/:user_id', async (req, res)=>{
    let {user_id} = req.params
    
    try{
        let editUser = `
            UPDATE users 
            SET active = false
            WHERE id = '${user_id}'
        `
        console.log(editUser)
        await db.none(editUser)
        res.json({
            message: 'Profile deactivated',
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'There was an error deactivating user',
            error,
        })
    }
    })

router.get("/specific/active", async (req, res) => {
    let {email, user_password} = req.body
    console.log('body', req.body)
    
    try {
        let user = await db.any(`
            SELECT * FROM users 
            WHERE email = $1
            AND user_password = $2
        `, [email, user_password]);

        res.json({
            email, user_password,
            message: "Succcess, Retrieved all the users",
            payload: user,
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: error
        });
    }
});

router.get('/all/active', async (req, res) => {
    console.log('running');
    try {
        let users = await db.any('SELECT * FROM users WHERE active = true')
        res.json({
            payload: users,
            message: "Succcess, Retrieved all active users"
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'error something went wrong. Could not retrieve all users.',
            error
        })
    }
})

router.get('/all/inactive', async (req, res) => {
    console.log('running');
    try {
        let users = await db.any('SELECT * FROM users WHERE active = false')
        res.json({
            payload: users,
            message: "Succcess, Retrieved all inactive the users"
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'error something went wrong. Could not retrieve all users.',
            error
        })
    }
})

module.exports = router;