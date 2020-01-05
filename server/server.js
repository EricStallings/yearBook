const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const PORT = 3000;
const app = express();
app.use(bodyParser());

app.use('/build', express.static(path.resolve(__dirname, '../build/bundle.js')));

app.get('/*', (req, res, next) => res.sendFile(path.join(__dirname, '../index.html')));


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, ()=>{
  console.log(`Now listening on Port ${PORT}`)
});