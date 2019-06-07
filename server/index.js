require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const {SERVER_PORT, DATABASE_STRING} = process.env;

app.use(express.json());

massive(DATABASE_STRING).then(db => {
   app.set('db', db);
   console.log('Dabase connected');
});







app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`));