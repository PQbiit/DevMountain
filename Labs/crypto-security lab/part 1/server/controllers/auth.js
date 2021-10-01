const bcrypt = require('bcryptjs');
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      users.forEach(user => {
        if(user.username === username){
          let targetUserIndex = users.findIndex(user => user.username === username);
          let targetUser = users[targetUserIndex];
          const isValid = bcrypt.compareSync(password,targetUser.password);
          if(isValid){
            delete targetUser.password;
            console.log(targetUser);
            res.status(200).send(targetUser);
            return
          }else{
            res.status(400).send("Wrong password");
            return
          }
        }
      });
    
    },
    register: (req, res) => {
        const {username, email,firstName,lastName,password} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password,salt);
        const newUser = {
          username,
          email,
          firstName,
          lastName,
          password: passwordHash
        }
        console.log('Registering User')
        console.log(newUser)
        users.push(newUser)
        res.status(200).send(newUser);
    }
}