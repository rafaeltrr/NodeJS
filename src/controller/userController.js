const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async create (req,res){
        const user = await User.create(req.body);
        return res.json(user);
    },
    async showAll (req,res){
        const user = await User.find();
        return res.json(user);
    },

    async login(req,res){
        const email = req.body.email;
        const password = req.body.password;

        User.findOne({'email':req.body.email,'password':req.body.password}).then(mail => {
            return res.send(mail);
        })

        
    }
}
