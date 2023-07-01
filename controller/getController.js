const path = require('path');
const db = require('../database/db');
const todoTable = require('../modules/todo');

async function getTodo(req,res){      
    try{
      const todo = await todoTable.findAll();
      res.json(todo);
    }
    catch(error){
      console.error('Error retrieving orders:', error);
      res.status(500).send('internal server error');
    }
   }

   module.exports={
    getTodo,
   }
   