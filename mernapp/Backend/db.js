const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://moodiefoodie:moodiefoodie123@cluster0.myx0z2p.mongodb.net/?retryWrites=true&w=majority'

const mongoDB = () =>{
    mongoose.connect(mongoURI, () => {
        console.log("Connected")
    });
}

module.exports = mongoDB;
