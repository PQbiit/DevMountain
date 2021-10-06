const express = require('express');
const app = express();
const cors = require('cors');

const vehiclesArr = require('./data/vehicles.json'); // imports vehicles from data directory

app.use(express.json());
app.use(cors());

//Keep track of last used ID
let lastID = vehiclesArr[vehiclesArr.length -1].id + 1

// endpoints here
app.get('/api/vehicles',(req,res) =>{
    res.status(200).send(vehiclesArr);
});

app.post('/api/vehicles',(req,res) => {
    const {make, model, year, color, price} = req.body
    let newCar = {
        id: lastID,
        make,
        model,
        year: parseInt(year),
        color,
        price: parseInt(price)
    };
    vehiclesArr.push(newCar);
    lastID += 1;
    res.status(200).send(vehiclesArr);
});

app.delete('/api/vehicles/:id',(req,res)=>{
    const {id} = req.params;
    const targetId = vehiclesArr.findIndex(car => car.id === +id);
    vehiclesArr.splice(targetId,1);
    res.status(200).send(vehiclesArr);
})

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, function() { console.log(`Server rocking on ${SERVER_PORT}`)})