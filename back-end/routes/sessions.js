const express = require('express');
const router = express.Router();

//pg-promise
const db = require('./config')

router.get('/', async (req, res) => {
    try {
        let session = await db.any(`SELECT * FROM user_session`)
        console.log(session)
        // sessions.session = session
        res.json({
            message: "you've reached sessions",
            session
        })
    } catch(error) {
        console.log(error)
        res.json({
            message: "you've reached an error with sessions",
            error
        })
    }
})

router.post('/', async (req, res) => {
    try {
        let email = req.body.email
        let user_password = req.body.user_password
        await db.none(`DELETE FROM user_session`)
        let user = await db.one(`
            SELECT * 
            FROM users 
            WHERE email = '${email}' 
            AND user_password = '${user_password}'
        `)
        if (user.session) {
            res.status(500).json({error});
            return;
        }
        await db.none(`
            INSERT INTO user_session(useridloggedin)
            VALUES(${user.id})
        `)
        let session = await db.any(`
            SELECT * 
            FROM user_session
        `)
        console.log("user", user)
        console.log(session)
        res.json({
            user,
            email,
            user_password,
            session
        })
    } catch(error) {
        console.log(error)
        res.status(500)
        res.json({
            message: "you've reached an error with sessions",
            error
        })
    }
})

router.delete('/', async (req, res) => {
    try {
        await db.none(`DELETE FROM user_session`)
        res.json({
            message: `You've logged out of your session`
        })
    } catch(error) {
        console.log(error)
        res.status(500)
        res.json({
            message: "you've reached an error with sessions",
            error
        })
    }
})

module.exports = router;