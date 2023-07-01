const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./database/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


const getRouter = require('./router/getRoute');
const postRouter = require('./router/postRoute');
const deleteRouter = require('./router/deleteRoute');
const updateRouter = require('./router/updateRoute');



app.use(getRouter);
app.use(postRouter);
app.use(deleteRouter);
app.use(updateRouter);

 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    
  });
app.listen(PORT,()=> console.log(`The sever is started at port ${PORT}`));