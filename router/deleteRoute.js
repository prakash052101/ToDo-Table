const express = require('express');
const path = require('path');
const db = require('../database/db');
const router= express.Router();
const deleteController = require('../controller/deleteController');


router.delete('/delete/:id',deleteController.deleteTodo);

module.exports=router;