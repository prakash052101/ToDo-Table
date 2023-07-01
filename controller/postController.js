const path = require('path');
const db = require('../database/db');
const todoTable = require('../modules/todo');

async function postTodo(req,res){
  try{
    const{tname,description} = req.body;
    const todo= await todoTable.create({tname,description});
    res.json({msg:"post sucessfull"})
  }
  catch(error){
    console.log(error);
    res.status(500).json({msg:"error"})
  }
    
}   
    
      
  module.exports={
    postTodo
  }
  