// require('dotenv').config();
// const {DATABASE_URL} = process.env
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
  "postgres://kyqjaxvjwopbfv:7d1c94b74e60a8edbe3e22a28af5a3b0f59fbd600a9cdea58701e7dd68cfb38a@ec2-3-225-213-67.compute-1.amazonaws.com:5432/d493dh4naavjp5",
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)
module.exports = sequelize