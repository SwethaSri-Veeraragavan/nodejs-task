const User = require('./models');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const {email,phone, name, passout, gender, collegename,degree,department, location } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' });
    }


    const user = new User({
      email,phone, name, passout, gender, collegename,degree,department, location
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed' });
  }
};
