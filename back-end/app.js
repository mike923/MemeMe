
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
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
​
const upload = multer({storage: storage});

const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const photosRouter = require('./routes/photos');
const captionsRouter = require('./routes/captions');
const likesRouter = require('./routes/likes');
const app = express();

app.use(cors)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
​

app.use('/home', homeRouter);
app.use('/users', usersRouter);
app.use('/photos', photosRouter);
app.use('/captions', captionsRouter);
app.use('/likes', likesRouter);
​
app.post('/upload', upload.single("image"), (req, res, next) => {
    console.log('req.file', req.file)
    console.log('req.body',req.body) 

    let imageUrl = "http:localhost:3001/" + req.file.path.replace('public/', '')

    res.json({ 
        imageUrl: imageUrl,
        message: 'file recieved, image was uploaded to images folder.'
    })
})
​
module.exports = app;