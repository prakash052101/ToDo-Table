const path = require('path');
const express = require('express');
const router = express.Router();

const getController = require('../controller/getController');

router.get('/get', getController.getTodo);

module.exports=router;
