const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
// Connect to MongoDB using the connection string from environment variables.
mongoose.connect('mongodb://localhost:27017/registerform');

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
 