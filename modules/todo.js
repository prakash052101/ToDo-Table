const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const todoTable = sequelize.define('todoTable',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    tname:{
        type: DataTypes.STRING,
        allowNull: false,
        },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});

todoTable.sync()
  .then(() => {
    console.log('Table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating table:', error);
  });

module.exports= todoTable;
