const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://moodiefoodie:moodiefoodie123@cluster0.myx0z2p.mongodb.net/?retryWrites=true&w=majority'

const mongoDB = async() =>{
   await mongoose.connect(mongoURI,{useNewUrlParser: true}, (err, result) => {
    if(err) console.log("---", err)
    else{
        console.log("Connected")
    }
    });
}

module.exports = mongoDB;
