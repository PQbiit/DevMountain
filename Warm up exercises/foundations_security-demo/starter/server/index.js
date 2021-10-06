const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const msController = require('./controllers/messageController');

app.post('/api/messages',msController.createMessage);

app.listen(4004,() => console.log('Server listening on port 4004'));