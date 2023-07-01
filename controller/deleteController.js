const path = require('path');
const db = require('../database/db');
const todoTable = require('../modules/todo');

async function deleteTodo(req,res){
  try{
    const todoId= req.params.id;
    const todo = await todoTable.findByPk(todoId);
    if (todo) {
      await todo.destroy(); 
      res.json({ msg: 'todo deleted successfully.' });
    } else {
      res.status(404).json({ msg: 'todo not found.' });
    }
  }
  catch(error){
    res.status(500).json({msg:"error"});
    console.log(error);
  }  
    
}   
      

  module.exports={
    deleteTodo,
  }

  