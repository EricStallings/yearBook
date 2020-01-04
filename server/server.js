const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const PORT = 3000;
const app = express();
app.use(bodyParser());

app.use('/build', express.static(path.resolve(__dirname, '../build/bundle.js')));

app.get('/*', (req, res, next) => res.sendFile(path.join(__dirname, '../index.html')));

app.listen(3000, ()=>{
  console.log(`Now listening on Port ${PORT}`)
});