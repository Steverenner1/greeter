require('dotenv').config(); //npm i dotenv

const express = require('express');

const server = express(); // creating an instance of an express server

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'Web 23' });
});

// the port is coming from the environment
const port = process.env.PORT || 4000; //making the port dynamic
// the PORT will be set by heroku when we deploy

server.listen(4000, () => {
  console.log('\n Server running on port 4000 \n');
});
