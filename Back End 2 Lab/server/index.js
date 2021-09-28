const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const PORT_NUMBER = 4004;
const serverController = require('./controller');

app.get('/api/houses',serverController.getHouses);
app.delete('/api/houses/:id',serverController.deleteHouse);
app.post('/api/houses',serverController.createHouse);
app.put('/api/houses/:id',serverController.updateHouse);

app.listen(PORT_NUMBER,()=>console.log(`Server running on port ${PORT_NUMBER}`));