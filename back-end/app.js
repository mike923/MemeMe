const express = require('express');
const db = require('./routes/db.js')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    }, 

    filename: (req, file, cb) => {
        let name = Date.now() + "-" + file.originalname
        cb(null,name)
    }
})

const upload = multer({storage: storage});

const usersRouter = require('./routes/users');
const photosRouter = require('./routes/photos');
const captionsRouter = require('./routes/captions');
const likesRouter = require('./routes/likes');
const sessionsRouter = require('./routes/sessions');
const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/sessions', sessionsRouter);
app.use('/users', usersRouter);
app.use('/captions', captionsRouter);
app.use('/likes', likesRouter);
app.use('/photos', photosRouter);
app.post('/photos/upload/:poster_id', upload.single('imgURL'), async (req, res, next) => {
    console.log('req file', req.file)
     
    const {poster_id} = req.params
    const {date_posted} = req.body
    const inputQuery = `INSERT INTO photos (poster_id, picture_url, date_posted, active) VALUES ($1, $2, $3, $4)`
    let imgURL = 'http://localhost:3001/' + req.file.path.replace('public/', '')

    try {
        await db.none(inputQuery, [poster_id, imgURL, date_posted, true])
        res.json({
            message: 'Success. Photo uploaded',
            payload: req.body,
            success: true
        })
    } catch(error){
        res.json({
            message: 'Failed to upload photo',
            success: false
        })
        console.log('err', error)
    }
    
})


module.exports = app;