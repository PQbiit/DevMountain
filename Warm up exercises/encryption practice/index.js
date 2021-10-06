const express = require('express');
const app = express();
app.use(express.json());

const controller = require('./serverController');

app.post('/users',controller.registerUser);
app.get('/users',controller.getAllUsers);
app.get('/login', controller.loginUser);

app.listen(4004,() => console.log('Server listening on port 4004'));
