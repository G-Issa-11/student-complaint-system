const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Admin } = require('../admin/admin.js');
const { secretKey } = require('../config');

const router = express.Router();

router.post('/login', async (req, res) => {
  console.log(Admin);
  
  const { username, password } = req.body;

  // Find the admin with the given username
  // const admin = await Admin.findOne({ username });
  const admins = await Admin.find({ username: username });
  const admin = admins[0]; // get the first admin from the array


  if (!admin) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Check the password
  const passwordMatch = await bcrypt.compare(password, admin.passwordHash);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Generate a JWT token
  const token = jwt.sign({ username: admin.username }, secretKey);

  res.json({ token });
});

module.exports = router;
