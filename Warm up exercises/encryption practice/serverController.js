const bcrypt = require('bcryptjs');

const users = []

module.exports = {
    registerUser: (req,res) => {
        const {username, email, pw} = req.body;
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(pw,salt);
        let newUser = {
            username,
            email,
            pw: hash
        };
        users.push(newUser);
        res.status(200).send(users);
    },

    loginUser: (req,res) => {
        const {username, pw} = req.body;
        console.log(req.body)
        let targetIndex = users.findIndex(user => user.username = username);
        if(targetIndex !== -1){
            let targetUser = users[targetIndex];
            let pass = bcrypt.compareSync(pw,targetUser.pw);
            if(pass){
                delete targetUser.pw;
                res.status(200).send(targetUser);
            }else{
                res.status(400).send("Wrong Paswword");
            }
        }else{
            res.status(404).send("USER DOES NOT EXIST");
        }
    },
    getAllUsers: (req,res) =>{
        res.status(200).send(users);
    }
}