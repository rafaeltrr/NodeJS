const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({

    name: {
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,
        lowercase:true,
    },

    liked:{
        type: Object,
        required:false

    }
});

mongoose.model('User',UserSchema);