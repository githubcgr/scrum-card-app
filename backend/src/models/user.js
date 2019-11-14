const mongoose = require('mongoose');
module.exports = () => {
    const schema = mongoose.Schema({
        name: String,
        email: String,
        password: String,
        active: Boolean,
    })

    return mongoose.model('user', schema, 'user');
}