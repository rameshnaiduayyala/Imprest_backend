const Users = require('../models/User');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
  try {
    const {
      hospital_id,
      user_name,
      password,
      first_name,
      middle_name,
      last_name,
      mobile_number,
      email_id,
      active,
      created_by,
      created_date,
      updated_by,
      updated_date
    } = req.body;

    // Find the user by username using Sequelize
    const user = await Users.findOne({ where: { user_name } });
    console.log('user', user)

    if (!user) {
      return res.status(401).json({ message: 'Invalid username and password' });
    }

    // Compare the provided password with the hashed password in the database
    const fetchuser = user.dataValues.password
     const isPasswordValid=(password==fetchuser)
      console.log(password,fetchuser)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username and password' });
    }

    // Create and send a JWT token upon successful login
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    const data = {
      token,
      user_name,
      hospital_id,
      password,
      first_name,
      middle_name,
      last_name,
      mobile_number,
      email_id,
      active,
      created_by,
      created_date,
      updated_by,
      updated_date
    };
    res.json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};





const getAllUsers = async (req, res) => {
  try {
    // Fetch all user records from the database
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getOneUser = async (req, res) => {


  try {
    // Query the database to get user details
    const id = req.params.id;
    const user = await Users.findOne({
      where: { id: id },
    });
    // console.log(user, "user");
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Error retrieving user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};






module.exports = {
  userLogin,
  getAllUsers,
  getOneUser

};
