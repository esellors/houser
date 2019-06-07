require('dotenv').config();
const express = require('express');
const massive = require('massive');
const housesCtrl = require('./controller');
const app = express();
const {SERVER_PORT, DATABASE_STRING} = process.env;

app.use(express.json());

massive(DATABASE_STRING).then(db => {
   app.set('db', db);
   console.log('Database connected');
});

app.get('/api/houses', housesCtrl.getAllHouses);
app.post('/api/houses', housesCtrl.addHouse);
app.delete('/api/houses/:id', housesCtrl.deleteHouse);



app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`));