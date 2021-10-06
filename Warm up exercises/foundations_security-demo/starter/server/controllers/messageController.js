const bcrypt = require('bcryptjs');
const messages = [];

module.exports = {
    createMessage: (req,res) => {
        const {pin, message} = req.body;
        let targetIndex = -1
        messages.forEach((message, index) => {
            let existing = bcrypt.compareSync(pin,message.pinHash);
            if (existing){
                targetIndex = index;
            }
        });
        if (targetIndex === -1){
            const salt = bcrypt.genSaltSync(10);
            const newHash = bcrypt.hashSync(pin,salt);
            const newMessage = {
                pinHash: newHash,
                messages: [message]
            };

            messages.push(newMessage);
            res.status(200).send(newMessage);

        }else{
           messages[targetIndex].messages.push(message);
           res.status(200).send(messages[targetIndex]);
        }
        console.log(messages);
    }
}