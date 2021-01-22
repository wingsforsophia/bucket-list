const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload');

const http = require('http').Server(app);
const io = require('./io');
io.attach(http);



require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const tripsRouter = require('./routes/trips')
const itemsRouter = require('./routes/items')
const apiRouter = require('./routes/api')
<<<<<<< HEAD
const chatRouter = require('./routes/chat');
=======
const discussionRouter = require('./routes/discussionBoard')
const messageBoardRouter = require('./routes/messageBoard')
const profileRouter =require('./routes/profile')
>>>>>>> 6be7ef84d5a66314b14f2b7a74f9f986856a91e2

const cors = require('cors')

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(fileUpload());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/trips', tripsRouter);
app.use('/trips', itemsRouter);
app.use('/pickles', apiRouter);
<<<<<<< HEAD
app.use('/messenger', chatRouter);
=======
app.use('/discussion/:name', discussionRouter)
app.use('/messageBoard', messageBoardRouter)
app.use('/api/profile', profileRouter)
>>>>>>> 6be7ef84d5a66314b14f2b7a74f9f986856a91e2

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});
