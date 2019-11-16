const mongoose = require('mongoose');
module.exports = () => {
    const schema = mongoose.Schema({
        name: String,
        code: String,
    })

    return mongoose.model('room', schema, 'room');
}