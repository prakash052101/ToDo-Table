const express =require ('express');
const path = require('path');
const db = require('../database/db');

const router =express.Router();
const postController = require('../controller/postController');

router.post('/create',postController.postTodo);


module.exports=router;