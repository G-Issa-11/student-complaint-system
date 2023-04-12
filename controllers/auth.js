const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const students = require('../dataGenerator');


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());


// Secret key for JWT
const secretKey = 'mysecretkey';

// Route to authenticate a user and generate a JWT token
app.post('/login', async (req, res) => {
    console.log("hello world");
  const { email, password } = req.body; 

  // Find the student with the given email
  const student = students.find(s => s.email === email);

  if (!student) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Check the password
  const passwordMatch = await bcrypt.compare(password, student.passwordHash);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Generate a JWT token
  const token = jwt.sign({ email: student.email }, secretKey);

  res.json({ token });
});

// Route to get student information (requires authentication)
app.get('/api/students/:studentNumber', (req, res) => {
  const studentNumber = req.params.studentNumber;
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, secretKey);

    // Find the student with the given student number
    const student = students.find(s => s.studentNumber === studentNumber);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Check if the email in the token matches the student's email
    if (decodedToken.email !== student.email) {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Return the student information
    res.json(student);
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
});


module.exports = app;
