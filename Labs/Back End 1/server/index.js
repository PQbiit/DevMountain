const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];

app.get('/api/users',(req, res) =>{
    res.status(200).send(friends);
});

app.get('/weather/:temperature', (req,res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});

app.listen(4000,() => console.log('Listening on port 4000'));