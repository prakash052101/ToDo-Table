const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Unable to connect to the database', err));

module.exports = sequelize;
