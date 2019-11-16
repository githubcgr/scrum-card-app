module.exports = () => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://172.17.0.1:27017/scrumcards', {useNewUrlParser: true});

    return mongoose;
}