require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());




mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const routes = require('../routes/routes');
app.use('/api', routes);
const router = express.Router()

module.exports = router;

const authenticate = require('../controllers/auth.js');

app.use('/api', authenticate);



app.use(express.json());

const PORT = process.env.PORT || 3001;



app.get("/", (req, res) => {
    res.json("This is my student service app!");
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
