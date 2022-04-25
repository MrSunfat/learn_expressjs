const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Success');
    } catch (error) {
        console.log('Faluire');
    }
};

module.exports = { connect };
