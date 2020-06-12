const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb+srv://Rafaeltr:84563206@cluster0-c64gn.mongodb.net/barbeiro',
     {useUnifiedTopology: true,useNewUrlParser: true}
);
requireDir('./src/models')

app.use('/api',require('./src/routes'));
const PORT = process.env.PORT || 3001
app.listen(PORT)