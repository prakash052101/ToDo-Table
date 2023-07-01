const express = require('express');
const path = require('path');
const db = require('../database/db');

const router = express.Router();
const updateController = require('../controller/updateController');

router.get('/get/:id',updateController.getTodo);

//router.put('/put/:id',editController.updateUser);
          
    

module.exports=router;