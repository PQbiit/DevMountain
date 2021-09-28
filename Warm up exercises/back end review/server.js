const exp = require('constants');
const express = require('express');
const app = express();
app.use(express.json());

const data = [
    {
        id: 1,
        food: 'Pizza'
    },
    {
        id: 2,
        food: 'Steak'
    },
    {
        id: 3,
        food: 'Salad'
    }
];

app.get('/food',(req,res)=>{
    res.status(200).send(data);
});

app.get('/food/:id', (req,res)=>{
    const {id} = req.params;
    const foodIndex = data.findIndex(item => item.id === Number(id));
    if (foodIndex !== -1){
        res.status(200).send(data[foodIndex]);
    }else{
        res.status(404).send('<h1>Food item not found!</h1>');
    }
});

app.listen(5050,() => console.log('Server listening on port 5050'));