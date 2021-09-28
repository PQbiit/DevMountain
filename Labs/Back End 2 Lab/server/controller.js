const db = require('./db.json');
let globalId = 4

module.exports = {
    getHouses: (req,res) => {
        res.status(200).send(db);
    },

    deleteHouse:(req, res) => {
        let index = db.findIndex(elem => elem.id === +req.params.id)
        db.splice(index, 1)
        res.status(200).send(db)
    },
    
    createHouse: (req,res) =>{
        const {address, price, imageURL} = req.body;
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        };
        db.push(newHouse);
        globalId += 1;
        res.status(200).send(db);
    },

    updateHouse: (req, res) => {
         const {id} = req.params;
         const {type} = req.body;
         const targetIndex = db.findIndex(house => house.id === +id);
         const targetHouse = db[targetIndex];

         if (type === 'plus'){
            targetHouse.price += 10000;
            res.status(200).send(db);
         }else if (type === 'minus'){
            targetHouse.price -= 10000;
            res.status(200).send(db);
         }else{
            res.status(400).send('House does not exist!');
         }
    }
}