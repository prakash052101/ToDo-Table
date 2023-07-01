const path = require('path');
const db = require('../database/db');
const todoTable = require('../modules/todo');


async function getTodo(req,res){
  try{
    const todoId =req.params.id;
    const todo = await todoTable.findByPk(todoId);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ msg: 'todo not found.' });
    }
    
  }
  catch(error){
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

// async function updateUser(req,res){
//   try{
//        const userId = req.params.id;
//       const { name, email } = req.body;
//       const user = await signup.findByPk(userId);
//       if (user) {
//         user.name = name;
//         user.email = email;
//         await user.save(); // Save the changes to the database
//         res.json({ msg: 'User updated successfully.' });
//       } else {
//         res.status(404).json({ msg: 'User not found.' });
//       }
      
//   }
//   catch(error){
//     console.log(error);
//      res.status(500).send('Internal Server Error');
//   }
        
// }        
            
          
module.exports={
    getTodo,
    
}